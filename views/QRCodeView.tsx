import { Button, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Section from "../components/Section";
import React, { Component, useEffect, useState } from "react";
import { Storage, StorageKeys } from "../features/storage/storage";

const QRCodeView: Component = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [passport, setPassport] = useState('');

  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!passport) {
      getPassport();
    }
  }, []);
  const getPassport = async () => {
    const passportString = await Storage.getItem(StorageKeys.PASSPORT);
    if (passportString != null)
      setPassport(JSON.parse(passportString));
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>
            Show QR Code here
            Passport: {passport}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default QRCodeView;
