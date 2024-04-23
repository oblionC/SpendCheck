import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navbar from './src/Navbar';
import { COLORS } from './src/constants/colors';
import { useState } from 'react';
import HomeScreen from './src/HomeScreen';
import NewScreen from './src/NewScreen';


export default function App() {
  const [amount, setAmount] = useState(0);
  const [screen, setScreen] = useState(0);
  const changeTab = (screen) => {
    setScreen(screen);
  }
  const changeAmount = (value) => {
    setAmount(value);
  }

  return (
    <View style={[ styles.container ]}>

      <SafeAreaView style={styles.head}>
        <Text style={{fontSize: 32, margin: 15, color: COLORS.text}}>BalanceCheck</Text>
      </SafeAreaView>

      <SafeAreaView style={[ styles.main ]}>
        {screen === 0 && <HomeScreen count={amount} />}
        {screen === 1 && <NewScreen amount={amount} changeAmount={changeAmount} changeTab={changeTab} />}
      </SafeAreaView>

      <Navbar changeTab={changeTab} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: "100%",
    width: "100%",
    flexDirection: "column",

  },
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