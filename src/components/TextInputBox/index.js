import { View, TextInput } from "react-native"
import { appBorderStyle } from "../../styles/appBorderStyle"
import { textboxStyle } from "../../styles/textboxStyle"

export default function TextInputBox({ value="", validateInput=()=>{return}, keyboardType="numeric", onPress=()=>{} }) {
    return(
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <View style={[appBorderStyle.borderStyle, textboxStyle.textboxWidth, textboxStyle.textboxHeight]}>
                <TextInput style={textboxStyle.inputBox} keyboardType={keyboardType} value={value} onPress={onPress} onChangeText={(text) => {
                    validateInput(text)}
                 } />
            </View>
        </View>
    )
}
