/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Root, Spinner} from 'native-base';
import SplashScreenView from './views/SplashScreenView';
import {NavigationContainer} from '@react-navigation/native';
import RequestPassportView from './views/RequestPassportView';
import QRCodeView from './views/QRCodeView';
import {Passport} from './features/passport/passport-model';
import {Storage} from './features/storage/storage';

const Stack = createStackNavigator();

const AppLoading = () => {
  return <Spinner />;
};

const loadDependencies = async () => {
  const debugPassport: Passport = {
    private_key: '',
    birthday: {
      day: 10,
      month: 1,
      year: 2001,
    },
    dose_no: 1,
    name: 'Test',
    id: 'DEBUG_ID',
    lot_no: '134A',
    manufacturer: 'Fitzer Safe',
    public_key: 'PUBKEY',
    type: 'Anti Chip',
  };
  // Uncomment this to get debug passport in App
  // await Storage.addPassport(debugPassport);
};

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      loadDependencies().then(() => setLoading(false));
    }
  });
  if (loading) {
    return <AppLoading />;
  }
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Splashscreen'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={'Splashscreen'} component={SplashScreenView} />
          <Stack.Screen
            name={'RequestPassport'}
            component={RequestPassportView}
          />
          <Stack.Screen name={'PassportDetail'} component={QRCodeView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
};

export default App;
