import { Text } from "react-native";
import { COLORS } from "../constants/colors";
import * as Font from 'expo-font'



export default function TextFont( {children} ) {

    return(
        <Text style={{fontFamily: "Roboto-Regular", fontSize: 16, textAlign: "center", color: COLORS.tertiary}}>{children}</Text>
    )
}