import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Category() {
  return (
    <View style={styles.categoryContainer}>
         <View style={styles.category}>
            <Text style={styles.title}>Inspiration</Text>
        </View>
        <View style={styles.category}>
            <Text style={styles.title}>Motivation</Text>
        </View>
    </View>
   
  )
}


const styles = StyleSheet.create({

    categoryContainer : {
        paddingBottom: 60,
        // backgroundColor: 'black',
    },

    category: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        height: 100,
        width: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation:3
      },

    title: {
      textAlign: 'center',
      color: '#000000',
      fontSize: 18,
      color : 'grey',
      fontWeight: 'sbold',
      letterSpacing: 3,
      textTransform: 'uppercase',
    }
})
