import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const logoImg = require("../assets/horizontal_logo.png");

export default function Header2() {
  return (
    <View style={styles.header2}>
      <Image source={logoImg} style={{width: 160, height: 80}}></Image>
      {/* <Text style={styles.title}>Logo</Text> */}
    </View>
  )
}


const styles = StyleSheet.create({
    header2: {
        // height: 170,
        height: 100,
        paddingTop: 30,
        backgroundColor: '#ff9600',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    //   paddingTop: 32,
    }
})
