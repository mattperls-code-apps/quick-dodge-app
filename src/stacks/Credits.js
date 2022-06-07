import React from "react"

import { View, ScrollView, Text, StyleSheet, StatusBar } from "react-native"

import haptic from "../scripts/haptic"
import screen from "../scripts/screen"

const CreditsStack = ({ navigation }) => {
    return (
        <React.Fragment>
            <StatusBar barStyle={"dark-content"} />
            <View style={styles.topBar}>
                <View style={styles.backButton} onTouchEnd={() => {
                    haptic("impactLight")
                    navigation.pop()
                }}>
                    <Text style={styles.backText}>Back</Text>
                </View>
            </View>
            <ScrollView style={styles.contentContainer} contentContainerStyle={{ paddingBottom: screen.bottom }} showsVerticalScrollIndicator={false}>
                <Text style={styles.titleText}>Credits</Text>
                <Text style={styles.contentText}><Text style={styles.bold}>Programming and Development</Text>: {"\n"}Matthew Perlman{"\n"}(Instagram: @mattperls.code)</Text>
                <Text style={styles.contentText}><Text style={styles.bold}>Music</Text>: {"\n"}Owen Skidmore{"\n"}(Instagram: @simplyskidz__)</Text>
            </ScrollView>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    topBar: {
        width: "100%",
        height: 90 + screen.top,
        paddingTop: screen.top,
        borderBottomColor: "rgb(180, 180, 180)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: "rgb(230, 230, 230)"
    },
    backButton: {
        marginTop: 10,
        marginLeft: 10,
        width: 140,
        height: 70,
        borderRadius: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgb(100, 100, 100)",
        backgroundColor: "rgb(205, 205, 205)",
        alignItems: "center",
        justifyContent: "center"
    },
    backText: {
        fontFamily: "Quicksand",
        fontWeight: "500",
        fontSize: 24,
        textAlign: "center"
    },
    contentContainer: {
        width: screen.width - 20,
        height: screen.height - 140,
        alignSelf: "center"
    },
    titleText: {
        marginVertical: 20,
        fontFamily: "Quicksand",
        fontWeight: "900",
        fontSize: 32,
        textAlign: "center"
    },
    contentText: {
        marginBottom: 10,
        fontFamily: "Quicksand",
        fontWeight: "500",
        fontSize: 18
    },
    bold: {
        fontWeight: "700"
    }
})

export default CreditsStack