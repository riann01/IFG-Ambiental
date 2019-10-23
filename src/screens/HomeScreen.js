import React from 'react';
import { StyleSheet } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from 'react-native-ui-kitten';

const ApplicationContent = () => (
    <Layout style={styles.container}>
        <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
        <Button>BUTTON</Button>
    </Layout>
  ); 

const HomeScreen = () => (
    <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
        <ApplicationContent/>
    </ApplicationProvider>
);


const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16 },
});

export default HomeScreen;
