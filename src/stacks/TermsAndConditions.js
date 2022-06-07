import React from "react"

import { View, ScrollView, Text, StyleSheet, StatusBar } from "react-native"

import haptic from "../scripts/haptic"
import screen from "../scripts/screen"

const TermsAndConditionsStack = ({ navigation }) => {
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
                <Text style={styles.titleText}>Terms And Conditions</Text>
                <Text style={styles.lastModifiedText}>Last Modified: 5/23/20</Text>
                <Text style={styles.contentText}>Please read the terms and conditions carefully before using the Quick Dodge app or the support website https://52pd6.csb.app/</Text>
                <Text style={styles.contentText}>The creators of Quick Dodge ("we" or "us") are not liable for any objectionable or malicious content in the app or support website.</Text>
                <Text style={styles.contentText}>By communicating with us, you accept we may communicate with you via email. In doing so, we maintain the right to refuse any further communication at any point, without restriction.</Text>
                <Text style={styles.contentText}>We are not liable for any injury caused from use of the app or support website. For users with epilepsy, contact your doctor before use of the app to confirm its safety for your use.</Text>
                <Text style={styles.contentText}>In the case of malfunction within the app or support website, we are not liable for any incorrect actions or their effects.</Text>
                <Text style={styles.contentText}>We are not liable for any typographical errors in the app or support website.</Text>
                <Text style={styles.contentText}>We reserve the right to change the content of the app’s terms and conditions and the content of the app without notifying users.</Text>
                <Text style={styles.contentText}>We reserve the right to change the content of the support website’s terms and conditions and the content of the support website without notifying users.</Text>
                <Text style={styles.contentText}>We are not liable for damages inadvertently caused by the use of the app or support website.</Text>
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

export default TermsAndConditionsStack