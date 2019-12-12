import firebase from 'react-native-firebase';



export const fetchMensagens = (alunoKey, personalKey, nomeAluno) => {

    return dispatch => {

        firebase.database().ref(`chatPersonal/${personalKey}/${alunoKey}/messages`)
        .on('value', (snapshot) => {

            setTimeout(() => {
                
                const mensagens = snapshot.val() || []

                let mensagensEnviar = []

                Object.values(mensagens).forEach(msg => { mensagensEnviar.push(msg) })
                
                dispatch(addChat(alunoKey, mensagensEnviar, nomeAluno))

            }, 0)

        })

    }
}