import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, TextInput, StyleSheet, ImageBackground, Dimensions, ReactPropTypes} from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

   state = {
      originalBill: 0,
      billWithTip: 0,
      tip: 0,
      convertedAmount: 0,
      convertDisplay: 'block',
      tipDisplay: 'none',
      homeDisplay: 'none',
    }
    
        handleTipPress = () => this.setState(state => ({
            tipDisplay: 'block',
            convertDisplay: 'none',
            homeDisplay: 'none',
        }));
        
        handleConvertPress = () => this.setState(state => ({
            tipDisplay: 'none',
            convertDisplay: 'block',
            homeDisplay: 'none',
        }));
        
        handleHomePress = () => this.setState(state => ({
            tipDisplay: 'none',
            convertDisplay: 'none',
            homeDisplay: 'block',
        }));
    
        convertAmount = (rate) => {
            this.setState({ 
                convertedAmount: this.state.originalBill * rate
            })
        }
        
        eur = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*1.03),
                tip: 10,
            })
                }
        rupee = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*82.42),
                tip: 15,
            })
                            }
        btc = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*0.000052),
                tip: 20,
            })
                            }
        dlore = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*.0004),
                tip: 25,
            })
                            }
        t10 = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*1.10),
                tip: 10,
            })
                }
                            t15 = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*1.15),
                tip: 15,
            })
                            }
                            t20 = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*1.20),
                tip: 20,
            })
                            }
                            t25 = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*1.25),
                tip: 25,
            })
                            }
                            t30 = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*1.30),
                tip: 30,
            })
                            }
                            t35 = () => {
            this.setState({ 
                billWithTip: (this.state.originalBill*1.35),
                tip: 35,
            })
                            }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.background}>
                    <View style={{ display: this.state.convertDisplay }}>
                        <Text style={styles.title}>
                            Currency Converter (USD)
                        </Text>
                        <Text style = {styles.paragraph}>
                        Money:
                        </Text>
                            <TextInput style={styles.textInput}
                            onChangeText={(originalBill) => this.setState({originalBill})}
                            value={this.state.originalBill}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                                onPress={
                                    this.eur
                                }>
                                <Text style={styles.buttonText}>
                                    EUR
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                                onPress={
                                this.rupee
                            }
                            >
                                <Text style={styles.buttonText}>
                                    Rupee
                                </Text>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight style={styles.button}
                                                    onPress={
                                this.btc
                            }
                            >
                                <Text style={styles.buttonText}>
                                    BTC
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.button}
                                                    onPress={
                                this.dlore
                            }
                            >
                                <Text style={styles.buttonText}>
                                    DLore
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <Text style={styles.paragraph}>
                            Conversion Rate: {this.state.billWithTip.toFixed(2)}
                        </Text>
                    </View>
                    
                    <View style={{ display: this.state.tipDisplay }}>
                        <Text style={styles.title}>
                    Will's Tip Calculator
                </Text>
                <Text style = {styles.paragraph}>
                Money:
                </Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(originalBill) => this.setState({originalBill})}
                    value={this.state.originalBill}
                />
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}
                        onPress={
                        this.t10
                    }>
                        <Text style={styles.buttonText}>
                            10%
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                        onPress={
                        this.t15
                    }
                    >
                        <Text style={styles.buttonText}>
                            15%
                        </Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}
                                            onPress={
                        this.t20
                    }
                    >
                        <Text style={styles.buttonText}>
                            20%
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                                            onPress={
                        this.t25
                    }
                    >
                        <Text style={styles.buttonText}>
                            25%
                        </Text>
                    </TouchableHighlight>
                </View>
                                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}
                                            onPress={
                        this.t30
                    }
                    >
                        <Text style={styles.buttonText}>
                            30%
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}
                                            onPress={
                        this.t35
                    }
                    >
                        <Text style={styles.buttonText}>
                            35%
                        </Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.paragraph}>
                     Payment with Tip: ${this.state.billWithTip.toFixed(2)}
                </Text>
                    </View>
                    
                    <View style={{ display: this.state.homeDisplay }}>
                        <Text style={styles.title}>
                            Welcome to Will's SUPER cool app :) !
                        </Text>
                    </View>
                    <View style={styles.navbar}>
                    </View>
                    <TouchableHighlight
                            onPress={
                                this.handleTipPress
                            }
                    >
                    <View style={styles.navbutton}>
                        <Text style={styles.buttonText}>
                        Tip Calculator
                        </Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                            onPress={
                                this.handleHomePress
                            }
                    >
                    <View style={styles.navbutton}>
                        <Text style={styles.buttonText}>
                        Home
                        </Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                            onPress={
                                this.handleConvertPress
                            }
                    >
                    <View style={styles.navbutton}>
                        <Text style={styles.buttonText}>
                        Currency Converter
                        </Text>
                    </View>
                    </TouchableHighlight>
                </View>
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#44633F',
    },
    navbar: {
        flex: .2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderTopLength: deviceWidth,
        borderColor: 'white'
    },
    navbutton: {
        height: 40,
        width: 240,
        backgroundColor: '#5CAB7D',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    scoreContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    textInput: {
        height: 50,
        width: 200,
        borderWidth: 1,
        color: 'white',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        borderColor: '#3F4B3B'
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,

    },
    buttonContainer: {
        flexDirection: 'row',
        marginLeft: 10
    },
    button: {
        height: 50,
        width: 80,
        backgroundColor: '#5CAB7D',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
