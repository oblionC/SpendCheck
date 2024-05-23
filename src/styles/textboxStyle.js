import { StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export const textboxStyle = StyleSheet.create({
    inputBox: {
        width: "100%",
        height: "100%",
        color: COLORS.text,
        padding: 10
    },
    textboxHeight: {
      height: 70,
    },
    textboxWidth: {
      width: 300,
    }
})