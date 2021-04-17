/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { PassportRequestView } from "./views/PassportRequestView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./views/SplashScreen";


const Stack = createStackNavigator();

const App = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={"Splash"}
              component={SplashScreen}
            >

            </Stack.Screen>
            <Stack.Screen name={"RequestPassport"}
                          component={PassportRequestView}>

            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )

}


export default App;
