import React from "react"

import { View, ScrollView, Text, StyleSheet, StatusBar, Linking } from "react-native"

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
                <Text style={styles.header}>Privacy Policy</Text>
                <Text style={styles.normal}>
                    This Privacy Policy reflects the data we store, how we store it, and your rights to access that data through this app.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • We may review, update, and amend these policies from time to time to remain consistent with out business needs and technology.
                    Your continued use of the service makes up your acceptance of any changes to this Privacy Policy.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • This Privacy Policy <Text style={styles.bold}>(“Privacy Policy”)</Text> describes how we gather, use, and maintain your Personal Information on the app <Text style={styles.bold}>"Quick Dodge!"</Text>.
                    It will also explain your legal rights with respect to that information.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • By using the App or services, you confirm that you have read and understood this Privacy Policy and our Terms (together referred to herein as the “<Text style={styles.bold}>Agreement</Text>”).
                    The Agreement governs the use of the app.
                    We will collect, use, and maintain information consistent with the Agreement.
                </Text>
                <Text style={styles.subheader}>What data do we collect from the people who visit our App?</Text>
                <Text style={styles.normal}>
                    We do not collect, share, or otherwise transmit any data from the app.
                    The in-game high score is the only data stored in the app.
                    No sensitive information (name, contact information, device name, IP, address, browser, location, language) is stored in this app.
                </Text>
                <Text style={styles.subheader}>California Consumer Rights</Text>
                <Text style={styles.normal}>
                    The California Consumer Privacy Act provides specific rights to those who live in California.
                    If you are a California-based consumer, as that term is defined under California law, this section shall apply in addition to all other applicable rights and information contained in this Statement.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • You have the right to request that we provide you with information about what personal information we collect, use, and disclose.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • You have the right to request that we delete the personal information we, or our service providers, store about you. 
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • We will not discriminate or retaliate against you if you elect to exercise any rights under this section of our Privacy Statement.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • You may request that we not sell your personal information. As noted above, we do not sell your personal information, and we only share your personal information with third parties, as described in this Statement.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • You have the right to designate an authorized agent to make a request on your behalf.
                    Please see the Identity Verification Requirement below for information on our process for verifying that we have received a legally valid request.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • If you are a California consumer and have additional questions based on this section of our Privacy Statement or wish to submit a request to request that we not share your information with third parties, please contact us by email or through the contact us page.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • See more at <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                        Linking.openURL("https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/")
                    }}>https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/</Text>
                </Text>
                <Text style={styles.subheader}>According to caloppa, we agree to the following:</Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • Users can visit our App anonymously.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • You'll be notified of any ONLINE PRIVACY POLICY changes when there is an update.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • Users will be notified of any changes when updates to the app are released
                </Text>
                <Text style={styles.subheader}>Coppa (children online privacy protection action)</Text>
                <Text style={styles.normal}>
                    With regards to the assortment of private information from children under age 13 years, the Children's Online Privacy Protection Act (COPPA) puts parents in charge.
                    The Federal Trade Commission, United States' consumer safety firm, enforces the COPPA Guideline, which spells out what providers of websites and online services should do to safeguard children's privatizes and security online.
                    For more details, visit <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                        Linking.openURL("https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule")
                    }}>https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule</Text>
                </Text>
                <Text style={styles.subheader}>GDPR-Customer data processing appendix:</Text>
                <Text style={styles.normal}>
                    <Text style={styles.bold}>"Customer Data"</Text> means any personal data that the app processes on Customer's behalf via the Services, as more particularly described in this DPA.
                </Text>
                <Text style={styles.normal}>
                    <Text style={styles.bold}>"Data Protection Laws"</Text> means all data protection laws and regulations applicable to a party's processing of Customer Data under the Agreement, including, where applicable, EU Data Protection Law and Non-EU Data Protection Laws.
                </Text>
                <Text style={styles.subheader}>GDPR-EU data protection law</Text>
                <Text style={styles.normal}>
                    <Text style={styles.bold}>“EU Data Protection Law”</Text> means all data protection laws and regulations applicable to Europe, including (i) Regulation 2016/679 of the European Parliament and the Council on the protection of natural persons concerning the processing of personal data and on the free movement of such data (<Text style={styles.bold}>General Data Protection Regulation</Text>) (“<Text style={styles.bold}>GDPR</Text>“);
                    (ii) Directive <Text style={styles.bold}>2002/58/EC</Text> concerning the processing of personal data and the protection of privacy in the electronic communications sector; (iii) applicable national implementations of (i) and (ii); and (iv) in respect of the <Text style={styles.bold}>United Kingdom</Text> (“<Text style={styles.bold}>UK</Text>“) any applicable national legislation that replaces or converts in domestic law the GDPR or any other law relating to data and privacy as a consequence of the UK leaving the European Union.
                </Text>
                <Text style={styles.normal}>
                    “<Text style={styles.bold}>Europe</Text>” means, for this DPA, the European Union, the European Economic Area and/or their member states, Switzerland, and the United Kingdom.
                </Text>
                <Text style={styles.normal}>
                    “<Text style={styles.bold}>Non-EU Data Protection Laws</Text>” means the California Consumer Privacy Act (“<Text style={styles.bold}>CCPA</Text>”);
                    the Canadian Personal Information Protection and Electronic Documents Act (“PIPEDA”);
                    and the Brazilian General Data Protection Law (“<Text style={styles.bold}>LGPD</Text>“), Federal Law no. 13,709/2018.
                </Text>
                <Text style={styles.normal}>
                    “<Text style={styles.bold}>SCCs</Text>” means the standard contractual clauses for processors as approved by the European Commission or Swiss Federal Data Protection Authority (as applicable), which shall apply only to transfers of Customer Data from the European Union.
                </Text>
                <Text style={styles.normal}>
                    “<Text style={styles.bold}>Services Data</Text>” means any data relating to the Customer's use, support, and/or operation of the Services, including information relating to volumes, activity logs, frequencies, bounce rates, or other information regarding the communications Customer generates and sends using the Services.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • <Text style={styles.bold}>Parties' roles</Text>:
                    If EU Data Protection Law or the LGPD applies to either party's processing of Customer Data, the parties acknowledge and agree that concerning the processing of Customer Data, Customer is the controller and is a processor acting on behalf of Customer, as further described in Annex A (Details of Data Processing) of this DPA.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • <Text style={styles.bold}>Purpose limitation</Text>:
                    The app shall process Customer Data only following Customer's documented lawful instructions as outlined in this DPA, as necessary to comply with applicable law, or as otherwise agreed in writing ("Permitted Purposes").
                    The parties agree that the agreement sets out the Customer's complete and final instructions to the app concerning the processing of Customer Data.
                    Processing outside the scope of these instructions (if any) shall require a prior written agreement between the parties.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • <Text style={styles.bold}>Prohibited data</Text>:
                    Customer will not provide (or cause to be provided) any Sensitive Data to the app for processing under the Agreement, and we will have no liability whatsoever for Sensitive Data, whether in connection with a Security Incident or otherwise.
                    To avoid doubt, this DPA will not apply to Sensitive Data.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • <Text style={styles.bold}>Customer compliance</Text>:
                    Customer represents and warrants that (i) it has complied, and will continue to comply, with all applicable laws, including Data Protection Laws, in respect of its processing of Customer Data and any processing instructions it issues to the app;
                    and (ii) it has provided, and will continue to provide, all notice and has obtained, and will continue to obtain, all consents and rights necessary under Data Protection Laws for the app to process Customer Data for the purposes described in the agreement.
                    Customer shall have sole responsibility for the accuracy, quality, and legality of Customer Data and how Customer acquired Customer data.
                    Without prejudice to the generality of the preceding, Customer agrees that it shall be responsible for complying with all laws (including Data Protection Laws) applicable to any emails or other content created, sent, or managed through the service, including those relating to obtaining consents (where required) to send emails, the content of the emails and its email deployment practices.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • <Text style={styles.bold}>The lawfulness of Customer's instructions</Text>:
                    Customer will ensure that United Kingdom processing of the Customer Data by Customer's instructions will not cause the app to violate any applicable law, regulation, or rule, including, without limitation, Data Protection Laws.
                    The app shall promptly notify Customer in writing unless prohibited from doing so under EU Data Protection Laws if it becomes aware or believes that any data processing instruction from Customer violates the GDPR or any UK implementation of the GDPR.
                </Text>
                <Text style={styles.subheader}>Your Legal Rights</Text>
                <Text style={styles.normal}>
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data.
                </Text>
                <Text style={[styles.normal, styles.bold]}>
                    You may have the following rights: -
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    a) <Text style={styles.bold}>Request access</Text> to your personal data (commonly known as a "data subject access request").
                    This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    b) <Text style={styles.bold}>Request correction</Text> of the personal data that we hold about you.
                    This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    c) <Text style={styles.bold}>Request deletion</Text> of your personal data.
                    This enables you to ask us to delete or remove personal data where there is no good reason for us to continue to process it.
                    You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law.
                    Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons, which will be notified to you, if applicable, at the time of your request.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    d) <Text style={styles.bold}>Object to processing</Text> of your personal data where we are relying on a legitimate interest (or those of a third party), and there is something about your situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms.
                    You also have the right to object to where we are processing your personal data for direct marketing purposes.
                    In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    e) <Text style={styles.bold}>Request restriction</Text> of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:
                </Text>
                <Text style={[styles.normal, { marginLeft: 48 }]}>
                    a) If you want us to establish the data's accuracy.
                </Text>
                <Text style={[styles.normal, { marginLeft: 48 }]}>
                    b) Where our use of the data is unlawful, but you do not want us to erase it.
                </Text>
                <Text style={[styles.normal, { marginLeft: 48 }]}>
                    c) Where you need us to hold the data even if we no longer require it as you need it to establish, exercise, or defend legal claims.
                </Text>
                <Text style={[styles.normal, { marginLeft: 48 }]}>
                    d) You have objected to our use of your data, but we need to verify whether we have overriding legitimate grounds to use it.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    f) <Text style={styles.bold}>Request the transfer</Text> of your personal data to you or to a third party.
                    We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format.
                    Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    g) <Text style={styles.bold}>Withdraw consent</Text>
                    at any time where we are relying on consent to process your personal data.
                    However, this will not affect the lawfulness of any processing carried out before you withdraw your consent.
                    If you withdraw your consent, we may not be able to provide certain services to you.
                </Text>
                <Text style={styles.subheader}>International Data Transfer</Text>
                <Text style={styles.normal}>
                    This app allows no transfer of data internationally.
                </Text>
                <Text style={styles.subheader}>Limitation of liability</Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so some of the above limitations may not apply to you.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • We make no legal representation that the App or products are appropriate or available for use in locations outside United States.
                    You may access the App from outside United States at your own risk and initiative and must bear all responsibility for compliance with any applicable foreign laws.
                </Text>
                <Text style={styles.subheader}>Governing Law and Jurisdiction</Text>
                <Text style={styles.normal}>
                    This App originates from the United States.
                    The laws of the United States, without regard to its conflict of law, governs these terms to the contrary.
                    You hereby agree that all disputes arising out of or in connection with these terms shall be submitted to the exclusive jurisdiction of the United States.
                    By using this App, you consent to the jurisdiction and venue of such courts in connection with any action, suit, proceeding, or claim arising under or by reason of these terms.
                    You hereby waive any right to trial by jury arising out of these terms.
                </Text>
                <Text style={styles.subheader}>Changes to this privacy notice</Text>
                <Text style={styles.normal}>
                    We reserve the right to alter this privacy notice at any time.
                    Such alterations will be posted on our App.
                    You can also obtain an up-to-date copy of our privacy notice by contacting us.
                </Text>
                <Text style={styles.subheader}>Contacting us</Text>
                <Text style={styles.normal}>
                    If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you can email us directly at <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                        Linking.openURL("mailto:quickdodge.app.help@gmail.com")
                    }}>quickdodge.app.help@gmail.com</Text>.
                </Text>
                <Text style={styles.normal}>
                    This document was last updated on June 15, 2022.
                </Text>
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
    header: {
        fontFamily: "Quicksand",
        fontWeight: "900",
        fontSize: 28,
        marginVertical: 24,
        textAlign: "center"
    },
    subheader: {
        fontFamily: "Quicksand",
        fontWeight: "900",
        fontSize: 22
    },
    bold: {
        fontFamily: "Quicksand",
        fontWeight: "700",
        fontSize: 18
    },
    normal: {
        fontFamily: "Quicksand",
        fontWeight: "400",
        fontSize: 18,
        marginBottom: 16
    }
})

export default PrivacyPolicyStack