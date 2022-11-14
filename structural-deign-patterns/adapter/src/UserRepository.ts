import { faker } from "@faker-js/faker";

export class UserRepository {

  public getUserInJsonFormat() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    };
  }
}