import * as crypto from 'crypto';

export default class Auth {

  hashPassword(text: string): string {
    const cipher = crypto.createCipher('aes192', 'a pass');
    let encrypted = cipher.update(text, 'utf8', 'hex');

    encrypted += cipher.final('hex');

    return encrypted;
  }
}
