import EncryptedStorage from "react-native-encrypted-storage";
import { Passport, PassportID, RequestedPassport } from "../passport/passport-model";


export class Storage {
  private static PASSPORT_PREFIX = "PASSPORT";
  private static PASSPORT_IDS = "PASSPORT_IDS";
  private static REQUESTED_PASSPORT_PREFIX = "REQUESTED_PASSPORT";
  private static REQUESTED_PASSPORT_IDS = "REQUESTED_PASSPORT_IDS"

  static addRequestedPassport = async (passport: RequestedPassport) => {
    await Storage.addRequestedPassportID(passport.id);
    await EncryptedStorage.setItem(Storage.REQUESTED_PASSPORT_PREFIX + passport.id, JSON.stringify(passport))
  }

  static getRequestedPassport = async (id: PassportID): Promise<RequestedPassport> => {
    const passportString = await EncryptedStorage.getItem(Storage.REQUESTED_PASSPORT_PREFIX + id);
    if (passportString == null) {
      throw Error(`No passport with specified id ${id}.`)
    }
    return JSON.parse(passportString);
  }


  private static addRequestedPassportID = async (id: PassportID) => {
    try {
      const ids = await Storage.getRequestedPassportIDs();
      if (ids.includes(id)) return;
      ids.push(id);
      await EncryptedStorage.setItem(Storage.REQUESTED_PASSPORT_IDS, JSON.stringify(ids));
    } catch {
      const ids = [id];
      console.info(`Creating new Requested Passport ID Array`)
      await EncryptedStorage.setItem(Storage.REQUESTED_PASSPORT_IDS, JSON.stringify(ids))
    }
  }

  static getRequestedPassportIDs = async (): Promise<PassportID[]> => {
    return await Storage.getIDs(Storage.REQUESTED_PASSPORT_IDS);
  }

  static listRequestedPassports = async (): Promise<RequestedPassport[]> => {
    const ids = await Storage.getRequestedPassportIDs();
    return await Promise.all(ids.map(id => Storage.getRequestedPassport(id)));
  }


  static addPassport = async (passport: Passport) => {
    await Storage.addPassportID(passport.id);
    await EncryptedStorage.setItem(Storage.PASSPORT_PREFIX + passport.id, JSON.stringify(passport))
  }

  static getPassport = async (id: PassportID): Promise<Passport> => {
    const passportString = await EncryptedStorage.getItem(Storage.PASSPORT_PREFIX + id);
    if (passportString == null) {
      throw Error(`No passport with specified id ${id}.`)
    }
    return JSON.parse(passportString);
  }

  static getPassportIDs = async (): Promise<PassportID[]> => {
    return await Storage.getIDs(Storage.PASSPORT_IDS);
  }

  static listPassports = async (): Promise<Passport[]> => {
    const ids = await Storage.getPassportIDs();
    return await Promise.all(ids.map(id => Storage.getPassport(id)));
  }

  private static addPassportID = async (id: PassportID) => {
    try {
      const ids = await Storage.getPassportIDs();
      if (ids.includes(id)) return;
      ids.push(id);
      await EncryptedStorage.setItem(Storage.PASSPORT_IDS, JSON.stringify(ids));
    } catch {
      const ids = [id];
      console.info(`Creating new Passport ID Array`)
      await EncryptedStorage.setItem(Storage.PASSPORT_IDS, JSON.stringify(ids))
    }

  }

  private static getIDs = async (identifier: string): Promise<PassportID[]> => {
    const idString = await EncryptedStorage.getItem(identifier);
    if (idString == null) {
      throw Error(`Failed getting ${identifier} from storage`);
    }
    return JSON.parse(idString);
  }



}
