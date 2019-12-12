import firebase from 'react-native-firebase';
import { 
    PASSWORD_RESETED, 
    RESETING_PASSWORD, 
    PASSWORD_CHANGED, 
    DISMISS_ERROR_LOGIN, 
    ERROR_AUTHENTICATION, 
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    IS_AUTHENTICATING,
    USER_AUTHENTICATED,
    CHANGING_PASSWORD
} from './actionTypes';
import { fetchTopicos } from './forum';
import { fetchTextos } from './textos';

// LOGIN - DADOS USUÁRIO - REGISTRAR
/////////////////

export const userLogged = (user) => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const isAuthenticating = () => {
    return {
        type: IS_AUTHENTICATING
    }
}

export const userAuthenticated = () => {
    return {
        type: USER_AUTHENTICATED
    }
}

export const errorAuthentication = (mensagem) => {
    return {
        type: ERROR_AUTHENTICATION,
        payload: mensagem
    }
}

export const dismissErrorLogin = () => {
    return {
        type: DISMISS_ERROR_LOGIN
    }
}

export const deslogar = () => {
    return dispatch => {

        dispatch(logout())

        if(firebase.auth().currentUser !== null){
            firebase.auth().signOut()
        }

    }
}

export const login = (user) => {
    return dispatch => {
        dispatch(isAuthenticating())
        firebase.auth().signInWithEmailAndPassword(user.email, user.senha)
            .then((res) => {
                dispatch(fetchTopicos())
                dispatch(fetchTextos())
                firebase.firestore().collection('usuarios').doc(`${res.user.uid}`).get()
                    .then((res2) => {
                        if (res2.exists) {
                            
                            let user = res2.data()
                            
                            let userFinal = {
                                key: res.user.uid,
                                ...user
                            }
                            
                            dispatch(userLogged(userFinal))
                            dispatch(userAuthenticated())

                        }
                    })
                    .catch(() => {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'Ocorreu um erro ao sincronizar seus dados! Tente novamente!'}));
                    })
            })
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email': {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'Email ou senha incorretos!'}));
                        break
                    }
                    case 'auth/user-disabled': {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'Usuário desabilitado!'}));
                        break
                    }
                    case 'auth/user-not-found': {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'Usuário não encontrado!'}));
                        break
                    }
                    case 'auth/wrong-password': {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'Email ou senha incorretos!'}));
                        break
                    }
                    default: {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'Ocorreu um erro ao sincronizar seus dados! Tente novamente!'}));
                        break
                    }
                }
            })

    }
}


export const registrar = (novoUsuario) => {
    return dispatch => {
        dispatch(isAuthenticating())
        firebase.auth().createUserWithEmailAndPassword(novoUsuario.email, novoUsuario.senha)
            .then((res) => {
                let novoUsuarioDados = {
                    nome: novoUsuario.nome,
                    email: novoUsuario.email,
                    instituicao: novoUsuario.instituicao,
                    titulo: novoUsuario.titulo,
                    telefone: novoUsuario.telefone,
                    dataNascimento: novoUsuario.dataNascimento
                }
                firebase.firestore().collection('usuarios').doc(`${res.user.uid}`).set(novoUsuarioDados)
                .then(() => {

                    dispatch(fetchTopicos())
                    dispatch(fetchTextos())
                    dispatch(userLogged({ ...novoUsuarioDados, key: res.user.uid }))
                    dispatch(userAuthenticated())
                })
                .catch((err) => {
                    dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'Ocorreu um erro ao sincronizar seus dados! Tente novamente!'}));
                })
            })
            .catch((err) => {
                switch(err.code){
                    case 'auth/email-already-in-use': {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'O email digitado já está em uso! Utilize a função "Esqueci minha senha"!'}));
                        break
                    }
                    case 'auth/invalid-email': {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'O email digitado é inválido!'}));
                        break
                    }
                    case 'auth/weak-password': {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'A senha digitada é muito fraca!'}));
                        break
                    }
                    default: {
                        dispatch(errorAuthentication({titulo: 'Erro', mensagem: 'Ocorreu um erro ao tentar realizar seu cadastro! Tente novamente!'+err}));
                        break
                    }
                }
            })
    }
}

export const changingPassword = () => {
    return {
        type: CHANGING_PASSWORD
    }
}

