import { View, Text, ScrollView } from "react-native"

export default function EmojisContainer({ emojiHandler, currentCategory }) {
    return (
        <ScrollView horizontal contentContainerStyle={{flexWrap: "wrap", flexDirection: "column", height: 300}}>
            {
                emojiHandler.categorizedEmoji.get(currentCategory)
            }
        </ScrollView>
    )
}