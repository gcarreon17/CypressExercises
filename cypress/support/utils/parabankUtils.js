import { faker } from '@faker-js/faker';

//Parabank Registration Data
export function parabankRegTestData() {
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
    PhoneNumber: faker.phone.number(), 
    SSN: faker.string.numeric(9),
    //username: faker.internet.username(),
    Username: username,
    Password: 'Passw0rd'
  };
};