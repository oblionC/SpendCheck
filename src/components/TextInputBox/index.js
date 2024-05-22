import { View, TextInput } from "react-native"
import { appBorderStyle } from "../../styles/appBorderStyle"
import { textboxStyle } from "../../styles/textboxStyle"

export default function TextInputBox({ value="", validateInput=()=>{return}, keyboardType="numeric" }) {
    return(
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <View style={[appBorderStyle.borderStyle, textboxStyle.textbox]}>
                <TextInput style={textboxStyle.inputBox} keyboardType={keyboardType} value={value} onChangeText={(text) => {
                    validateInput(text)}
                 } />
            </View>
        </View>
    )
}
