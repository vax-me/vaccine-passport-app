

export type PassportID = string;

export interface Birthday {
  day: number;
  month: number;
  year: number;
}

export interface Passport {
  id: PassportID;
  type: VaccineType;
  manufacturer: Manufacturer;
  dose_no: number;
  lot_no: string;
  first_name: string;
  last_name: string;
  public_key: PublicKey;
  birthdhay: Birthday;
}

export type PublicKey = string;
export type Manufacturer = string;
export type VaccineType = string;


export interface RequestPassportRequest {
  first_name: string;
  last_name: string;
  birthday: Birthday;
  public_key: PublicKey;
}

export interface SignPassportRequest {
  "type": VaccineType
  "lot_no": string
  "manufacturer": Manufacturer
  "dose_no": number
}
