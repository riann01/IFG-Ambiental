import React, { Component } from 'react'
import Navigator from './Navigator'
import { mapping, light as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack}/>
                <ApplicationProvider
                mapping={mapping}
                theme={darkTheme}>
                    <Navigator />                
                </ApplicationProvider>
            </React.Fragment>
        )
    }

}

export default App

/*
const mapStateToProps = ({ mensagem, user }) => {
    return {
        titulo: mensagem.titulo,
        texto: mensagem.texto,
        isLoadingLogin: user.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        limparMensagem: () => {
            dispatch(setMensagem({ titulo: '', texto: '' }))
        }
    }
}*/



/*
 <Dialog.Container visible={this.state.dialogObjetivoConcluido}>
                    <Dialog.Title>Objetivo Concluído!</Dialog.Title>
                    <Dialog.Description>
                        Você concluiu o objetivo com sucesso!
                    </Dialog.Description>
                    <Dialog.Button label="OK" onPress={this.handleConfirmaObjetivoConcluido} />
                </Dialog.Container>
                <Dialog.Container visible={this.state.dialogFecharSemObjetivo}>
                    <Dialog.Title>Ops!</Dialog.Title>
                    <Dialog.Description>
                        Você ainda não concluiu o objetivo. Deseja fechar mesmo assim?
                    </Dialog.Description>
                    <Dialog.Button label="Cancelar" onPress={() => this.setState({dialogFecharSemObjetivo: false})}/>
                    <Dialog.Button label="Continuar" onPress={this.handleConfirmaFechar} />
                </Dialog.Container>

*/