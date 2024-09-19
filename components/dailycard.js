import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect, useCallback } from 'react';

const cards = [
  'The sun picks out a perfect morning to a perfect day',
  'Believe you can and you are halfway there',
  'Once you replace negative thoughts with positive ones, you will start having positive results',
  'I find that the harder I work, the more luck I seem to have',
  'The only way to do great work is to love what you do',
  'You are your best thing',
  'Friends are the family we choose',
  'Each day turns into a fascinating, magical day, when you approach it with a positive attitude',
  'All dreams are within reach. All you have to do is keep moving towards them',
]

export default function Dailycard() {

  const [newCard, setnewCard ] = useState("The sun picks out a perfect morning to a perfect day");

  const shuffle =useCallback(() => {
    const index = Math.floor(Math.random() * cards.length);
    setnewCard(cards[index]);
  }, []);
  
  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);

  }, [shuffle])

  return (
    <View style={styles.dailycard}>
        <View style={styles.cardBox}>
            {/* <Text style={styles.title}>The sun picks out a perfect morning to a perfect day</Text> */}
            <Text style={styles.title}>{newCard}</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

    dailycard: {
        textAlign: 'center',
        color: '#000000',
        // fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        height: 400,
        width: 250,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        padding: 38,
        elevation:3
      },

    cardBox: {
        color: '#000000',
        height: 380,
        width: 230,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        padding: 26,
        borderWidth: 2,
        borderColor: 'lightgrey',
    },

    title: {
      textAlign: 'center',
      color: '#000000',
      fontSize: 30,
      fontWeight: 'bold',
      color : 'black',
    }
})
