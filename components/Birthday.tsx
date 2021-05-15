import { Text } from "native-base";
import React from "react";
import { Birthday } from "../features/passport/passport-model";

interface Props {
  birthday: Birthday;
}

const BirthdayView: React.FC<Props> = ({birthday}) => {
  return (
    <Text>{birthday.month}/{birthday.day}/{birthday.year}</Text>
  );
}

export default BirthdayView;
