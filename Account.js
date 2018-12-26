import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Picker, Alert } from 'react-native';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 100,
            newAmount: 0,
            actionType: "withdraw"
        }
    }

    enterAmount = inputValue => {
        this.setState({ newAmount: parseInt(inputValue) });
    }

    onPressMakeTransaction = () => {
        var actionType = this.state.actionType;

        if (actionType == "withdraw") {
            this.setState({ amount: this.state.amount - this.state.newAmount })
            Alert.alert('Withdrawn ' + this.state.newAmount + ' ' + this.props.currency)
        }
        else if (actionType == "add") {
            this.setState({ amount: this.state.amount + this.state.newAmount })
            Alert.alert('Added ' + this.state.newAmount + ' ' + this.props.currency)
        }
    }

    chooseOperation = value => {
        this.setState({ actionType: value })
    }


    render() {
        return (
            <View style={styles.container}>                
                <View style={styles.bankAccount}>
                    <View style={styles.currency}>
                        <Text> {this.props.currency} </Text>
                        <Text> Total amount: {this.state.amount} </Text>

                        <TextInput
                            placeholder="Enter amount"
                            keyboardType="numeric"
                            onChangeText={this.enterAmount}>
                            {this.state.newAmount}
                        </TextInput>

                        <TouchableOpacity onPress={() => this.setState({ newAmount: this.state.newAmount + 1 })}>
                            <Text> + </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ newAmount: this.state.newAmount - 1 })}>
                            <Text> - </Text>
                        </TouchableOpacity>

                        <Picker
                            selectedValue={this.state.actionType}
                            style={{ height: 50, width: 150 }}
                            onValueChange={this.chooseOperation}>
                            <Picker.Item label="Withdraw money" value="withdraw" />
                            <Picker.Item label="Add money" value="add" />
                        </Picker>

                        <TouchableOpacity onPress={this.onPressMakeTransaction}>
                            <Text> Make Transaction </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    bankAccount: {
        margin: 10,
        flex: 3,
        flexDirection: "row"
    },
    currency: {
        flex: 1,
    }
});