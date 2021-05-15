//./storage.js
import AsyncStorage from "@react-native-community/async-storage";
import { Passport, PassportID, RequestedPassport } from "../passport/passport-model";


export class Storage {
  private static PASSPORT_PREFIX = "PASSPORT";
  private static REQUESTED_PASSPORT_PREFIX = "REQUESTED_PASSPORT";

  static addRequestedPassport = async (passport: RequestedPassport) => {
    await AsyncStorage.setItem(Storage.REQUESTED_PASSPORT_PREFIX + passport.id, JSON.stringify(passport))
  }

  static getRequestedPassport = async (id: PassportID): Promise<RequestedPassport> => {
    const passportString = await AsyncStorage.getItem(Storage.REQUESTED_PASSPORT_PREFIX + id);
    if (passportString == null) {
      throw Error("No passport with specified id ${id}.")
    }
    return JSON.parse(passportString);
  }

  static addPassport = async (passport: Passport) => {
    await AsyncStorage.setItem(Storage.PASSPORT_PREFIX + passport.id, JSON.stringify(passport))
  }

  static getPassport = async (id: PassportID): Promise<Passport> => {
    const passportString = await AsyncStorage.getItem(Storage.PASSPORT_PREFIX + id);
    if (passportString == null) {
      throw Error("No passport with specified id ${id}.")
    }
    return JSON.parse(passportString);
  }

}
