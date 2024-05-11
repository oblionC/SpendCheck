import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createContext, useState } from 'react';
import HomeScreen from './src/HomeScreen';
import NewScreen from './src/NewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-reanimated'
import { COLORS } from './src/constants/colors';

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
      {/* <View style={[ styles.container ]}>

      <SafeAreaView style={styles.head}>
        <Text style={{fontSize: 32, margin: 15, color: COLORS.text}}>BalanceCheck</Text>
      </SafeAreaView>

      <SafeAreaView style={[ styles.main ]}>
        {screen === 0 && <HomeScreen count={amount} />}
        {screen === 1 && <NewScreen amount={amount} changeAmount={changeAmount} changeTab={changeTab} />}
      </SafeAreaView>

      <Navbar changeTab={changeTab} />

      </View> */}
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
    // borderBottomColor: COLORS.secondary,
  }
});