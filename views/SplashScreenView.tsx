import React, { useEffect, useState } from "react";
import { Button, Container, Content, Header, List, ListItem, Text } from "native-base";
import CustomHeader from "../components/Header";
import { Passport } from "../features/passport/passport-model";
import { Storage } from "../features/storage/storage";

const SplashScreenView = ({navigation}: any) => {
  const [passports, setPassports] = useState<Passport[] | null>(null);

  useEffect(() => {
    if (passports == null) {
      Storage.listPassports().then(passports => setPassports(passports))
    }
  }, []);

  if (passports == null) {
    return <Text>Loading</Text>;
  }

  const items = passports.map((pass) => (
    <ListItem key={pass.id} onPress={() => navigation.navigate('PassportDetail', {passportID: pass.id})}>
      <Text>
      {pass.type}
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
