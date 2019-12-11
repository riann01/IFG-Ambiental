import React from 'react'
import { SafeAreaView, Image, ScrollView, View,TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { Drawer, ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light as darkTheme } from '@eva-design/eva';

/*import { logout } from '../store/actions/user'
import { store } from '../../index'*/

export default ({ navigation }) => {
    
    const onSelect = (index) => {
        const { [index]: selectedTabRoute } = navigation.state.routes;
        navigation.navigate(selectedTabRoute.routeName);
    };

    return (
        <ApplicationProvider        
        theme={darkTheme}
        mapping={mapping}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'ghostwhite'}}>
                <Drawer data={[{ title: 'Início' }, { title: 'Fórum' }, { title: 'Perfil' }, { title: 'Telefones' }, { title: 'Informações' }, { title: 'Calendário' }, { title: 'Sobre' }, { title: 'Sair' }]} onSelect={onSelect}/>
            </SafeAreaView>
        </ApplicationProvider>
    )
}