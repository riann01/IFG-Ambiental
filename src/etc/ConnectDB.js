const { Client } = require('pg')
import { Alert } from 'react-native'

const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "IFG-Ambiental"
})

function userLogin() {
    client.connect()
    .then(() => Alert.alert('Conexão realizada com sucesso.'))
    .catch(() => Alert.alert('Hmm... Parece que você está sem conexão.'))
    .finally(client.end())
}