import { View, Text } from "react-native"
import { COLORS } from "../../../constants/colors"

export default function MainLabel({ children }) {
    return (
        <View>
            <Text style={{color: COLORS.tertiary}}>{ children }</Text>
        </View>
    )
}