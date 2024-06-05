import { View, Text, Pressable } from "react-native"

const EMOJI_PICKER_CATEGORIES = {
    "Symbols": "🔠",
    "Activities": "🏀",
    "Flags": "🇮🇳",
    "Travel & Places": "🌎",
    "Food & Drink": "🍔",
    "Animals & Nature": "🐻",
    "People & Body": "👨",
    "Objects": "💡",
    "Smileys & Emotion": "😊",
}

export default function EmojiCategory({ name, setCurrentCategory }) {
    return (
        <Pressable style={{width: 1, height: 50, flexGrow: 1, justifyContent: "center", alignItems: "center"}} onPress={() => {setCurrentCategory(name)}}>
            <Text>{EMOJI_PICKER_CATEGORIES[name]}</Text>
        </Pressable>
    )
}