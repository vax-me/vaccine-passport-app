import RNSCrypto from "react-native-simple-crypto";


class EncryptionService {

  async generateKey() {
    return RNSCrypto.RSA.generateKeys(2048)
  }
}

export default new EncryptionService()
