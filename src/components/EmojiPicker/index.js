import { useRef, useState } from "react";
import { Text, View, StyleSheet, Animated, Button, TextInput, FlatList, ScrollView} from "react-native";
import { appBorderStyle } from "../../styles/appBorderStyle";
import { EmojiHandler } from "../../utils/EmojiHandler";


export default function EmojiPicker({ shiftY, shiftDown, setCurrentEmoji }) {
    const emojiHandler = useRef(new EmojiHandler(setCurrentEmoji)).current
    const [inactiveY, setInactiveY] = useState(new Animated.Value(400))
    const [currentCategory, setCurrentCategory] = useState("Symbols")

    return (
        <Animated.View style={[styles.emojiPickerBoard, {bottom: 0, borderTopWidth: 3, transform: [{translateY: Animated.add(inactiveY, shiftY)}]}]}>
            <TextInput style={[{
                height: 40,
                backgroundColor: "white",
                marginTop: 10,
                marginBottom: 10,
            }, appBorderStyle.borderStyle]}/> 
            <View style={{width: "100%", height: 50, flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", alignItems: "center"}}>
                {
                    emojiHandler.generateCategories(setCurrentCategory)
                }
            </View>
            <ScrollView horizontal contentContainerStyle={{flexWrap: "wrap", flexDirection: "column", height: 250}}>
                {
                   emojiHandler.categorizedEmojiWithElements.get(currentCategory)
                }
            </ScrollView>
            <Button title="close" onPress={() => {shiftDown()}} />
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