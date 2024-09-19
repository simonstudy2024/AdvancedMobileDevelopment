import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect, useCallback } from 'react';

const quotes = [
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

export default function Dailyquote() {

  const [newQuote, setnewQuote ] = useState("Keep taking time for yourself until you're you again");

  const shuffle =useCallback(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setnewQuote(quotes[index]);
  }, []);
  
  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);

  }, [shuffle])

  return (
        <View style={styles.dailyquote}>
            <Text style={styles.title}>{newQuote}</Text>
        </View>
  )
}


const styles = StyleSheet.create({

    dailyquote: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
        height: 110,
        width: 300,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      },

    title: {
      textAlign: 'center',
      color: '#000000',
      fontSize: 20,
      color : 'white',
    }
})
