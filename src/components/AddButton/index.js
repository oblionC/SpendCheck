import { StyleSheet, Pressable, Text } from "react-native"
import { appBorderStyle } from "../../styles/appBorderStyle"
import { COLORS } from "../../constants/colors"

export default function AddButton({ pressFunction }) {
    return(
        <Pressable style={[ appBorderStyle.borderStyle, styles.addButton ]} onPress={() => {pressFunction()}}>
            <Text>Add</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: COLORS.tertiary,
        borderWidth: 3,
        borderColor: COLORS.secondary, 
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
      },  
}) 