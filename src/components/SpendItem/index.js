import { View, Text, StyleSheet } from "react-native"

export default function SpendItem({ amount, category }) { 
    return (
        <View>
            <Text>{amount} {category}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    spendItem: {
        width: "100%",
        height: 30,

    }    
})