import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, PermissionsAndroid } from 'react-native';
import { COLORS } from '../../constants/colors';
import { useState, createContext, useContext } from 'react';
import { appBorderStyle } from '../../styles/appBorderStyle';
import isNumber from '../../utils/isNumber';
import { amountContext, spendListContext } from '../../utils/contexts';
import { mainContainerStyle } from '../../styles/mainContainerStyle';
import CategorySelect from '../CategorySelect';
import AddButton from '../AddButton';
import MainLabel from '../TextComponents/MainLabel';
import TextInputBox from '../TextInputBox';

let userPfp = require('../../../public/img/carb_2.png');

export default function NewScreen({navigation, setAmount, setSpendList}) {
  const amount = useContext(amountContext);
  const spendList = useContext(spendListContext)
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
    setAmount(amount + inputValue);
    setSpendList(spendList.concat([{
      amount: inputValue,
      category: currentCategory,
    }]))
    navigation.navigate("Home");
  }
    
  return (
      <ScrollView contentContainerStyle={[mainContainerStyle.mainContainer]}>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <MainLabel>New spend:</MainLabel>
          <View style={styles.textboxContainer}>
            {/* Error label in case user does not input number. Only appears when error triggered */}
            <View style={styles.errorLabel}>
              <Text style={{color: "red"}}>
                { error ? "Amount cannot be empty" : "" }
              </Text> 
            </View>

            <TextInputBox value={inp} 
            validateInput={(text) => {
              if(isNumber(text) || text === "") {
                setInp(text);
              }
            }}
            keyboardType='numeric' 
            />
          </View>
          <CategorySelect currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} navigation={navigation} />
          <AddButton pressFunction={checkInput} />
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
  }
})