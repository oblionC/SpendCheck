import { Pressable, StyleSheet, Text, View } from "react-native";
import { appBorderStyle } from "../../styles/appBorderStyle";
import { categories } from "../../constants/categories";


export default function CategoryButton({ category }) {

    return (
        <Pressable style={[ appBorderStyle.borderStyle, styles.categoryButton ]} onPress={() => console.log("pressed")}>
            <Text>{categories[category]}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    categoryButton: {
        height: "100%",
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
    }
})