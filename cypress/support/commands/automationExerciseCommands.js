// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




//Clear all cookies, local storage and session storage
Cypress.Commands.add('clearBefore', () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
  cy.window().then((win) => {
    win.localStorage.clear();
    win.sessionStorage.clear();
  })
});



//Screengrab command
Cypress.Commands.add("captureSnapshot", (prefix) => {
  const date = new Date();
  const formattedDate =
    `${String(date.getMonth() + 1).
      padStart(2, '0')}-${String(date.getDate()).
        padStart(2, '0')}-${String(date.getFullYear()).
          slice(-2)}`;
  const fileName = `${prefix}-${formattedDate}`;
  cy.screenshot(fileName);
  // cy.screenshot(fileName, { capture: 'fullPage' });
});



//screenshot while page is scrolling
Cypress.Commands.add('scrollAndScreenshot', (prefix = 'scroll-screenshot', stepDelay = 500) => {
  cy.document().then((doc) => {
    const viewportHeight = Cypress.config('viewportHeight');
    const date = new Date();
    const formattedDate =
      `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${String(date.getFullYear()).slice(-2)}`;
    const fileName = `${prefix}-${formattedDate}`;

    // Scroll down one viewport height
    cy.scrollTo(0, viewportHeight);
    cy.wait(stepDelay);
    cy.screenshot(fileName);
  });
});


//Product Names and Images
Cypress.Commands.add('productNamesImages', (testData) => {
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


//Product Listing    
Cypress.Commands.add('productListing', () => {
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


//Add to Cart
Cypress.Commands.add('addToCart', () => {
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


//Review product
Cypress.Commands.add('reviewProduct', () => {
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



//Register/Login to Proceed Checkout
Cypress.Commands.add('registerLoginToProceedCheckout', () => {
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


//Signup
Cypress.Commands.add('signUp', (testData) => {
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


//Fill Registration Form
Cypress.Commands.add('fillRegistrationForm', (testData) => {
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


//Successful Registration
Cypress.Commands.add('successfulRegistration', (testData) => {
  cy.url().should('eq', 'https://www.automationexercise.com/account_created');
    cy.contains('Account Created!').should('be.visible').and('have.text', "Account Created!");
    cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('have.text', "Congratulations! Your new account has been successfully created!");
    cy.get('.col-sm-9 > :nth-child(3)').should('be.visible').and('have.text', "You can now take advantage of member privileges to enhance your online shopping experience with us.")
    cy.captureSnapshot("Successful registration of user account");
    cy.get('[data-qa="continue-button"]').should('be.visible').and('not.have.class', 'disabled').click();
    });

//Delivery Address Detail
Cypress.Commands.add('deliveryAddress', (testData) => {
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


//Checkout after Registration
Cypress.Commands.add('checkoutAfterRegistration', () => {
  cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').and('contain.text', "Cart").click();
    cy.scrollTo('right');
    cy.get('.col-sm-6 > .btn', { timeout: 20000, log: true })
      .and("have.text", "Proceed To Checkout")
      .and("not.be.disabled")
      .click();
  cy.url().should('eq', "https://www.automationexercise.com/checkout");
  cy.captureSnapshot("Verified successfully check-out after registration");
});



Cypress.Commands.add('saveCart', () => {
  cy.window().then((win) => {
    const cart = win.localStorage.getItem('cart-contents') || '[]';
    Cypress.env('savedCart', cart);
  });
});


Cypress.Commands.add('restoreCart', () => {
  const cart = Cypress.env('savedCart') || '[]';
  cy.window().then((win) => {
    win.localStorage.setItem('cart-contents', cart);
  });
});


Cypress.Commands.add('assertDropdownValues', (selector, expectedOptions) => {
  cy.get(selector).find('option').then($options => {
    const actual = [...$options].map(o => o.text.trim());
    expect(actual).to.deep.equal(expectedOptions);
  });
});
