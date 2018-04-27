import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default class MainScreen extends React.Component {
  state = {
    hours: '2',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Timmar</Text>
        <TextInput
          style={{
            width: 200,
            height: 20,
            borderWidth: 1,
            borderColor: '#b5b5b5',
          }}
          // keyboardType="numeric"
          onChangeText={hours => {
            console.log(hours)
            const parsedHours = hours.replace(/[^0-9]/g, '')
            console.log(parsedHours)
            this.setState({ hours: parsedHours })
          }}
          value={this.state.hours}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
