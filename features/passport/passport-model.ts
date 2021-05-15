

export type PassportID = string;

export interface Birthday {
  day: number;
  month: number;
  year: number;
}

export  interface RequestedPassport {
  id: PassportID;
  name: string;
  public_key: PublicKey;
  private_key: PrivateKey;
  birthday: Birthday;
}

export interface Passport extends RequestedPassport {
  type: VaccineType;
  manufacturer: Manufacturer;
  dose_no: number;
  lot_no: string;
}

export type PublicKey = string;
export type PrivateKey = string;
export type Manufacturer = string;
export type VaccineType = string;


export interface RequestPassportRequest {
  name: string;
  birthday: Birthday;
  public_key: PublicKey;
}

export interface SignPassportRequest {
  "type": VaccineType
  "lot_no": string
  "manufacturer": Manufacturer
  "dose_no": number
}
