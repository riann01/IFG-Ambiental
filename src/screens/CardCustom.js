import React from 'react'
import { Layout, Icon, Text } from 'react-native-ui-kitten'
import Ripple from 'react-native-material-ripple'

class CardCustom extends React.Component {
    state = {
        height: '35%',
        width: '90%',
        color: '#FFFFFF',
        iconName: 'activity-outline',
        title: 'Add a title Here',
        children: React.Component,
        nativeTouchType: 'all',
        onPress: () => { },
        onLongPress: () => { }
    }

    componentDidMount() {
        this.setState({ height: this.props.height })
        this.setState({ width: this.props.width })
        this.setState({ color: this.props.color })
        this.setState({ iconName: this.props.iconName })
        this.setState({ title: this.props.title })
        this.setState({ children: this.props.children })
        this.setState({ nativeTouchType: this.props.nativeTouchType })
        this.setState({ onPress: this.props.onPress })
        this.setState({ onLongPress: this.props.onLongPress })
    }

    render() {

        if (this.state.nativeTouchType === 'header-only') {
            return (
                <Layout style={{
                    elevation: 4,
                    height: this.state.height,
                    width: this.state.width,
                    borderRadius: 16,
                    alignSelf: 'center',
                    marginBottom: 5
                }}>
                    <Ripple
                        onPress={this.state.onPress}
                        onLongPress={this.state.onLongPress}
                        rippleColor={'#505E80'}
                        rippleContainerBorderRadius={16}
                        style={{
                            height: '30%',
                            width: '100%'
                        }}>

                        <Layout style={{
                            backgroundColor: this.state.color,
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Layout style={{
                                borderRadius: 20,
                                width: 40,
                                height: 40,
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Icon name={this.state.iconName} width={32} height={32} fill='#fff' />
                            </Layout>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>{this.state.title}</Text>

                        </Layout>
                    </Ripple>
                    <Layout style={{
                        width: '100%',
                        height: '70%',
                        backgroundColor: '#FCFCFC',
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                    }}>
                        <Layout style={{

                            width: '90%',
                            backgroundColor: '#FCFCFC'
                        }}>
                            {this.state.children}
                        </Layout>
                    </Layout>

                </Layout>
            )
        }
        else {
            if (this.state.nativeTouchType === 'all') {
                return (
                    <Layout style={{
                        elevation: 4,
                        height: this.state.height,
                        width: this.state.width,
                        borderRadius: 16,
                        alignSelf: 'center',
                        marginBottom: 5
                    }}>
                        <Ripple
                            onPress={this.state.onPress}
                            onLongPress={this.state.onLongPress}
                            rippleColor={'#505E80'}
                            rippleContainerBorderRadius={16}
                            style={{
                                height: '100%',
                                width: '100%'
                            }}>

                            <Layout style={{
                                backgroundColor: this.state.color,
                                width: '100%',
                                height: '30%',
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16,
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Layout style={{
                                    borderRadius: 20,
                                    width: 40,
                                    height: 40,
                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Icon name={this.state.iconName} width={32} height={32} fill='#fff' />
                                </Layout>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{this.state.title}</Text>

                            </Layout>
                            <Layout style={{
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {this.state.children}
                            </Layout>
                        </Ripple>
                    </Layout>
                )
            }
        }
    }
}

export default CardCustom