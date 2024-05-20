import { View, Text, ScrollView } from "react-native"
import { mainContainerStyle } from "../../styles/mainContainerStyle"

export default function NewCategoryScreen() {
    return(
        <ScrollView contentContainerStyle={mainContainerStyle.mainContainer}>
            <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Text>New category add</Text>
            </View>
        </ScrollView>
    )
}