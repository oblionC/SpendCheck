import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native';
import { COLORS } from '../constants/colors';
import { useState } from 'react';

export default function Navbar(props) {
    
    return (
        <SafeAreaView style={[ styles.navbar]}>
            <Pressable style={[styles.tab]} onPress={() => props.onPress(0)}>
                <View style={[styles.tab]}>
                    <Text>Home</Text>
                </View>
            </Pressable>
            <Pressable style={[styles.tab]} onPress={() => props.onPress(1)}>
                <View >
                    <Text>New</Text>
                </View>
            </Pressable>
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