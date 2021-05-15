import axios from "axios";
import { BASE_URL, GET_PASSPORT, REQ_PASSPORT, RET_PASSPORT, SIGN_PASSPORT } from "./urls";
import { Passport, PassportID, RequestPassportRequest, SignPassportRequest } from "./passport-model";


export class PassportService {
  private static instance: PassportService | null = null;

  private constructor() {
  }

  static getInstance(): PassportService {
    if (PassportService.instance == null) {
      PassportService.instance = new PassportService();
    }
    return PassportService.instance
  }

  async requestPassport(request: RequestPassportRequest): Promise<Passport> {
    try {
      const response = await axios.post(BASE_URL + REQ_PASSPORT, request)
      return response.data;
    } catch (error) {
      console.error(error)
      throw error("Could not send passport to backend")
    }
  }

  async getPassport(id: PassportID): Promise<Passport> {
    try {
      const response = await axios.get(`${BASE_URL + GET_PASSPORT}/${id}`)
      return response.data;
    } catch (error) {
      console.error(error)
      throw new Error("Refreshing Passport request failed")
    }
  }

  async retrievePassport(id: PassportID): Promise<Passport> {
    try {
      const response = await axios.get(`${BASE_URL + RET_PASSPORT}/${id}`)
      return response.data;
    } catch (error) {
      console.error(error)
      throw new Error("Refreshing Passport request failed")
    }
  }

  async signPassport(id: PassportID, request: SignPassportRequest) {
    try {
      const response = await axios.post(BASE_URL + SIGN_PASSPORT + '/' + id, request)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

}
