import { Pressable, StyleSheet, Text, View } from "react-native";
import { appBorderStyle } from "../../styles/appBorderStyle";
import { categories } from "../../constants/categories";
import { COLORS } from "../../constants/colors";


export default function CategoryButton({ category, setCurrentCategory, currentCategory }) {
    const buttonStyle = [appBorderStyle.borderStyle, styles.categoryButton]
    if(category === currentCategory) {
        buttonStyle.push(styles.pushedButton)
    }

    return (
        <Pressable style={buttonStyle} onPress={() => setCurrentCategory(category)}>
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
    },
    pushedButton: {
        backgroundColor: COLORS.tertiary
    }
})