import { StyleSheet, View } from "react-native"
import CategoryButton from "../CategoryButton"
import { categories } from "../../constants/categories"
import { useEffect } from "react"



export default function CategorySelect({ currentCategory, setCurrentCategory }) {
    const categoryList = [];
    let key = 0;
    Object.entries(categories).forEach(category => {
        categoryList.push(<CategoryButton key={key} category={category[0]}/>)
        key++;
    })
    console.log(categoryList);

    return (
        <View style={[ styles.categories ]}>
            {categoryList}
        </View>
    )
}

const styles = StyleSheet.create({
    categories: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 70,
        width: 300,
        marginBottom: 20,
      }
})