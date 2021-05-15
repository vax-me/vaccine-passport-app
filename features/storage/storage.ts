//./storage.js
import AsyncStorage from "@react-native-community/async-storage";
import { Passport, PassportID } from "../passport/passport-model";


const debugPassport: Passport = {
  private_key: "",
  birthday: {
    day: 10,
    month: 1,
    year: 2001
  },
  dose_no: 1,
  name: "Test",
  id: "DEBUG_ID",
  lot_no: "134A",
  manufacturer: "Fitzer Safe",
  public_key: "PUBKEY",
  type: "Anti Chip"
}

export class Storage {

  static addPassport = async (passport: Passport) => {
    await AsyncStorage.setItem(passport.id, JSON.stringify(passport))
  }

  static getPassport = async (id: PassportID): Promise<Passport> => {
    if (id == "DEBUG_ID") {
      return debugPassport
    }
    const passportString = await AsyncStorage.getItem(id);
    if (passportString == null) {
      throw Error("No passport with specified id ${id}.")
    }
    return JSON.parse(passportString);
  }

}
