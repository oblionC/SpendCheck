import { View, Text, StyleSheet, ScrollView } from "react-native";
import { appBorderStyle } from "../../styles/appBorderStyle";
import SpendItem from "../SpendItem";
import { useContext, useRef, useState } from "react";
import { spendListContext } from "../../utils/contexts";


export default function SpendList() {
    const spendList = useContext(spendListContext);
    const index = useRef(0)
    return (
        <ScrollView style={[appBorderStyle.borderStyle, styles.spendList]}>
            {
                spendList.map(spend => {
                    index.current += 1;
                    return <SpendItem key={index.current-1} amount={spend.amount} category={spend.category} />
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    spendList: {
        marginTop: 50,
        marginBottom: 50,
        padding: 10, 
        width: 300,
        height: 50,
    }
})