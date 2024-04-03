import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { COLORS } from '../constants/colors';
import { useState } from 'react';

let userPfp = require('../../public/img/carb_2.png');

export default function NewScreen(props) {
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
            <View>
              <Text>New spend:</Text>
            </View>
            <View style = {styles.textbox}>
              <TextInput style = {styles.inputBox} />
            </View>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  inputBox: {
    borderWidth: 3,
    borderColor: COLORS.secondary,
    width: "100%",
    height: "100%",
  },
  textbox: {
    width: 300,
    height: 70,
    borderWidth: 5,
    borderColor: "black",
  }
})