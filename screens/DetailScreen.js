import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header2 from '../components/header2';
import Texttitle from '../components/texttitle';
import Qtext from '../components/qtext';

const DetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <Header2 />
        <View style={styles.content}>
            <Texttitle />
            <Qtext />
        </View>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#ff9600',
        paddingBottom: 30,
    },

    content: {
        alignItems:'center',
    }
})
