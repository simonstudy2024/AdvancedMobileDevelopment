import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Qtext() {
  return (
    <View style= {styles.qtextContainer}>
        <View style={styles.qtext}>
          <Text style={styles.title}>The sun picks out a perfect morning to a perfect day.</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

    qtextContainer: {

      paddingBottom: 50,

    },

    qtext: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        height: 520,
        width: 320,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        padding:28,
        paddingTop:40,
        elevation:3
      },

    title: {
      textAlign: 'center',
      color: '#000000',
      fontSize: 20,
      // fontWeight: 'bold',
      color : 'black',

    }
    
})
