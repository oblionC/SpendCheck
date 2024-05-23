import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { appBorderStyle } from "../../styles/appBorderStyle";
import SpendItem from "../SpendItem";
import { useContext, useRef, useState } from "react";
import { spendListContext } from "../../utils/contexts";


export default function SpendList() {
    const spendList = useContext(spendListContext);
    const index = useRef(0)
    return (

        <ScrollView 
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false} style={[appBorderStyle.borderStyle, styles.spendList]}>
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
        backgroundColor: "white",
        overflow: "hidden",
        flex: 1,    
        flexGrow: 1,
        marginTop: 50,
        marginBottom: 50,
        width: 300,
        height: 200,
    }
})