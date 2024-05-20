import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from './src/constants/colors';
import { useState } from 'react';
import HomeScreen from './src/components/HomeScreen';
import NewScreen from './src/components/NewScreen';
import NewCategoryScreen from './src/components/NewCategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { amountContext, spendListContext } from "./src/utils/contexts";
import 'react-native-reanimated'

const Stack = createNativeStackNavigator()

export default function App() {
  const [amount, setAmount] = useState(0);
  const [spendList, setSpendList] = useState([]);

  return (
    <spendListContext.Provider value={spendList}>
    <amountContext.Provider value={amount}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            { (props) => <HomeScreen {...props} /> }
          </Stack.Screen>
          <Stack.Screen name="New">
            { (props) => <NewScreen {...props} setAmount={setAmount} setSpendList={setSpendList} /> }
          </Stack.Screen>
          <Stack.Screen name="NewCategory">
            { (props) => <NewCategoryScreen {...props} /> }
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </amountContext.Provider>
    </spendListContext.Provider>
  );
}

const styles = StyleSheet.create({

  main: {
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    borderRadius: "50",
    overflow: "hidden",
  },
  
  head: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: COLORS.secondary,
  }
});