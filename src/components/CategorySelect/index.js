import { StyleSheet, View, Text, Pressable } from "react-native"
import CategoryButton from "../CategoryButton"
import { useEffect } from "react"




export default function CategorySelect({ currentCategory, setCurrentCategory, navigation, categories, setCategories }) {
    const categoryList = [];
    let key = 0;
    Object.entries(categories).forEach(category => {
        categoryList.push(<CategoryButton key={key} category={category[0]} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} isNewButton={false} />)
        key++;
    })

    return (
        <View style={ styles.categorySection }>
            <View style={ styles.categoryButtons }>
                {categoryList}
                <CategoryButton isNewButton={true} navigation={navigation} category="" categories={categories} setCategories={setCategories} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categorySection: {
        display: "flex",
        flexDirection: "column",
        width: 300,
        marginBottom: 10,
        userSelect: "none",
    },
    categoryButtons: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    categoryNew: {
        justifyContent: "center",
        alignItems: "center",
    },
})