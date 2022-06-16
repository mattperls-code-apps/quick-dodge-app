import React from "react"

import { View, ScrollView, Text, StyleSheet, StatusBar, Linking } from "react-native"

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
                <Text style={styles.header}>Terms And Conditions</Text>
                <Text style={styles.normal}>
                    <Text style={styles.subheader}>THE AGREEMENT: </Text>
                    The use of the services on this App (hereinafter referred to as "App") are subject to the following Terms & Conditions, all parts and sub-parts of which are specifically incorporated by reference here.
                    This Agreement shall govern the use of all pages on this App (hereinafter collectively referred to as "App") and any services provided by or on this App ("Services").
                </Text>
                <Text style={styles.subheader}>DEFINITIONS</Text>
                <Text style={styles.normal}>
                    “Agreement” denotes to this Terms and Conditions and the Privacy Policy and other documents provided to you by the App.
                </Text>
                <Text style={styles.normal}>
                    <Text style={styles.bold}>"We,"</Text> <Text style={styles.bold}>"us,"</Text> and <Text style={styles.bold}>"our"</Text> are references to QUICK DODGE!.
                </Text>
                <Text style={styles.normal}>
                    <Text style={styles.bold}>"User,"</Text> <Text style={styles.bold}>"you,"</Text> and <Text style={styles.bold}>"your" </Text>
                    denotes the person who is accessing the App for taking or availing any service from us. User shall include the Company, partnership, sole trader, person, body corporate, or association taking services of this App.
                </Text>
                <Text style={styles.normal}>
                    <Text style={styles.bold}>"App"</Text> shall mean and include <Text style={styles.bold}>Quick Dodge!</Text> and any successor App of the Company or any of its affiliates.
                </Text>
                <Text style={styles.normal}>
                    <Text style={styles.bold}>Parties</Text>: Collectively, the parties to this Agreement (We and You) will be referred to as Parties.
                </Text>
                <Text style={styles.subheader}>ASSENT & ACCEPTANCE</Text>
                <Text style={styles.normal}>
                    PLEASE READ THESE TERMS OF USE, OUR PRIVACY POLICY, AND ALL APPLICABLE SUPPLEMENTAL TERMS (COLLECTIVELY, THE "TERMS") CAREFULLY, AS THEY CONTAIN TERMS AND CONDITIONS THAT IMPACT YOUR RIGHTS, OBLIGATIONS, AND REMEDIES IN CONNECTION WITH YOUR USE OF THE SERVICES AND CONTENT. FOR EXAMPLE, THE TERMS INCLUDE:
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>• YOUR OBLIGATION TO COMPLY WITH ALL APPLICABLE LAWS AND REGULATIONS.</Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>• LIMITATIONS OF OUR LIABILITY TO YOU; AND</Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>• A REQUIREMENT THAT YOU PURSUE CLAIMS OR SEEK RELIEF AGAINST US (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ON AN INDIVIDUAL BASIS, RATHER THAN AS A PARTICIPANT IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING.</Text>
                <Text style={styles.normal}>
                    YOUR ACCESS TO AND USE OF THE SERVICES IS CONDITIONED ON YOUR ACCEPTANCE OF AND COMPLIANCE WITH ALL APPLICABLE TERMS.
                    If you do not agree to these Terms or our Privacy Policy, then please cease using the Services immediately.
                    We reserve the right to change these Terms at any time (see “Changes to these Terms” below.)
                    By accessing, browsing, and/or using the Services after updates to these Terms have been posted, you agree to be bound by the updated Terms.
                    THESE TERMS AND OUR PRIVACY POLICY CONSTITUTE A BINDING AGREEMENT BETWEEN YOU AND DMP1LLC.
                </Text>
                <Text style={styles.subheader}>LICENSE TO USE APP</Text>
                <Text style={styles.normal}>
                    We may provide you with certain information because of your use of the App or Services.
                    Such information may include but is not limited to documentation, data, or information developed by us and other materials which may assist in your use of the App or Services ("Our Materials").
                    Subject to this Agreement, we grant you a non-exclusive, limited, non-transferable, and revocable license to use Our Materials solely in connection with your use of the App and Services.
                    Our Materials may not be used for any other purpose, and this license terminates upon your cessation of use of the App or Services or at the termination of this Agreement.
                </Text>
                <Text style={styles.subheader}>GENERAL TERMS & CONDITIONS</Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    a) By submitting a question to The Company, you acknowledge that The Company is not responsible for any response or advice you receive or do not receive, and you further agree not to hold The Company liable for any loss, harm, injury, damage, or consequence of any kind resulting from your use of or reliance on the app.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    b) The company reserves the right to modify the Terms and Conditions of this app at any time.
                </Text>
                <Text style={styles.subheader}>INTELLECTUAL PROPERTY</Text>
                <Text style={styles.normal}>
                    You agree that the App and all Services provided by us are our property, including all copyrights, trademarks, trade secrets, patents, and other intellectual property ("Our IP").
                    You agree that we own all rights, title, and interest in and to the Our IP and that you will not use Our IP for any unlawful or infringing purpose.
                    You agree not to reproduce or distribute Our IP in any way, including electronically or via registration of any new trademarks, trade names, service marks, or Uniform Resource Locators (URLs), without express written permission from us.
                </Text>
                <Text style={styles.subheader}>ACCEPTABLE USE</Text>
                <Text style={styles.normal}>
                    You agree not to use the App or Services for any unlawful purpose, or any purpose prohibited under this clause.
                    You agree not to use the App or Services in any way that could damage the App or Service.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • You further agree not to use the App or Services:
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • To violate any of our intellectual property rights or any third party.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    • To upload or otherwise disseminate any computer viruses or other software that may damage the property of another.
                </Text>
                <Text style={styles.subheader}>REVERSE ENGINEERING & SECURITY</Text>
                <Text style={styles.normal}>
                    You agree not to undertake any of the following actions:
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    a) Reverse engineer or attempt to reverse engineer or disassemble any code or software from or on the App or Services.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    b) Violate the security of the App or Services through any unauthorized access, circumvention of encryption or other security tools, data mining, or interference to any host, user, or network.
                </Text>
                <Text style={styles.subheader}>INDEMNIFICATION</Text>
                <Text style={styles.normal}>
                    You agree to defend and indemnify us and any of our affiliates (if applicable) and hold us harmless against any legal claims and demands, including reasonable attorney's fees, which may arise from or relate to your use or misuse of the App or Services, your breach of this Agreement, or your conduct or actions.
                    You agree that we shall be able to select its legal counsel and may participate in its defense if we wish.
                </Text>
                <Text style={styles.subheader}>EXCLUSION OF LIABILITY</Text>
                <Text style={styles.normal}>
                    You understand and agree that we (A) do not guarantee the accuracy, completeness, validity, or timeliness of information listed by us or any third parties, and (B) shall not be responsible for any materials posted by us or any third party.
                    You shall use your judgment, caution, and common sense in evaluating any prospective methods or offers and any information provided by us or any third party.
                </Text>
                <Text style={styles.normal}>
                    Further, we shall not be liable for direct, indirect consequential, or any other form of loss or damage that may be suffered by a user using the app, including loss of data or information or any kind of financial or physical loss or damage.
                </Text>
                <Text style={styles.normal}>
                    In no event shall DMP1LLC, nor its Owner, directors, employees, partners, agents, suppliers, or affiliates, be accountable for any indirect, incidental, special, eventful, or exemplary costs, including without limitation, loss of proceeds, figures, usage, goodwill, or other intangible losses, consequential from (i) your use or access of or failure to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content attained from the Service; and (iv) unlawful access, use or alteration of your transmissions or content, whether or not based on guarantee, agreement, domestic wrong (including carelessness) or any other lawful concept, whether or not we've been aware of the possibility of such damage, and even if a cure set forth herein is originated to have futile of its important purpose.
                </Text>
                <Text style={styles.subheader}>THIRD-PARTY LINKS & CONTENT</Text>
                <Text style={styles.normal}>
                    We may occasionally post links to third-party apps or other services.
                    You agree that we are not responsible for any loss or damage caused because of your use of any third-party services linked to or from Our App.
                </Text>
                <Text style={styles.subheader}>MODIFICATION & VARIATION</Text>
                <Text style={styles.normal}>
                    We may, from time to time and at any time without notice to you, modify this Agreement.
                    You agree that we have the right to modify this Agreement or revise anything contained herein.
                    You further agree that all modifications to this Agreement are in full force and effect immediately upon posting on the App and that modifications or variations will replace any prior version of this Agreement unless prior versions are specifically referred to or incorporated into the latest modification or variation of this Agreement.
                </Text>
                <Text style={styles.subheader}>ENTIRE AGREEMENT</Text>
                <Text style={styles.normal}>
                    This Agreement constitutes the entire understanding between the Parties concerning any use of this App.
                    This Agreement supersedes and replaces all prior or contemporaneous agreements or understandings, written or oral, regarding the use of this App.
                </Text>
                <Text style={styles.subheader}>SERVICE INTERRUPTIONS</Text>
                <Text style={styles.normal}>
                    We may need to interrupt your access to the App to perform maintenance or emergency services on a scheduled or unscheduled basis.
                    You agree that your access to the App may be affected by unanticipated or unscheduled downtime for any reason but that we shall have no liability for any damage or loss caused because of such downtime.
                </Text>
                <Text style={styles.subheader}>“AS IS” and “AS AVAILABLE” Disclaimer</Text>
                <Text style={styles.normal}>
                    The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind.
                    To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of a course of dealing, course of performance, usage or trade practice.
                    Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards or be error-free or that any errors or defects can or will be corrected.
                </Text>
                <Text style={styles.normal}>
                    Without limiting the foregoing, neither the Company nor any of the Company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                </Text>
                <Text style={styles.normal}>
                    Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all the above exclusions and limitations may not apply to You. But in such a case, the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                </Text>
                <Text style={styles.subheader}>NO WARRANTIES</Text>
                <Text style={styles.normal}>
                    You agree that your use of the App and Services is at your sole and exclusive risk and that any Services provided by us are on an "As Is" basis.
                    We hereby expressly disclaim any express or implied warranties of any kind, including but not limited to the implied warranty of fitness for a particular purpose and the implied warranty of merchantability.
                    We make no warranties that the App or Services will meet your needs or that the App or Services will be uninterrupted, error-free, or secure.
                    We also make no warranties as to the reliability or accuracy of any information on the App or obtained through the Services.
                    You agree that any damage that may occur to you through your computer system or because of the loss of your data from your use of the App or Services is your sole responsibility and that we are not liable for any such damage or loss.
                </Text>
                <Text style={styles.subheader}>LIMITATION ON LIABILITY</Text>
                <Text style={styles.normal}>
                    We are not liable for any damages that may occur to you because of your use of the App or Services, to the fullest extent permitted by law.
                    This section applies to any claims by you, including, but not limited to, lost profits or revenues, consequential or punitive damages, negligence, strict liability, fraud, or torts of any kind.
                </Text>
                <Text style={styles.subheader}>GENERAL PROVISIONS:</Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    <Text style={styles.subheader}>1. JURISDICTION, VENUE & CHOICE OF LAW</Text>:
                    The terms herein will be governed by and construed by the laws of United States without giving effect to any principles of conflicts of law.
                    The Courts of United States shall have exclusive jurisdiction over any dispute arising from the use of the App.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    <Text style={styles.subheader}>2. ASSIGNMENT</Text>:
                    This Agreement, or the rights granted hereunder, may not be assigned, sold, leased, or otherwise transferred in whole or part by you.
                    Should this Agreement, or the rights granted hereunder, be assigned, sold, leased, or otherwise transferred by us, the rights and liabilities of the app will bind and inure to any assignees, administrators, successors, and executors.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    <Text style={styles.subheader}>3. SEVERABILITY</Text>:
                    If any part or sub-part of this Agreement is held invalid or unenforceable by a court of law or competent arbitrator, the remaining parts and sub-parts will be enforced to the maximum extent possible.
                    In such a condition, the remainder of this Agreement shall continue in full force.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    <Text style={styles.subheader}>4. NO WAIVER</Text>:
                    If we fail to enforce any provision of this Agreement, this shall not constitute a waiver of any future enforcement of that provision or any other provision.
                    Waiver of any part or sub-part of this Agreement will not constitute a waiver of any other part or sub-part.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    <Text style={styles.subheader}>5. HEADINGS FOR CONVENIENCE ONLY</Text>:
                    Headings of parts and sub-parts under this Agreement are for convenience and organization only.
                    Headings shall not affect the meaning of any provisions of this Agreement.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    <Text style={styles.subheader}>6. NO AGENCY, PARTNERSHIP, OR JOINT VENTURE</Text>:
                    No agency, partnership, or joint venture has been created between the Parties because of this Agreement.
                    No Party has any authority to bind the other to third parties.
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    <Text style={styles.subheader}>7. FORCE MAJEURE</Text>:
                    We are not liable for any failure to perform due to causes beyond its reasonable control, including, but not limited to, acts of God, acts of civil authorities, acts of military authorities, riots, embargoes, acts of nature, and natural disasters, and other acts which may be due to unforeseen circumstances, i.e., COVID-19!
                </Text>
                <Text style={[styles.normal, { marginLeft: 24 }]}>
                    <Text style={styles.subheader}>8. ELECTRONIC COMMUNICATIONS PERMITTED</Text>:
                    Electronic communications are permitted to both Parties under this Agreement, including e-mail.
                    For any questions or concerns, you may contact us directly at <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                        Linking.openURL("mailto:quickdodge.app.help@gmail.com")
                    }}>quickdodge.app.help@gmail.com</Text>.
                </Text>
                <Text style={styles.normal}>This document was last updated on June 15, 2022.</Text>
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

export default TermsAndConditionsStack