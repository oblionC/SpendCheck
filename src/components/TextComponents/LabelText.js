import { Text } from "react-native"
import { COLORS } from "../constants/colors"

export default function LabelText( {children} ) {
    return(
        <Text style={{fontFamily: "Roboto-Regular", fontSize: 16, textAlign: "center", color: COLORS.tertiary}}>{children}</Text>
    )
}