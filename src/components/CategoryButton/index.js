import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { appBorderStyle } from "../../styles/appBorderStyle";
import { categories } from "../../constants/categories";
import { COLORS } from "../../constants/colors";


export default function CategoryButton({ category, setCurrentCategory, currentCategory }) {
    const buttonStyle = [styles.categoryButton, appBorderStyle.borderStyle]
    if(category === currentCategory) {
        buttonStyle.push(styles.pushedButton)
    }

    return (
        <Pressable style={buttonStyle} onPress={() => setCurrentCategory(category)}>
            <Text>{categories[category]}</Text>
            <Text>{category}</Text> 
        </Pressable>
    )
}

const styles = StyleSheet.create({
    categoryButton: {
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
    },
    pushedButton: {
        backgroundColor: COLORS.tertiary
    }
})