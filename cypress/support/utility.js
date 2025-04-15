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
    PhoneNumber: faker.phone.number(), 
    SSN: faker.string.numeric(9),
    //username: faker.internet.username(),
    Username: username,
    Password: 'Passw0rd'
  };
}


export function automationExerciseData() {
  const firstName = faker.string.alpha(5);
  const lastName = faker.string.alpha(5);  
  const Name = firstName + " " + lastName; 
  const countries = ["India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore"];
  const country = faker.helpers.arrayElement(countries);
  const dob = faker.date.birthdate({ min: 18, max: 50, mode: 'age' });
  const day = dob.getDate().toString();
  const month = dob.toLocaleString('default', {month: 'long'});
  const year = dob.getFullYear().toString()
  

  return {
    Name: Name,
    FirstName: faker.person.firstName(),
    LastName: faker.person.lastName(),
    EmailAddress: faker.internet.email(),
    Password: 'Passw0rd',
    Company: faker.company.name(),
    Address: faker.location.streetAddress(),
    State: faker.location.state(),
    City: faker.location.city(),
    Country: country,
    ZipCode: faker.location.zipCode(),
    MobileNumber: faker.phone.number(),
    day: day,
    month: month,
    year: year
  };
}