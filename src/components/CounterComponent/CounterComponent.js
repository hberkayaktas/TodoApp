import React from 'react'
import {StyleSheet,View ,Text} from 'react-native'

function CounterComponent(props) {
  return (
      <View style={styles.container}>
            <Text style={styles.counter}>Yapılacaklar: {props.total}</Text>
      </View>
  )
}

export default CounterComponent

const styles = StyleSheet.create({
      container: {
            padding:5,
            justifyContent:'flex-end',
            alignItems:'flex-end',
            //backgroundColor:'red',
      },
      counter:{
            fontSize:20,
            fontWeight:'bold',
      }
      
    });