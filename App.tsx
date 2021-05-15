/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { Root, Spinner } from "native-base";
import SplashScreenView from "./views/SplashScreenView";
import { NavigationContainer } from "@react-navigation/native";
import RequestPassportView from "./views/RequestPassportView";
import QRCodeView from "./views/QRCodeView";


const Stack = createStackNavigator();

const AppLoading = () => {
  return <Spinner />
};

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const loadDependencies = async() => {
  await sleep(1000);
}


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
        loadDependencies().then(() => setLoading(false))
    }
  });
  if (loading) {
    return <AppLoading />;
  }
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Splashscreen"} screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name={"Splashscreen"} component={SplashScreenView} />
          <Stack.Screen name={"RequestPassport"} component={RequestPassportView} />
          <Stack.Screen name={"PassportDetail"} component={QRCodeView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );

};


export default App;
