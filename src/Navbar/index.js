import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Navbar() {
    return (
        <SafeAreaView style={[styles.screenwide, styles.navbar]}>
            <View style={[styles.tab]}>
                <Text>Tab1</Text>
            </View>
            <View style={[styles.tab]}>
                <Text>Tab2</Text>
            </View>
            <View style={[styles.tab]}>
                <Text>Tab2</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        backgroundColor: COLORS.secondary,
        flex: 0.11
    },
    tab: {
        backgroundColor: COLORS.secondary,
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})