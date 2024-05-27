import { View, Text, Pressable } from "react-native"
import { appBorderStyle } from "../../styles/appBorderStyle"
import { textStyle } from "../../styles/textStyle"

export default function EmojiItem({ emoji, setCurrentEmoji }) {
    return (
        <Pressable style={[{width:50, height: 50, alignItems: "center", justifyContent: "center"}]} onPress={() => {setCurrentEmoji(emoji)}}>
            <Text style={[textStyle.emoji]}>{emoji}</Text>
        </Pressable>
    )
}