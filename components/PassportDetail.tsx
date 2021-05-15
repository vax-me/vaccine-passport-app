import React from 'react';
import { Card, Text } from "native-base";
import { Passport } from "../features/passport/passport-model";
import Birthday from "./Birthday";

interface Props {
  passport: Passport;
}



export const PassportDetail: React.FC<Props> = ({passport}: Props) => {

  return <Card>
    <Text>First Name: {passport.first_name}</Text>
    <Text>Last Name: {passport.last_name}</Text>
    <Text>Vaccine Type: {passport.type}</Text>
    <Birthday birthday={passport.birthdhay}></Birthday>
  </Card>
}
