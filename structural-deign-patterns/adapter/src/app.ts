import { JsonToXmlAdapter } from "./JsonToXmlAdapter";
import { UserRepository } from "./UserRepository";

const userRepository = new UserRepository();

const jsonToXmlAdapter = new JsonToXmlAdapter(userRepository);

console.log(jsonToXmlAdapter.getUserInXmlFormat());