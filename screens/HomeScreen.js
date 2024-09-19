import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/header';
import Dailycard from '../components/dailycard';
import Dailyquote from '../components/dailyquote';
import Category from '../components/category';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = (props) => {
    console.log(props);
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
                <Header />
                <View style={styles.content}>
                        <Dailycard />
                        <Dailyquote />
                        <View style={styles.categoryContainer}>
                            <TouchableOpacity style={styles.button}
                            onPress={()=> navigation.navigate("ListScreen")}>
                                <Text style={styles.title}>Inspiration</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                            onPress={()=> navigation.navigate("ListScreen")}>
                                <Text style={styles.title}>Motivation</Text>
                            </TouchableOpacity>
                        </View>
                </View>
        </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: '#ff9600',
    },

    content: {
        alignItems:'center',
    },

    title: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        color : 'grey',
        // color : 'black',
        letterSpacing: 3,
        textTransform: 'uppercase',
      },
    
    button: {
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
        elevation: 3
      },

      categoryContainer:{
        paddingBottom: 50,
      }
})

