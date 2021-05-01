import { RSA } from "react-native-simple-crypto";


class EncryptionService {

  async generateKey() {
    return RSA.generateKeys(2048)
  }
}

export default new EncryptionService()
