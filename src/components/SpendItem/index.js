import { View, Text, StyleSheet, Pressable } from "react-native"
import { useRef } from "react"
import { appBorderStyle } from "../../styles/appBorderStyle"
import { categories } from "../../constants/categories"
import { COLORS } from "../../constants/colors"

export default function SpendItem({ amount, category }) {
    const spendItemStyle = useRef([styles.spendItem])
    return (
        <Pressable style={spendItemStyle.current}
            onPress={() => console.log("pressed")} 
            onPressIn={() => {}}>
            <Text>Rs.{amount} {categories[category]}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    spendItem: {
        width: "100%",
        height: 50,
        padding: 10,
        borderBottomWidth: 3,
        borderColor: COLORS.secondary,
        display: "flex", 
        alignItems: "center",
    },
    pushedButton: {
        backgroundColor: COLORS.tertiary
    }    
})