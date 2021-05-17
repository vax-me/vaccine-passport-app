import RNSCrypto from 'react-native-simple-crypto';
import {Passport, SignedVaccinePassport} from '../passport/passport-model';
import {deserialize} from 'bson';

class Base64BSONEncodingService {
  decode(passport: SignedVaccinePassport): Passport {
    return <Passport>(
      deserialize(
        RNSCrypto.utils.convertBase64ToArrayBuffer(
          passport.encoded_data_base_64,
        ),
      )
    );
  }
}

export default new Base64BSONEncodingService();
