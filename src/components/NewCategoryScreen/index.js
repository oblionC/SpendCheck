import { View, Text, ScrollView, TextInput } from "react-native"
import { useState } from "react"
import { mainContainerStyle } from "../../styles/mainContainerStyle"
import { appBorderStyle } from "../../styles/appBorderStyle"
import { textboxStyle } from "../../styles/textboxStyle"
import TextInputBox from "../TextInputBox"
import MainLabel from "../TextComponents/MainLabel"

export default function NewCategoryScreen() {
    const [categoryName, setCategoryName] = useState("")
    const [categoryEmoji, setCategoryEmoji] = useState("")
    return(
        <ScrollView contentContainerStyle={mainContainerStyle.mainContainer}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <MainLabel>New category:</MainLabel>
                <TextInputBox 
                value={categoryName} 
                validateInput={(text) => {
                    setCategoryName(text)
                }}
                keyboardType="default" />
            </View>
        </ScrollView>
    )
}