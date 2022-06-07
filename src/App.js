import React, { useEffect } from "react"

import SplashScreen from "react-native-splash-screen"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { SafeAreaProvider } from "react-native-safe-area-context"

import Game from "./stacks/Game"
import Credits from "./stacks/Credits"
import PrivacyPolicy from "./stacks/PrivacyPolicy"
import TermsAndConditions from "./stacks/TermsAndConditions"

const App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    
    const Stack = createNativeStackNavigator()
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    presentation: "fullScreenModal"
                }}>
                    <Stack.Screen name={"Game"} component={Game} />
                    <Stack.Screen name={"Credits"} component={Credits} />
                    <Stack.Screen name={"PrivacyPolicy"} component={PrivacyPolicy} />
                    <Stack.Screen name={"TermsAndConditions"} component={TermsAndConditions} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App