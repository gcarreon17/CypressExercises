///<reference types="cypress" />

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils'

describe("AddToCart-Register-Delete User", { testIsolation: false }, () => {

  let testData;

  before(() => {
    testData = automationExerciseTestData();
    // Cypress.env('title', testData.rawTitletitle);
    // Cypress.env('signUpName', testData.signUpName);
    cy.clearBefore();
    cy.visit("https://www.automationexercise.com/");
    cy.url().should("eq", "https://www.automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.captureSnapshot("Redirection to Automation Exercise");
  });

  it("Verify Product Listing", () => {
    cy.get(".features_items").should("be.visible")
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.automationexercise.com/products");
    cy.get(".title")
      .should("be.visible")
      .invoke("text")
      .should("eq", "All Products");
    cy.captureSnapshot("Product Listing");
  });


  it("Verify product names and images", () => {
    cy.get('.features_items .product-image-wrapper').should('have.length', testData.productNames.length)
      .each(($wrapper, index) => {
        cy.wrap($wrapper)
          .find('.productinfo > p')
          .should('be.visible')
          .invoke('text')
          .should('eq', testData.productNames[index]);

        cy.wrap($wrapper)
          .find('.productinfo > img')
          .should('be.visible')
          .and(($img) => {
            const src = $img.attr('src');
            expect(src, `Image src should not be empty for product ${testData.productNames[index]}`).to.be.a('string').and.not.be.empty;
          });
      });
  });


  it("Verify successful add to cart", () => {
    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0)
      .then(($products) => {
        const randomIndex = Math.floor(Math.random() * $products.length);
        const $selected = $products[randomIndex];

        // Get the product name and store it
        const selectedName = Cypress.$($selected).find('.productinfo > p').text();
        Cypress.env('selectedProductName', selectedName);

        // Navigate to product detail page and add to cart
        cy.wrap($selected).within(() => {
          cy.get('a[href*="/product_details/"]').invoke('removeAttr', 'target').click();
        });
        cy.get('.product-information').should('be.visible');
        cy.contains('Add to cart').click();
        cy.captureSnapshot("Successful adding to cart");
        cy.get('.modal-content').should('be.visible');
        cy.get('.modal-title').should('be.visible').and('have.text', 'Added!');
        cy.get('.modal-body').should('contain.text', 'Your product has been added to cart.');
        cy.contains('View Cart').should('be.visible').and('have.attr', 'href').and('include', 'view_cart');
        cy.get('#cartModal').should('be.visible').contains('Continue Shopping').click();
        cy.captureSnapshot("Successful Add to Cart");
      });
  });


  it("Verify successful review of a product", () => {
    cy.get(".active > a")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Write Your Review");
    cy.get("#name")
      .should("be.visible")
      .and("have.attr", "placeholder", "Your Name")
      .type("Test");
    cy.get("#email")
      .should("be.visible")
      .and("have.attr", "placeholder", "Email Address")
      .type("test@test.com");
    cy.get("#review")
      .should("be.visible")
      .and("have.attr", "placeholder", "Add Review Here!")
      .type("Testing");
    cy.contains('Submit').should('be.visible').click();
    cy.contains('Thank you for your review.').should('be.visible');
    cy.captureSnapshot("Successful Product Review");
  });


  it("Verify product exists in cart", () => {
    const expectedProduct = Cypress.env('selectedProductName');
    // Navigate to Cart
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.url().should('include', '/view_cart');
    // Assert product is listed in cart
    cy.get('h4 > a')
      .should('be.visible')
      .invoke('text')
      .should('eq', expectedProduct);
    cy.captureSnapshot("Verified added product is in cart");
  });


  it("Verify Register / Login account to proceed on checkout", () => {
    cy.scrollTo('right');
    cy.get('.col-sm-6 > .btn', { timeout: 20000, log: true })
      .and("have.text", "Proceed To Checkout")
      .and("not.be.disabled")
      .click();
    cy.url().should("eq", "https://www.automationexercise.com/view_cart");
    cy.get(".modal-title")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Checkout");
    cy.get(".modal-body > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Register / Login account to proceed on checkout.");
    cy.captureSnapshot("Verified successful register_login account to proceed on checkout");
    cy.get('.modal-body > :nth-child(2) > a > u').should('be.visible').and('have.text', "Register / Login").click();
  });


  it("Verify assertion and Fill up Sign Up Page", () => {
    cy.url().should("eq", "https://www.automationexercise.com/login");
    cy.contains("Signup / Login").click();
    cy.get(".signup-form > h2").should("be.visible");
    cy.get('[data-qa="signup-name"]').should("have.value", "");
    cy.get('[data-qa="signup-email"]').should("have.value", "");
    cy.get('[data-qa="signup-button"]').should("be.visible").and("be.enabled");
    cy.captureSnapshot("Sign Up Page is displayed");
    cy.get('[data-qa="signup-name"]').type(testData.signUpName);
    cy.get('[data-qa="signup-email"]').type(testData.signUpEmailAddress);
    cy.captureSnapshot("Filled up Sign Up Page");
    cy.get('[data-qa="signup-button"]').click();
    cy.captureSnapshot("Registration Page is displayed");
  });


  it("Verify assertion and Fill up Registration Page", () => {
    const rawTitle = testData.rawTitle;
    cy.contains("Enter Account Information").should("be.visible");
    cy.contains('Title').should('be.visible');
    //Title
    cy.contains('Mr.').should('be.visible').and('not.be.checked');
    cy.contains('Mrs.').should('be.visible').and('not.be.checked');
    cy.get('.clearfix')
      .find(`input[type="radio"][value="${rawTitle}"]`)
      .check()
      .should('be.checked');
    //Name
    cy.get('form > :nth-child(3) > label').invoke('text').should('eq', "Name *");
    cy.get('[data-qa="name"]').invoke('val')
      .then((enteredName) => {
        cy.log("Name is: " + enteredName);
        expect(enteredName).to.equal(testData.signUpName);
      });
    //Email       
    cy.get('form > :nth-child(4) > label').invoke('text').should('eq', "Email *");
    cy.get('[data-qa="email"]').invoke('val')
      .then((enteredEmail) => {
        cy.log('Email is:' + enteredEmail)
        expect(enteredEmail).to.equal(testData.signUpEmailAddress);
      });
    //Password
    cy.get(':nth-child(5) > label').invoke('text').should('eq', "Password *");
    cy.get('[data-qa="password"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.password);
    //Date of Birth
    cy.get(':nth-child(6) > label').invoke('text').should('eq', "Date of Birth");

    //DOB-Date
    cy.get('[data-qa="days"]').should('be.visible').invoke('text')
      .then((text) => {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        expect(cleanText).to.contain('Day');
        cy.get('[data-qa="days"]').select(testData.day);
      });
    //DOB-Month
    cy.get('[data-qa="months"]').should('be.visible').invoke('text')
      .then((text) => {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        expect(cleanText).to.contain('Month');
        cy.get('[data-qa="months"]').select(testData.month);
      });
    //DOB-Year
    cy.get('[data-qa="years"]').should('be.visible').invoke('text')
      .then((text) => {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        expect(cleanText).to.contain('Year');
        cy.get('[data-qa="years"]').select(testData.year);
      });
    //Newsletter and Special offer
    cy.get(':nth-child(7) > label').invoke('text').should('eq', "Sign up for our newsletter!");
    cy.get(':nth-child(8) > label').invoke('text').should('eq', "Receive special offers from our partners!");
    cy.get('#newsletter').should('be.visible').debug().and('not.be.checked').and('be.enabled').check().should('be.checked');
    cy.get('#optin').should('be.visible').debug().and('not.be.checked').and('be.enabled').check().should('be.checked');
    cy.get('form > .title > b').invoke('text').should('eq', "Address Information");
    //First Name
    cy.get(':nth-child(11) > label').invoke('text').should('eq', "First name *");
    cy.get('[data-qa="first_name"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.firstName).should('have.value', testData.firstName);
    //Last Name
    cy.get(':nth-child(12) > label').invoke('text').should('eq', "Last name *");
    cy.get('[data-qa="last_name"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.lastName).should('have.value', testData.lastName);
    //Company
    cy.get(':nth-child(13) > label').invoke('text').should('eq', "Company");
    cy.get('[data-qa="company"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="company"]').type(testData.company);
    //Address
    cy.get('.inline-infos').invoke('text').should('eq', "(Street address, P.O. Box, Company name, etc.)");
    cy.get('[data-qa="address"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="address"]').type(testData.address);
    //Address2
    cy.get(':nth-child(15) > label').invoke('text').should('eq', "Address 2");
    cy.get('[data-qa="address2"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="address2"]').type(testData.address);
    //Country
    cy.contains('label', 'Country *');
    cy.get('[data-qa="country"]').should('be.visible').and('be.enabled').select(testData.country);
    //State
    cy.contains('label', 'State *');
    cy.get('[data-qa="state"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="state"]').type(testData.state);
    //City
    cy.contains('label', 'City *');
    cy.get('[data-qa="city"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="city"]').type(testData.city);
    //Zip Code
    cy.contains('label', 'Zipcode *');
    cy.get('[data-qa="zipcode"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="zipcode"]').type(testData.zipCode);
    //Mobile Number
    cy.contains('label', 'Mobile Number *');
    cy.get('[data-qa="mobile_number"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="mobile_number"]').type(testData.mobileNumber);
    //Create Account button
    cy.get('[data-qa="create-account"]').should('have.text', "Create Account").and('be.enabled');
    cy.captureSnapshot("Verified Registration Page is displayed");
    cy.get('[data-qa="create-account"]').click();
    });


  it("Verify successful registration of user account", () => {
    cy.url().should('eq', 'https://www.automationexercise.com/account_created');
    cy.contains('Account Created!').should('be.visible').and('have.text', "Account Created!");
    cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('have.text', "Congratulations! Your new account has been successfully created!");
    cy.get('.col-sm-9 > :nth-child(3)').should('be.visible').and('have.text', "You can now take advantage of member privileges to enhance your online shopping experience with us.")
    cy.captureSnapshot("Successful registration of user account");
    cy.get('[data-qa="continue-button"]').should('be.visible').and('not.have.class', 'disabled').click();
    });


  it("Verify Login as Name is correct", () => {
    cy.get(":nth-child(10) > a").should("be.visible").and("contain", `Logged in as ${testData.signUpName}`);
    cy.captureSnapshot("Verified Login as Name is correct");
    });


  it("Verify Register / Login account to proceed on checkout", () => {
    cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').and('contain.text', "Cart").click();
    cy.scrollTo('right');
    cy.get('.col-sm-6 > .btn', { timeout: 20000, log: true })
      .and("have.text", "Proceed To Checkout")
      .and("not.be.disabled")
      .click();
    cy.url().should('eq', "https://www.automationexercise.com/checkout");
    cy.captureSnapshot("Verified successfully proceeded to Checkout after registration");
    });


  it("Verify Checkout screen - Delivery Address Details section", () => {
    const expectedFullName = `${testData.titleWithPeriod} ${testData.signUpName}`;
    const expectedDeliveryCity = `${testData.city}${testData.state}${testData.zipCode}`;
    //Address Details
    cy.get(":nth-child(2) > .heading")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Address Details");
    //Your delivery address
    cy.get("#address_delivery > .address_title > .page-subheading").should("be.visible").invoke("text").should("eq", "Your delivery address");
    //Title and Full Name
    cy.get('#address_delivery > .address_firstname').should('be.visible').invoke('text').should('eq', expectedFullName);
    //Company
    cy.get('#address_delivery > :nth-child(3)').invoke('text').should('eq', testData.company);
    //Address1
    cy.get('#address_delivery > :nth-child(4)').invoke('text').should('eq', testData.address);
    //Address2
    cy.get('#address_delivery > :nth-child(5)').invoke('text').should('eq', testData.address);
    //City
    cy.get('#address_delivery > .address_city')
      .invoke('text')
      .then((text) => {
      expect(text.replace(/\s/g, '')).to.equal(expectedDeliveryCity.replace(/\s/g, ''));
      });
    //County
    cy.get('#address_delivery > .address_country_name').invoke('text').should('eq', testData.country);
    //Mobile
    cy.get('#address_delivery > .address_phone').invoke('text').should('eq', testData.mobileNumber);
    cy.captureSnapshot("Verified Delivery Address Details are correct");
    });


    it("Verify Checkout screen - Billing Address Details section", () => {
    const expectedFullName = `${testData.titleWithPeriod} ${testData.signUpName}`;
    const expectedDeliveryCity = `${testData.city}${testData.state}${testData.zipCode}`;
    //Your delivery address
    cy.get('#address_invoice > .address_title > .page-subheading').should("be.visible").invoke("text").should("eq", "Your billing address");
    //Title and Full Name
    cy.get('#address_invoice > .address_firstname').should('be.visible').invoke('text').should('eq', expectedFullName);
    //Company
    cy.get('#address_invoice > :nth-child(3)').invoke('text').should('eq', testData.company);
    //Address1
    cy.get('#address_invoice > :nth-child(4)').invoke('text').should('eq', testData.address);
    //Address2
    cy.get('#address_invoice > :nth-child(5)').invoke('text').should('eq', testData.address);
    //City
    cy.get('#address_invoice > .address_city')
      .invoke('text')
      .then((text) => {
      expect(text.replace(/\s/g, '')).to.equal(expectedDeliveryCity.replace(/\s/g, ''));
      });
    //County
    cy.get('#address_invoice > .address_country_name').invoke('text').should('eq', testData.country);
    //Mobile
    cy.get('#address_invoice > .address_phone').invoke('text').should('eq', testData.mobileNumber);
    cy.captureSnapshot("Verified Billing Address Details are correct");
    });


  it("Verify comments section", () => {
    cy.get("label").should("be.visible")
      .invoke("text")
      .then((label) => {
          expect(label.trim()).to.eq("If you would like to add a comment about your order, please write it in the field below.");
    })
    cy.get(".form-control").should("be.visible").type("The big brown fox jumps over a lazy dog.").should("have.value","The big brown fox jumps over a lazy dog.");
    cy.contains("Place Order").should("be.visible").click();
    cy.captureSnapshot("Verified comments section");
  });


  it("Verify payment screen", () => {
    cy.url().should("eq","https://www.automationexercise.com/payment");
    cy.get(".heading").should("be.visible").invoke("text").should("eq", "Payment");
    cy.get(":nth-child(2) > .col-sm-12 > .control-label").should("be.visible")
      .invoke("text")
      .should("eq", "Name on Card")
    cy.get('[data-qa="name-on-card"]').should("be.visible").and("have.value", "").type(testData.signUpName);
    cy.get(":nth-child(3) > .col-sm-12 > .control-label").should("be.visible")
      .invoke("text")
      .should("eq", "Card Number");
      const getRandom10DigitNumber = () => {
         return Math.floor(1000000000 + Math.random() * 9000000000);
        };
    cy.get('[data-qa="card-number"]').should("be.visible").and("have.value", "").type(getRandom10DigitNumber().toString());
    cy.get(".cvc > .control-label").should("be.visible").invoke("text").should("eq", "CVC");
        const getRandom3DigitNumber = () => {
          return Math.floor(100 + Math.random() * 900);
          };
    cy.get('[data-qa="cvc"]').should("be.visible").and("have.value", "").and("have.attr", "placeholder","ex. 311")
        .type(getRandom3DigitNumber().toString());
    cy.get(":nth-child(2) > .control-label").should("be.visible")
        .invoke("text")
        .should("eq", "Expiration");
    cy.get('[data-qa="expiry-month"]').should("be.visible").and("have.value", "").and("have.attr", "placeholder","MM").type("01");
    cy.get('[data-qa="expiry-year"]').should("be.visible").and("have.value", "").and("have.attr", "placeholder","YYYY").type("2027");
    cy.contains("Pay and Confirm Order").should("be.visible").and("be.enabled").invoke('text').should("eq","Pay and Confirm Order");
    cy.captureSnapshot("Verified Payment details displayed are correct");
    cy.contains("Pay and Confirm Order").click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal("Your order has been placed successfully");
      });
    cy.captureSnapshot("Verified successful checkout");
    cy.get('[data-qa="order-placed"] > b').should('be.visible').invoke('text').should('eq', "Order Placed!");
    cy.get(".col-sm-9 > p").should("be.visible").invoke("text").should("eq", "Congratulations! Your order has been confirmed!")
    cy.captureSnapshot("Congratulations! Your order has been confirmed!");
});


  it("Verify Successful Download of invoice", () =>{
    cy.get(".col-sm-9 > .btn-default").should("be.visible").invoke("text").should("eq", "Download Invoice")
    cy.get(".col-sm-9 > .btn-default").click();
    cy.readFile("cypress/downloads/invoice.txt").should("exist");
    cy.captureSnapshot("Verified successful download of invoice");
  });
});