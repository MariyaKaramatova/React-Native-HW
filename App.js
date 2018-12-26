import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Account from './Account';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={{ width: 50, height: 50 }} source={require('./img/client.jpg')} />
          <View style={styles.profileData}>
            <Text style={styles.clientName}>Cat Client</Text>
            <Text style={styles.clientEmail}>cat.client@something.com</Text>
          </View>
        </View>
        <View style={styles.bankAccount}>
          <Account currency='BGN' />
          <Account currency='USD' />
          <Account currency='EUR' />
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
  profile: {
    padding: 20,
    flex: 1,
    flexDirection: "row"
  },
  profileData: {
    padding: 2,
    flexDirection: "column"
  },
  clientName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  clientEmail: {
    fontSize: 17,
  },
  bankAccount: {
    margin: 10,
    flex: 3,
    flexDirection: "row"
  }
});