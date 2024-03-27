import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { COLORS } from '../constants/colors';
import { useState } from 'react';

let userPfp = require('../../public/img/carb_2.png');


export default function HomeScreen(props) {
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={[ styles.userPfp ]}>
            <Image source={userPfp} style={[ styles.userPfpImg ]} />
          </View>
          <Text style={{fontSize: 16, textAlign: "center"}}> Your Spendings </Text>
          <Text style={{fontSize: 42, textAlign: "center", margin: 40}}> Rs. {props.count} </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    userPfp: {
        width: 300,
        height: 300,
        borderRadius: 300 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: COLORS.secondary,
        margin: 30
      },
      userPfpImg: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
      },
})