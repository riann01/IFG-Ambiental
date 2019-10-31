/*import Pool from 'pg';
import { Alert } from 'react-native';

const client = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'IFG-Ambiental'
})

async function userLogin() {
    try {
        var response = await client.query("SELECT * FROM user;")
        Alert.alert(response.rows)
    }
    catch(error) {
        Alert.alert('Hmm... Parece que você está sem conexão. Erro: ' + error)
    }
    finally {
        client.end()
    }
}*/