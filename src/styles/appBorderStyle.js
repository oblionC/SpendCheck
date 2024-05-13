import { StyleSheet } from "react-native"
import { COLORS } from "../constants/colors"

export const appBorderStyle = StyleSheet.create({
    borderStyle: {
        borderWidth: 3,
        borderColor: COLORS.secondary,
        borderRadius: 20,
    }
})