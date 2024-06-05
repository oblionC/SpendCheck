import { useCallback, useMemo, useRef, useState } from "react";
import { Text, View, StyleSheet, Animated, Button, TextInput, FlatList, ScrollView, KeyboardAvoidingView} from "react-native";
import { appBorderStyle } from "../../styles/appBorderStyle";
import { EmojiHandler } from "../../utils/EmojiHandler";
import EmojisContainer from "../EmojisContainer";


export default function EmojiPicker({ shiftY, shiftDown, setCurrentEmoji }) {
    const [searchText, setSearchText] = useState("")
    const [inactiveY, setInactiveY] = useState(new Animated.Value(400))
    const [currentCategory, setCurrentCategory] = useState("Symbols")
    const emojiHandler = useMemo(() => new EmojiHandler(setCurrentEmoji, setCurrentCategory), [setCurrentEmoji, setCurrentCategory])

    return (
        <Animated.View style={[styles.emojiPickerBoard, {bottom: 0, borderTopWidth: 3, transform: [{translateY: Animated.add(inactiveY, shiftY)}]}]}>
            <TextInput value={searchText} style={[{
                height: 40,
                backgroundColor: "white",
                marginTop: 10,
                marginBottom: 10,
            }, appBorderStyle.borderStyle]}/> 
            <View style={{width: "100%", height: 50, flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", alignItems: "center"}}>
                {
                    emojiHandler.generateCategories()
                }
            </View>
            <EmojisContainer emojiHandler={emojiHandler} currentCategory={currentCategory} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    emojiPickerBoard: {
        position: "absolute",
        width: "100%",
        height: 400,
    }
})