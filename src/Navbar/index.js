import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import { useState } from 'react';

export default function Navbar(props) {
    
    return (
        <SafeAreaView style={[ styles.navbar]}>
            <TouchableOpacity style={[styles.tab]} onPress={props.onPress}>
                <View style={[styles.tab]}>
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab]} onPress={props.onPress}>
                <View >
                    <Text>New</Text>
                </View>
            </TouchableOpacity>
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