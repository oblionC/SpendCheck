import { View, Text, ScrollView, TextInput, SafeAreaView, KeyboardAvoidingView, StyleSheet, Animated, useWindowDimensions, TouchableWithoutFeedback} from "react-native"
import { useState, useRef, useMemo, useEffect } from "react"
import { mainContainerStyle } from "../../styles/mainContainerStyle"
import { appBorderStyle } from "../../styles/appBorderStyle"
import { textboxStyle } from "../../styles/textboxStyle"
import TextInputBox from "../TextInputBox"
import MainLabel from "../TextComponents/MainLabel"
import EmojiPicker from "../EmojiPicker"
import { useHeaderHeight } from "@react-navigation/elements"
import AddButton from "../AddButton"
import React from "react"
import { textStyle } from "../../styles/textStyle"


export default function NewCategoryScreen({ route, navigation }) {
    const categories = route.params.categories
    const [categoryName, setCategoryName] = useState("")
    const [currentEmoji, setCurrentEmoji] = useState("")
    const [shiftY, setShiftY] = useState(new Animated.Value(0))
    const animatedValue2 = useMemo(() => {
        return new Animated.Value(2)
    })
    const {width, height} = useWindowDimensions()
    const headerHeight = useHeaderHeight()
    const mainScreenHeight = height - headerHeight
    const shiftUp = () => {
        Animated.timing(shiftY, {
            toValue: -400,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }
    const shiftDown = () => {
        Animated.timing (shiftY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    return(
        <View style={{height: "100%", width: "100%"}}>
            <Animated.View style={[mainContainerStyle.mainContainer, {transform: [{translateY: Animated.divide(shiftY, animatedValue2)}]}]}> 
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-headerHeight} >
                    <View style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
                    <MainLabel>New category:</MainLabel>
                    <TextInputBox 
                        value={categoryName} 
                        validateInput={(text) => {
                            setCategoryName(text)
                        }}
                        keyboardType="default" />   
                    <TouchableWithoutFeedback onPress={() => {
                        shiftUp()
                    }}>
                        <View style={[appBorderStyle.borderStyle, textboxStyle.textboxHeight, {width: 100, height: 50, justifyContent: "center", alignItems: "center"}]}><Text style={textStyle.emoji}>{ currentEmoji }</Text></View>
                    </TouchableWithoutFeedback>
                    <AddButton pressFunction={() => {
                        let temp = categories
                        temp[categoryName] = currentEmoji
                        navigation.navigate("New", {newCategories: temp})
                    }}/>
                    </View>
                </KeyboardAvoidingView>
            </Animated.View>
            <EmojiPicker shiftY={shiftY} shiftDown={shiftDown} setCurrentEmoji={setCurrentEmoji} />
        </View>
    )
}
