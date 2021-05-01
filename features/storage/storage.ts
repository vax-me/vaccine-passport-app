//./storage.js
import AsyncStorage from "@react-native-community/async-storage";

export enum StorageKeys {
  PUBLIC_KEY = "PASSPORT_PUBKEY",
  PRIVATE_KEY = "PASSPORT_PRIVATEKEY",
  PASSPORT = "PASSPORT_PASSPORT"
}

export class Storage {
  static getItem = async (key: StorageKeys)  => {
    let item = await AsyncStorage.getItem(key);
    //You'd want to error check for failed JSON parsing...
    return item;
  }

  static setItem = async (key: StorageKeys, value: string) => {
    return await AsyncStorage.setItem(key, value);
  }

  static removeItem = async(key: StorageKeys) => {
    return await AsyncStorage.removeItem(key);
  }
}
