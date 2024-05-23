import { useRef, useState } from "react";
import { Text, View, StyleSheet, Animated, Button } from "react-native";


export default function EmojiPicker({ shiftY, shiftDown }) {
    const [inactiveY, setInactiveY] = useState(new Animated.Value(400))

    return (
        <Animated.View style={[styles.emojiPickerBoard, {bottom: 0, transform: [{translateY: Animated.add(inactiveY, shiftY)}]}]}>
            <Button title="close" onPress={() => {shiftDown()}} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    emojiPickerBoard: {
        position: "absolute",
        width: "100%",
        height: 400,
        backgroundColor: "yellow",
    }
})