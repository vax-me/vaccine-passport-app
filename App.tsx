/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreenView from "./views/SplashScreenView";
import RequestPassportView from "./views/RequestPassportView";
import QRCodeView from "./views/QRCodeView";


const Stack = createStackNavigator();

const App = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={"Splash"}
              component={SplashScreenView}
            >

            </Stack.Screen>
            <Stack.Screen name={"RequestPassport"}
                          component={RequestPassportView}>

            </Stack.Screen>
            <Stack.Screen name={"QRCode"}
                          component={QRCodeView}>

            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )

}


export default App;
