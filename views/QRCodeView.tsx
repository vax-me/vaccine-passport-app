import React, { useEffect, useState } from "react";
import { Storage } from "../features/storage/storage";
import CustomHeader from "../components/Header";
import { Container, Content, Text } from "native-base";
import { PassportDetail } from "../components/PassportDetail";
import QRCode from 'react-native-qrcode-svg';
import { Passport } from "../features/passport/passport-model";


const QRCodeView = ({route}) => {
  // TODO: Get from URL
  const { passportID } = route.params;
  const [passport, setPassport] = useState<Passport | null>(null);

  useEffect(() => {
    if (!passport) {
      getPassport();
    }
  }, [passportID]);
  const getPassport = async () => {
    const passport1 = await Storage.getPassport(passportID);
    setPassport(passport1);
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
