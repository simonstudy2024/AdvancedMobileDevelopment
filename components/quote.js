import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Quote() {
    const navigation = useNavigation();
    return (
    <View style={styles.quoteContainer}>
        <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate("DetailScreen")}>
            <Text style={styles.title}>Good Start 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate("DetailScreen")}>
            <Text style={styles.title}>Good Start 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate("DetailScreen")}>
            <Text style={styles.title}>Good Start 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate("DetailScreen")}>
            <Text style={styles.title}>Good Start 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate("DetailScreen")}>
            <Text style={styles.title}>Good Start 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate("DetailScreen")}>
            <Text style={styles.title}>Good Start 6</Text>
        </TouchableOpacity>
        {/* <View style={styles.quote}>
          <Text style={styles.title}>Good Start</Text>
        </View> */}
       
    </View>
  )
}


const styles = StyleSheet.create({

    quoteContainer: {
      paddingBottom: 60,
    },

    quote: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        height: 90,
        width: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
    },

    title: {
      textAlign: 'center',
      color: '#000000',
      fontSize: 20,
    //   fontWeight: 'bold',
      color : 'black',

    },
    
    button: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        height: 90,
        width: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        elevation:3
    }
})
