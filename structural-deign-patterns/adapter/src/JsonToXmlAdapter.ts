import xml2js from "xml2js";
import { IUserService } from "./IUserService";
import { UserRepository } from "./UserRepository";

export class JsonToXmlAdapter implements IUserService {

  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  getUserInXmlFormat(): string {
    const userDataAsJson = this.userRepository.getUserInJsonFormat();
    return new xml2js.Builder()
      .buildObject(userDataAsJson);
  }
  
}