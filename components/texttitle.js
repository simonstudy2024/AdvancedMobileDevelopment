import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Texttitle() {
  return (
    <View style={styles.texttitle}>
      <Text style={styles.title}>Good Start</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    texttitle: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        // marginTop: 20,
        marginBottom: 20,
        height: 100,
        width: 300,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      },

    title: {
      textAlign: 'center',
      color: '#000000',
      fontSize: 30,
      // fontWeight: 'bold',
      color : 'white',
      letterSpacing: 2,
      paddingTop: 10,
    }
})
