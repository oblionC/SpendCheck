import { View, Text, Pressable } from "react-native"

export default function EmojiCategory({ name, emoji, setCurrentCategory }) {
    return (
        <Pressable style={{height: 50, flexGrow: 1, justifyContent: "center", alignItems: "center"}} onPress={() => {setCurrentCategory(name)}}>
            <Text>{ emoji }</Text>
        </Pressable>
    )
}