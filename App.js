import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Navbar from './src/Navbar';
import { COLORS } from './src/constants/colors';
import { useState } from 'react';
import HomeScreen from './src/HomeScreen';
import NewScreen from './src/NewScreen';


export default function App() {
  const [count, setCount] = useState(0);
  const [screen, setScreen] = useState(0);
  const onPress = (screen) => {
    setScreen(screen);
  }

  return (
    <View style={[ styles.container ]}>

      <SafeAreaView style={styles.head}>
        <Text style={{fontSize: 32, margin: 15}}>BalanceCheck</Text>
      </SafeAreaView>

      <SafeAreaView style={[ styles.main ]}>
        {screen === 0 && <HomeScreen count={count} />}
        {screen === 1 && <NewScreen count={count} />}
      </SafeAreaView>

      <Navbar onPress={onPress} />

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
    borderBottomColor: COLORS.secondary
  }
});