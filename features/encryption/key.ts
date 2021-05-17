import RNSCrypto from 'react-native-simple-crypto';
import {
  EncryptedPassport,
  SignedVaccinePassport,
} from '../passport/passport-model';

class EncryptionService {
  async generateKey(): Promise<RNSCrypto.KeyPair> {
    return RNSCrypto.RSA.generateKeys(2048);
  }

  async decrypt(
    encryptedPassport: EncryptedPassport,
    rsaKey: string,
  ): Promise<SignedVaccinePassport> {
    return RNSCrypto.RSA.decrypt(
      RNSCrypto.utils.convertArrayBufferToUtf8(
        RNSCrypto.utils.convertBase64ToArrayBuffer(
          encryptedPassport.base_64_encrypted_aes_key,
        ),
      ),
      rsaKey,
    )
      .then(aesKey =>
        RNSCrypto.AES.decrypt(
          RNSCrypto.utils.convertBase64ToArrayBuffer(
            encryptedPassport.base_64_data,
          ),
          RNSCrypto.utils.convertUtf8ToArrayBuffer(aesKey),
          RNSCrypto.utils.convertBase64ToArrayBuffer(
            encryptedPassport.base_64_nonce,
          ),
        ),
      )
      .catch(e => {
        throw e;
      })
      .then(
        raw =>
          <SignedVaccinePassport>(
            JSON.parse(RNSCrypto.utils.convertArrayBufferToUtf8(raw))
          ),
      )
      .catch(e => {
        throw e;
      });
  }
}

export default new EncryptionService();
