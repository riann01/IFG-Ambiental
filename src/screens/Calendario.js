import React from 'react';
import { StyleSheet, Spinner, View, ScrollView } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
    ApplicationProvider,
    Layout,
    Text,
    IconRegistry,
    Icon,
    TopNavigationAction,
    TopNavigation,
    ListItem,
    List,
    Button
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { connect } from 'react-redux'
import { Container } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-ios-back-outline' />
)

renderItem = (item) => {
    return (
        <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
    )
}

renderEmptyDate = () => {
    return (
        <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
}

rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
}

timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}


class Calendario extends React.Component {
    backAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => this.props.navigation.goBack()}
        />
    )

    render() {
        LocaleConfig.locales['br'] = {
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abril', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
            today: 'Hoje'
        };

        LocaleConfig.defaultLocale = 'br';
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider
                    mapping={mapping}
                    theme={darkTheme}>
                    <TopNavigation
                        leftControl={this.backAction()}
                        title='Retornar' />
                    <Container>
                        <Text style={styles.text} category='h4'>Calendário Ambiental</Text>
                        <Calendar
                            markedDates={{
                                '2019-12-13': { dots: [{ key: 'vacation', color: 'red' }], selected: true, selectedColor: 'red' },

                            }} onDayPress={(day) => { treatDate(day) }} />
                    </Container>
                </ApplicationProvider>
            </React.Fragment>
        )
    }

}



const styles = StyleSheet.create({

    text: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})

export default Calendario