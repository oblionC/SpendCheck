import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navbar from './src/Navbar';
import { COLORS } from './src/constants/colors';


export default function App() {
  return (
    <View style={[styles.container]}>
      <SafeAreaView style={[styles.screenwide, styles.main]}>
        
        <Text>Main screen</Text>
      </SafeAreaView>
      <Navbar />
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
    flex: "auto",
    justifyContent: "center",
    alignItems: "center"
  },
});