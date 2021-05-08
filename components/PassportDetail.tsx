import React from 'react';
import { Card, Text } from "native-base";
import { Passport } from "../features/passport/passport-model";

interface Props {
  passport: Passport;
}


export const PassportDetail: React.FC<Props> = ({passport}: Props) => {

  return <Card>
    <Text>{passport.first_name}</Text>
    <Text>{passport.last_name}</Text>
    <Text>{passport.type}</Text>
  </Card>
}