export const passwordChanged = (mensagem) => {
    return {
        type: PASSWORD_CHANGED,
        payload: mensagem
    }
}

export const changePassword = (senhaAtual, senha) => {
    return dispatch => {

        dispatch(changingPassword())

        let user = firebase.auth().currentUser

        let credencial = firebase.auth.EmailAuthProvider.credential(user.email, senhaAtual)

        user.reauthenticateWithCredential(credencial)
        .then(() => {
            firebase.auth().currentUser.updatePassword(senha)
                .then(() => {
                    dispatch(passwordChanged({ titulo: 'Sucesso!', mensagem: 'Sua senha foi alterada!' }))
                })
                .catch((err) => {                                      
                    dispatch(passwordChanged({ titulo: 'Erro!', mensagem: 'Ocorreu um erro ao tentar efetuar a troca da senha!' }))
                                         
                })
        })
        .catch((err) => {
            dispatch(passwordChanged({ titulo: 'Erro!', mensagem: 'Ocorreu um erro ao tentar efetuar a troca da senha!' }))
        })

    }

}

export const resetingPassword = () => {
    return {
        type: RESETING_PASSWORD
    }
}

export const passwordReseted = (mensagem) => {
    return {
        type: PASSWORD_RESETED,
        payload: mensagem
    }
}


export const forgotPassword = (email) => {
    return dispatch => {
        dispatch(resetingPassword())
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                dispatch(passwordReseted({ titulo: 'Email enviado!', mensagem: 'Você receberá um email com as instruções para alteração de senha!' }))
            })
            .catch((err) => {
                dispatch(passwordReseted({ titulo: 'Erro!', mensagem: 'Ocorreu um erro ao tentar enviar o email para redefinir sua senha! Tente novamente!' }))
            })
    }
}


export const changeEmail = (senhaAtual, novoEmail, usuarioKey) => {
    return dispatch => {

        dispatch(alterandoDados())

        let user = firebase.auth().currentUser

        let credencial = firebase.auth.EmailAuthProvider.credential(user.email, senhaAtual)

        user.reauthenticateWithCredential(credencial)
        .then(() => {
            firebase.auth().currentUser.updateEmail(novoEmail)
            .then(() => {

                firebase.firestore().collection('usuarios').doc(`${usuarioKey}`).update({ email: novoEmail })
                .then(()=>{
                    firebase.firestore().collection('usuarios').doc(`${usuarioKey}`).get()
                    .then((res2) => {
                        if (res2) {
                            let user = res2.data()
                            let userFinal = {
                                key: usuarioKey,
                                ...user
                            }
                            dispatch(userLogged(userFinal))
                            dispatch(dadosAlterados({ titulo: 'Sucesso!', mensagem: 'Você receberá um email com a confirmação da troca!' }))
                        }
                    })
                    .catch(() => {
                        dispatch(dadosAlterados({ titulo: 'Ops!', mensagem: 'Seu email foi alterado mas não foi possível sincronizar seus dados! Faça o login novamente!' }))
                    })            
                })
                .catch((err)=>{
                    dispatch(dadosAlterados({ titulo: 'Ops!', mensagem: 'Seu email foi alterado mas ocorreu algum erro! Entre em contato com o suporte!' }))
                })
                
            })
            .catch((err) => {
                switch(err.code){
                    case 'auth/invalid-email': {
                        dispatch(dadosAlterados({ titulo: 'Erro!', mensagem: 'Email inválido!' }))
                        break;
                    }
                    case 'auth/email-already-in-use': {
                        dispatch(dadosAlterados({ titulo: 'Erro!', mensagem: 'O email já está em uso!' }))
                        break;
                    }
                    case 'auth/requires-recent-login': {
                        dispatch(dadosAlterados({ titulo: 'Erro!', mensagem: 'Ocorreu um erro ao tentar efetuar a troca do email! Relogue e tente novamente!' }))
                        break;
                    }
                    default: {                    
                        dispatch(dadosAlterados({ titulo: 'Erro!', mensagem: 'Ocorreu um erro ao tentar efetuar a troca do email!' }))
                        break;
                    }
                }
            })
        })
        .catch((err) => {
            dispatch(dadosAlterados({ titulo: 'Erro!', mensagem: 'Ocorreu um erro ao tentar efetuar a troca do email!' }))            
        })

    }

}
