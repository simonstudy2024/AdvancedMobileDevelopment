import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const logoImg = require("../assets/vertical_logo.png");

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={logoImg} style={{width: 120, height: 80}}></Image>
      {/* <Text style={styles.title}>Logo</Text> */}
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
        height: 170,
        paddingTop: 50,
        backgroundColor: '#ff9600',
        // backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
})
