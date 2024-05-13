import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import { COLORS } from '../../constants/colors';
import { useState, createContext } from 'react';
import { appBorderStyle } from '../../styles/appBorderStyle';
import isNumber from '../../utils/isNumber';
import { mainContainerStyle } from '../../styles/mainContainerStyle';
import CategoryButton from '../CategoryButton';
import CategorySelect from '../CategorySelect';

let userPfp = require('../../../public/img/carb_2.png');

export default function NewScreen({navigation, amount, changeAmount}) {
  const [error, setError] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("food");
  const [inp, setInp] = useState("");

  const checkInput = () => {
    let inputValue;
    inputValue = parseInt(inp);
    if(isNaN(inputValue)) {
      setError(true);
      return;
    }
    changeAmount(amount + inputValue);
    navigation.navigate("Home");
  }
    
  return (
      <ScrollView contentContainerStyle={mainContainerStyle.mainContainer}>
        <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
          <View>
            <Text style={{color: COLORS.tertiary}}>New spend:</Text>
          </View>
          <View style={styles.textboxContainer}>
            {/* Error label in case user does not input number. Only appears when error triggered */}
            <View style={styles.errorLabel}>
              <Text style={{color: "red"}}>
                { error ? "Amount cannot be empty" : "" }
              </Text> 
            </View>

            <View style = {[ appBorderStyle.borderStyle, styles.textbox ]}>
              <TextInput style = {styles.inputBox} keyboardType="numeric" value={inp} onChangeText={(text) => {
                  if(isNumber(text) || text === "") {
                    setInp(text);
                  }
                }} />
            </View>
          </View>
          <CategorySelect currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
          <Pressable style={[ appBorderStyle.borderStyle, styles.addButton ]} onPress={() => {checkInput()}}>
            <Text>Add</Text>
          </Pressable>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    width: "100%",
    height: "100%",
    color: COLORS.text,
    padding: 10
  },
  textbox: {
    width: '100%',
    height: 70,
  },
  textboxContainer: {
    width: 300,
    marginTop: 20,
    marginBottom: 20
  },
  addButton: {
    backgroundColor: COLORS.tertiary,
    borderWidth: 3,
    borderColor: COLORS.secondary, 
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },

})