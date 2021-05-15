import React, { useState } from "react";
import { Accordion, Button, Container, Content, Header, List, ListItem, Text } from "native-base";
import CustomHeader from "../components/Header";

const passports = [{
  title: "COVIDPfizer1",
  id: "DEBUG_ID",
  content: "Content"
},{
  title: "COVIDPfizer2",
  id: "ID-1",
  content: "Content"
}, {
  title: "GSK Tetanus",
  id: "ID-3",
  content: "Content"
}]


const SplashScreenView = ({navigation}: any) => {
  const items = passports.map((pass) => (
    <ListItem key={pass.title} onPress={() => navigation.navigate('PassportDetail', {passportID: pass.id})}>
      <Text>
      {pass.title}
      </Text>
    </ListItem>))
  return (
    <Container>
      <CustomHeader />
      <Content padder>
        <List>
          {items}
        </List>
        <Button full onPress={() => navigation.navigate("RequestPassport")}>
          <Text>Add Passport</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default SplashScreenView;
