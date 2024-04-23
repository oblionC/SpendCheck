import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import { COLORS } from '../constants/colors';
import { useState } from 'react';
import isNumber from '../utils/isNumber';

let userPfp = require('../../public/img/carb_2.png');

export default function NewScreen(props) {
  const [error, setError] = useState(false);
  const [inp, setInp] = useState("");

  const checkInput = () => {
    let inputValue;
    try{
      inputValue = parseInt(inp);
    }
    catch {
      console.log("caught")
      setError(true)
    }
    props.changeAmount(props.amount + inputValue)
    props.changeTab(0)
  }
    
  return (
      <ScrollView contentContainerStyle={styles.container}>

        {/* Error lable in case user does not input number. Only appears when error triggered */}
        {error && <View style={styles.errorLabel}>
          <Text style={{color: "red"}}>Your input is not an integer</Text> 
        </View>}

        <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
          <View>
            <Text style={{color: COLORS.tertiary}}>New spend:</Text>
          </View>
          <View style = {styles.textbox}>
            <TextInput style = {styles.inputBox} keyboardType="numeric" value={inp} onChangeText={(text) => {
                if(isNumber(text)) {
                  setInp(text);
                }
              }} />
          </View>
          <Pressable style={ styles.addButton } onPress={() => {checkInput()}}>
            <Text>Add</Text>
          </Pressable>
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
    color: COLORS.text,
    padding: 10
  },
  textbox: {
    width: 300,
    height: 70,
    marginVertical: 20
  },
  addButton: {
    backgroundColor: COLORS.tertiary,
    borderWidth: 3,
    borderColor: COLORS.secondary, 
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
})