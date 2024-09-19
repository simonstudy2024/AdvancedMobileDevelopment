import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Category2() {
  return (
    <View style={styles.category2}>
      <Text style={styles.title}>Inspiration</Text>
    </View>
  )
}


const styles = StyleSheet.create({

    category2: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        // marginTop: 40,
        // marginBottom: 30,
        height: 120,
        width: 300,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      },

    title: {
      textAlign: 'center',
      color: '#000000',
      color : 'white',
      fontSize: 20,
      letterSpacing: 6,
      textTransform: 'uppercase',
    }
})
