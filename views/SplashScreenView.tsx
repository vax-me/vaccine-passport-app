import React, { useState } from "react";
import { Accordion, Button, Container, Content, Header, List, ListItem, Text } from "native-base";
import CustomHeader from "../components/Header";

const passports = [{
  title: "COVIDPfizer1",
  content: "Content"
},{
  title: "COVIDPfizer2",
  content: "Content"
}, {
  title: "GSK Tetanus",
  content: "Content"
}]


const SplashScreenView = ({navigation}: any) => {
  const items = passports.map((pass) => (
    <ListItem key={pass.title}>
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
