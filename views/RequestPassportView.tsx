import React from "react";
import { Button, SafeAreaView, ScrollView, Text, TextInput } from "react-native";
import { Controller, useForm } from "react-hook-form";
import EncryptionService from "../features/encryption/key";
import { PassportService } from "../features/passport/passport-service";
import { RequestPassportRequest } from "../features/passport/passport-model";
import { Storage, StorageKeys } from "../features/storage/storage";


const onSubmit = async (data: any) => {
  const keypair = await EncryptionService.generateKey()
  const service = PassportService.getInstance();
  const request: RequestPassportRequest = {
    first_name: data.first_name, last_name: data.last_name, public_key: keypair.public
  }
  const passport = await service.requestPassport(request)
  await Storage.setItem(StorageKeys.PASSPORT, passport);
  await Storage.setItem(StorageKeys.PUBLIC_KEY, keypair.public);
  await Storage.setItem(StorageKeys.PRIVATE_KEY, keypair.private);
}

export const RequestPassportView = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return <SafeAreaView>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
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
          />
        )}
        name="last_name"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
  </SafeAreaView>
}

export default RequestPassportView;
