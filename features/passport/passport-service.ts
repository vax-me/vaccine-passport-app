import axios from 'axios';
import {BASE_URL, INVALID_PASSPORT, REQ_PASSPORT, RET_PASSPORT} from './urls';
import {
  EncryptedPassport,
  InvalidPassport,
  Passport,
  PassportID,
  RequestPassportRequest,
} from './passport-model';
import {LoggingService} from './logging-service';

export class PassportService {
  private static instance: PassportService | null = null;

  private constructor() {}

  static getInstance(): PassportService {
    if (PassportService.instance == null) {
      PassportService.instance = new PassportService();
    }
    return PassportService.instance;
  }

  async requestPassport(request: RequestPassportRequest): Promise<Passport> {
    try {
      const response = await axios.post(BASE_URL + REQ_PASSPORT, request);
      return response.data;
    } catch (error) {
      throw new Error(this.handleError(error));
    }
  }

  async retrievePassport(id: PassportID): Promise<EncryptedPassport> {
    try {
      const response = await axios.get(`${BASE_URL + RET_PASSPORT}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(this.handleError(error));
    }
  }

  async invalidPassports(): Promise<InvalidPassport[]> {
    try {
      const response = await axios.get(BASE_URL + INVALID_PASSPORT);
      return response.data;
    } catch (error) {
      throw new Error(this.handleError(error));
    }
  }

  handleError(error: any): string {
    if (__DEV__) {
      console.error(error);
    }
    LoggingService.info(error);
    if (error.response) {
      const response = error.response;
      if (response.data) {
        const data = response.data;
        const isApiError = 'status' in data && 'message' in data;
        if (isApiError) {
          return `Error: ${response.data.message} (${response.data.status})`;
        }
        return `There server ran into unknown trouble (${response.status}). Please try again later`;
      }
    } else if (error.request) {
      return 'Could not send request';
    }
    return 'A completely unexpected an unknown error occurred.';
  }
}
