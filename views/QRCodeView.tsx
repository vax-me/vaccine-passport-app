import React, { Component, useEffect, useState } from "react";
import { Storage, StorageKeys } from "../features/storage/storage";
import CustomHeader from "../components/Header";
import { Container, Content, Text } from "native-base";
import { PassportDetail } from "../components/PassportDetail";
import QRCode from 'react-native-qrcode-svg';

const QRCodeView: Component = () => {
  const [passport, setPassport] = useState(undefined);

  useEffect(() => {
    if (!passport) {
      getPassport();
    }
  }, []);
  const getPassport = async () => {
    const passportString = await Storage.getItem(StorageKeys.PASSPORT);
    if (passportString != null)
      setPassport(JSON.parse(passportString));
  }

  if (!passport) {
    return <Container>
      <Text>Loading</Text>
    </Container>
  }

  return (
    <Container>
      <CustomHeader />
      <Content padder>
        <PassportDetail passport={passport} />
        <QRCode value={JSON.stringify(passport)} />
      </Content>
    </Container>
  );
}

export default QRCodeView;
