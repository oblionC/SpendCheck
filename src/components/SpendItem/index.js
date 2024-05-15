import { View, Text, StyleSheet } from "react-native"
import { appBorderStyle } from "../../styles/appBorderStyle"
import { categories } from "../../constants/categories"
import { COLORS } from "../../constants/colors"

export default function SpendItem({ amount, category }) { 
    return (
        <View style={styles.spendItem}>
            <Text>Rs.{amount} {categories[category]}</Text>
        </View>
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
        alignItems: "center"
    }    
})