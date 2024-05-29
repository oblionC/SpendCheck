import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, PermissionsAndroid, KeyboardAvoidingView, Platform} from 'react-native';
import { COLORS } from '../../constants/colors';
import { useState, createContext, useContext, useEffect } from 'react';
import { appBorderStyle } from '../../styles/appBorderStyle';
import isNumber from '../../utils/isNumber';
import { amountContext, spendListContext } from '../../utils/contexts';
import { mainContainerStyle } from '../../styles/mainContainerStyle';
import CategorySelect from '../CategorySelect';
import AddButton from '../AddButton';
import MainLabel from '../TextComponents/MainLabel';
import TextInputBox from '../TextInputBox';
import { categories } from '../../constants/categories';

let userPfp = require('../../../public/img/carb_2.png');

export default function NewScreen({route, navigation, setAmount, setSpendList}) {
  const amount = useContext(amountContext);
  const spendList = useContext(spendListContext)
  const [error, setError] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("food");
  const [userCategories, setUserCategories] = useState(categories)
  const [inp, setInp] = useState("");
  useEffect(() => {
    if(route.params !== undefined) {
      setUserCategories(route.params.newCategories)
    }
  }, [])

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
    <KeyboardAvoidingView behavior="height">
      <ScrollView contentContainerStyle={[mainContainerStyle.mainContainer]}>
        <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
          <MainLabel>New spend:</MainLabel>
          <View style={styles.textboxContainer}>
            {/* Error label in case user does not input number. Only appears when error triggered */}
            <View style={styles.errorLabel}>
              <Text style={{color: "red"}}>
                { error ? "Amount cannot be empty" : "" }
              </Text> 
            </View>

            <TextInputBox value={inp} 
            onChangeText={(text) => {
              if(isNumber(text) || text === "") {
                setInp(text);
              }
            }}
            keyboardType='numeric' 
            />
          </View>
          <CategorySelect currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} navigation={navigation} categories={userCategories} setCategories={setUserCategories}/>
          <AddButton pressFunction={checkInput} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  inputBox: {
    width: "100%",
    height: "100%",
    color: COLORS.text,
  },
  textbox: {
    width: '100%',
    height: 70,
  },
  textboxContainer: {
    width: 300,
    marginBottom: 20
  }
})