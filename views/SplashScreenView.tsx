import { Button, SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Section from "../components/Section";
import React, { Component } from "react";

const SplashScreenView: Component = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
          <Section title="Vaccine Passport">
            <Text>
              Go To Requesting New Passport
            </Text>
            <Button title={"Go to requesting passport"} onPress={() => navigation.navigate("RequestPassport")} />
          </Section>
          <Section title="Refreshing Passport">
            <Text>
              Requesting a new Passport.
            </Text>
            <Button title={"Go to QRCode"} onPress={() => navigation.navigate("QRCode")} />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SplashScreenView;
