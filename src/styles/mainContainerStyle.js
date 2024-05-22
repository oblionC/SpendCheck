import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const mainContainerStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS.primary,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }
})