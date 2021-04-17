import axios from "axios";
import { BASE_URL, GET_PASSPORT, REQ_PASSPORT, RET_PASSPORT, SIGN_PASSPORT } from "./urls";
import { Passport, PassportID, RequestPassportRequest, SignPassportRequest } from "./passport-model";


class PassportService {
  private instance: PassportService | null;

  private constructor() {
    this.instance = null;
  }

  getInstance(): PassportService {
    if (this.instance == null) {
      this.instance = new PassportService();
    }
    return this.instance
  }

  async requestPassport(request: RequestPassportRequest) {
    try {
      const response = await axios.post(BASE_URL + REQ_PASSPORT, request)
      console.log(response)
    } catch (error) {
      console.error(error)
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
