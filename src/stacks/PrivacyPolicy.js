import React from "react"

import { View, ScrollView, Text, StyleSheet, StatusBar } from "react-native"

import haptic from "../scripts/haptic"
import screen from "../scripts/screen"

const PrivacyPolicyStack = ({ navigation }) => {
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
                <Text style={styles.titleText}>Privacy Policy</Text>
                <Text style={styles.lastModifiedText}>Last Modified: 5/23/20</Text>
                <Text style={styles.contentText}>The Quick Dodge app and support website does not hold, sell, or share sensitive user data of any kind.</Text>
                <Text style={styles.contentText}>The only stored data is users' in-game high score.</Text>
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
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Quicksand",
        fontWeight: "900",
        fontSize: 32,
        textAlign: "center"
    },
    lastModifiedText: {
        marginBottom: 20,
        fontFamily: "Quicksand",
        fontWeight: "500",
        fontStyle: "italic",
        fontSize: 14,
        textAlign: "center"
    },
    contentText: {
        marginBottom: 10,
        fontFamily: "Quicksand",
        fontWeight: "500",
        fontSize: 18
    }
})

export default PrivacyPolicyStack