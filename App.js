import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from './src/constants/colors';
import { createContext, useState } from 'react';
import HomeScreen from './src/components/HomeScreen';
import NewScreen from './src/components/NewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-reanimated'

const Stack = createNativeStackNavigator()

export default function App() {
  const [amount, setAmount] = useState(0);
  const changeTab = (screen) => {
    setScreen(screen);
  }
  const changeAmount = (value) => {
    setAmount(value);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home">
          { (props) => <HomeScreen {...props} count={amount} /> }
        </Stack.Screen>
        <Stack.Screen name="New">
          { (props) => <NewScreen {...props} amount={amount} changeAmount={changeAmount} /> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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