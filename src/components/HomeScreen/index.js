import { StyleSheet, Text, View, ScrollView, Image, Pressable, Button } from 'react-native';
import { useContext, useState } from 'react';
import { mainContainerStyle } from '../../styles/mainContainerStyle';
import { COLORS } from '../../constants/colors';
import LabelText from '../../TextComponents/LabelText';

let userPfp = require('../../../public/img/carb_2.png');

const USERPFP_SIZE = 300;

export default function HomeScreen({ count, navigation }) {
  return (
      <ScrollView contentContainerStyle={mainContainerStyle.mainContainer}>
        <View style={[ styles.userPfp ]}>
          <Image source={userPfp} style={[ styles.userPfpImg ]} />
        </View>
        <LabelText> Your Spendings </LabelText>
        <Text style={{fontSize: 42, textAlign: "center", margin: 40, color: COLORS.text}}> Rs. {count} </Text>
        <Button title="New spend" onPress={() => navigation.navigate("New")} />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    userPfp: {
        width: USERPFP_SIZE,
        height: USERPFP_SIZE,
        borderRadius: USERPFP_SIZE / 2,
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
})