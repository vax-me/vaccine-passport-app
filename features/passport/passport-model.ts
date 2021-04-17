

export type PassportID = string;

export interface Passport {
  id: PassportID;
}

export type PublicKey = string;
export type Manufacturer = string;
export type VaccineType = string;


export interface RequestPassportRequest {
  first_name: string;
  last_name: string;
  public_key: PublicKey;
}

export interface SignPassportRequest {
  "type": VaccineType
  "lot_no": string
  "manufacturer": Manufacturer
  "dose_no": number
}
