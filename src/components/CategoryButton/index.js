import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { appBorderStyle } from "../../styles/appBorderStyle";
import { categories } from "../../constants/categories";
import { COLORS } from "../../constants/colors";
import NewCategoryScreen from "../NewCategoryScreen"

const renderAddNewComponentPage = () => {
    
}

const handlePress = (isNewButton, category, setCurrentCategory, navigation, categories, setCategories) => {
    if(isNewButton) {
        navigation.navigate("NewCategory", 
        {
            categories: categories, 
            setCategories: setCategories, 
            navigation: navigation
        });
    }
    else {
        setCurrentCategory(category)
    }
}

function CategoryDetails({ category, setCurrentCategory }) {
    return (
        <View style={[styles.centerAlign]}>
            <Text>{categories[category]}</Text>
            <Text>{category}</Text> 
        </View>
    )
}

function CategoryNew() {
    return (
            <Text style={[{
                fontSize: 42
            }, styles.centerAlign]}> + </Text>
    )
}

export default function CategoryButton({ category, setCurrentCategory, currentCategory, isNewButton, navigation, categories, setCategories }) {
    const buttonStyle = [styles.categoryButton, appBorderStyle.borderStyle]
    if(category === currentCategory) {
        buttonStyle.push(styles.pushedButton)
    }

    return (
        <Pressable style={buttonStyle} onPress={() => handlePress(isNewButton=isNewButton, category=category, setCurrentCategory=setCurrentCategory, navigation=navigation, categories=categories, setCategories=setCategories)}>
            {isNewButton ? <CategoryNew /> : <CategoryDetails category={category} setCurrentCategory={setCurrentCategory}/>}
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
    },
    centerAlign: {
        justifyContent: "center",
        alignItems: "center"
    }
})