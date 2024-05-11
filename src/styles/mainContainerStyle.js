import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const mainContainerStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.primary,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
})