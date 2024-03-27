import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/colors';

export default function Navbar() {
    return (
        <SafeAreaView style={[ styles.navbar]}>
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
        backgroundColor: COLORS.primary,
        flex: 0.08,
        borderTopWidth: 3,
        borderTopColor: COLORS.secondary,
    },
    tab: {
        backgroundColor: COLORS.primary,
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})