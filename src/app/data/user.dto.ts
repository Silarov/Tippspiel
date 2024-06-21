import {Language} from "./language.type";

export class UserInfo {
  guid!: string;
  name?: string;
  email?: string;
  password?: string;
  language?: Language;

  constructor(guid: string, name?: string, email?: string, password?: string, language?: Language) {
    this.guid = guid;
    this.name = name;
    this.email = email;
    this.password = password;
    this.language = language;
  }
}
