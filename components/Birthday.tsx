import { Text } from "native-base";
import React from "react";

const Birthday = ({birthday}: { birthday: Birthday }) => {
  return (
    <Text>{birthday.month}/{birthday.day}/{birthday.year}</Text>
  );
}

export default Birthday;
