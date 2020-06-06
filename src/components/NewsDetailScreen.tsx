import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class ContactScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>details news Screen</Text>
            <Text>Parte per img</Text>
          </View>
          <View>
            <Text>Parte per il titolo</Text>
            <Text>Parte per la descrizione</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
