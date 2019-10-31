import React from 'react'
import { SafeAreaView, Image, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation'

export default props => {

    /*const deslogar = () => {
        props.navigation.navigate('Auth')
    }*/

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#DBDADA' }}>
            <View style={{ height: 170, backgroundColor: '#DBDADA', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: 150, width: 150 }}></Image>
            </View>
            <ScrollView>
                <DrawerItems {...props} />
                <TouchableOpacity style={{ marginTop: 15, alignItems: 'center', backgroundColor: '#C0C0C0', padding: 15 }}>
                    <Text
                        style={{
                            fontSize: 23,
                            fontFamily: 'PT Sans Caption',
                            fontWeight: 'normal',
                            color: '#54514C'
                        }}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}