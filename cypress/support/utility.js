import { faker } from '@faker-js/faker';

export function generateCustomerData() {

  const randomNumber = faker.string.numeric(2);
  const usernameBase = faker.internet.username();
  const username = `${usernameBase}${randomNumber}`;
  //const username = usernameBase + randomNumber;
  return {
    FirstName: faker.person.firstName(),
    LastName: faker.person.lastName(),
    Address: faker.location.streetAddress(),
    City: faker.location.city(),
    State: faker.location.state(),
    ZipCode: faker.location.zipCode(),
    PhoneNumber: faker.phone.number(), // pwedeng custom test data yung phone number
    SSN: faker.string.numeric(9),
    //username: faker.internet.username(),
    Username: username,
    Password: 'Passw0rd'
  };
}