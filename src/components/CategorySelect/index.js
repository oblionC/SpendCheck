import { StyleSheet, View, Text, Pressable } from "react-native"
import CategoryButton from "../CategoryButton"
import { categories } from "../../constants/categories"
import { useEffect } from "react"




export default function CategorySelect({ currentCategory, setCurrentCategory }) {
    const categoryList = [];
    let key = 0;
    Object.entries(categories).forEach(category => {
        categoryList.push(<CategoryButton key={key} category={category[0]} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />)
        key++;
    })

    return (
        <View style={ styles.categorySection }>
            <View style={ styles.categoryButtons }>
                {categoryList}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categorySection: {
        display: "flex",
        flexDirection: "column",
        width: 300,
        overflow: "auto",
        marginBottom: 10,
    },
    categoryButtons: {
        overflow: "auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    categoryNew: {
        justifyContent: "center",
        alignItems: "center",
    },
})