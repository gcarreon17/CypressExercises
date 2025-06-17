import { faker } from '@faker-js/faker';


export function automationExerciseTestData() {
  // const firstName = faker.person.firstName();
  // const lastName = faker.person.lastName();
  // const signUpName = `${firstName} ${lastName}`;
  // const emailAddress = `${firstName}.${lastName}@test.com`.toLowerCase();
  //const emailAddress = faker.internet.email(firstName, lastName);
  const signUpName = faker.person.firstName() + ' ' + faker.person.lastName();
  const [firstName, lastName] = signUpName.split(' ');
  const signUpEmailAddress = `${signUpName.replace(/\s+/g, '.').toLowerCase()}@test.com`;
  const rawTitle = faker.helpers.arrayElement(['Mr', 'Mrs']);
  const company = `${faker.company.name()} Inc.`;
  const address = faker.location.streetAddress();
  const state = faker.location.state();
  const city = faker.location.city();
  const zipCode = faker.location.zipCode();
  const mobileNumber = faker.phone.number();
  const country = faker.helpers.arrayElement(["India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore"]);
  const dob = faker.date.birthdate({ min: 18, max: 50, mode: 'age' });
  const day = dob.getDate().toString();//.padStart(2, '0');
  const month = dob.toLocaleString('default', { month: 'long' });
  const year = dob.getFullYear().toString();
  const productNames = [
      "Blue Top", "Men Tshirt", "Sleeveless Dress", "Stylish Dress",
      "Winter Top", "Summer White Top", "Madame Top For Women",
      "Fancy Green Top", "Sleeves Printed Top - White",
      "Half Sleeves Top Schiffli Detailing - Pink",
      "Frozen Tops For Kids", "Full Sleeves Top Cherry - Pink",
      "Printed Off Shoulder Top - White", "Sleeves Top and Short - Blue & Pink",
      "Little Girls Mr. Panda Shirt", "Sleeveless Unicorn Patch Gown - Pink",
      "Cotton Mull Embroidered Dress", "Blue Cotton Indie Mickey Dress",
      "Long Maxi Tulle Fancy Dress Up Outfits -Pink",
      "Sleeveless Unicorn Print Fit & Flare Net Dress - Multi",
      "Colour Blocked Shirt – Sky Blue", "Pure Cotton V-Neck T-Shirt",
      "Green Side Placket Detail T-Shirt", "Premium Polo T-Shirts",
      "Pure Cotton Neon Green Tshirt", "Soft Stretch Jeans",
      "Regular Fit Straight Jeans", "Grunt Blue Slim Fit Jeans",
      "Rose Pink Embroidered Maxi Dress", "Cotton Silk Hand Block Print Saree",
      "Rust Red Linen Saree", "Beautiful Peacock Blue Cotton Linen Saree",
      "Lace Top For Women", "GRAPHIC DESIGN MEN T SHIRT - BLUE"
    ];



  return {
    signUpName,
    signUpEmailAddress,
    firstName,
    lastName,
    rawTitle,
    titleWithPeriod: `${rawTitle}.`,
    password: 'Passw0rd',
    company,
    address,
    state,
    city,
    zipCode,
    mobileNumber,
    country,
    day,
    month,
    year,
    productNames
  };
};