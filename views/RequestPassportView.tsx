import React from "react";
import { Controller, useForm } from "react-hook-form";
import EncryptionService from "../features/encryption/key";
import { PassportService } from "../features/passport/passport-service";
import { RequestPassportRequest } from "../features/passport/passport-model";
import { Storage, StorageKeys } from "../features/storage/storage";
import CustomHeader from "../components/Header";
import { Button, Container, Content, Text } from "native-base";
import { TextInput } from "react-native";


const onSubmit = async (data: any) => {
  const keypair = await EncryptionService.generateKey()
  const service = PassportService.getInstance();
  const request: RequestPassportRequest = {
    first_name: data.first_name, last_name: data.last_name, public_key: keypair.public,
    birthday: { day: 0, month: 0, year: 0 }
  }
  const passport = await service.requestPassport(request)
  await Storage.setItem(StorageKeys.PASSPORT, passport);
  await Storage.setItem(StorageKeys.PUBLIC_KEY, keypair.public);
  await Storage.setItem(StorageKeys.PRIVATE_KEY, keypair.private);
}

export const RequestPassportView = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return <Container>
    <CustomHeader />
    <Content padder >
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder={"First Name"}
          />
        )}
        name="first_name"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder={"Last Name"}
          />
        )}
        name="last_name"
        defaultValue=""
      />

      <Button full onPress={handleSubmit(onSubmit)}><Text>Submit</Text></Button>
    </Content>

  </Container>
}

export default RequestPassportView;
