import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import Navbar from './src/Navbar';
import { COLORS } from './src/constants/colors';
import { useState } from 'react';

let userPfp = require('./public/img/carb_2.png');

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(count + 1);
  }

  return (
    <View style={[ styles.container ]}>
      <SafeAreaView style={styles.head}>
        <Text style={{fontSize: 32, margin: 15}}>BalanceCheck</Text>
      </SafeAreaView>
      <SafeAreaView style={[ styles.main ]}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={[ styles.userPfp ]}>
            <Image source={userPfp} style={[ styles.userPfpImg ]} />
          </View>
          <Text style={{fontSize: 16, textAlign: "center"}}> Your Spendings </Text>
          <Text style={{fontSize: 42, textAlign: "center", margin: 40}}> Rs. {count} </Text>
        </ScrollView>
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
  userPfp: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: COLORS.secondary,
    margin: 30
  },
  userPfpImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  head: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: COLORS.secondary
  }
});