///<reference types = "cypress"/>
import {automationExerciseData} from '../../support/utility';
describe("RegisterLoginDeleteUser", {testIsolation: false}, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit("https://www.automationexercise.com/");
    cy.url().should("eq", "https://www.automationexercise.com/");   
    cy.title().should("eq", "Automation Exercise");  
    cy.takeScreenshot('Redirection to Automation Exercise');
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

      //Verify correct number of products displayed
      cy.get("body > section:nth-child(3) > div:nth-child(1)")
        .should("be.visible")
        .find("img")
        .should("have.length", 34);

      //Verify image1
      cy.get(":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p")
        .should("be.visible")
        .invoke("text")
        .should("eq", "Blue Top");

    //Verify image2
    cy.get(
      ":nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Men Tshirt");

    //Verify image3
    cy.get(
      ":nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Sleeveless Dress");

    //Verify image4
    cy.get(
      ":nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Stylish Dress");

    //Verify image5
    cy.get(
      ":nth-child(7) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Winter Top");

    //Verify image6
    cy.get(
      ":nth-child(8) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Summer White Top");

    //Verify image7
    cy.get(
      ":nth-child(9) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Madame Top For Women");

    //Verify image8
    cy.get(
      ":nth-child(10) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Fancy Green Top");

    //Verify image9
    cy.get(
      ":nth-child(11) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Sleeves Printed Top - White");

    //Verify image10
    cy.get(
      ":nth-child(12) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Half Sleeves Top Schiffli Detailing - Pink");

    //Verify image11
    cy.get(
      ":nth-child(13) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Frozen Tops For Kids");

    //Verify image12
    cy.get(
      ":nth-child(14) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Full Sleeves Top Cherry - Pink");

    //Verify image13
    cy.get(
      ":nth-child(15) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Printed Off Shoulder Top - White");

    //Verify image14
    cy.get(
      ":nth-child(16) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Sleeves Top and Short - Blue & Pink");

    //Verify image15
    cy.get(
      ":nth-child(17) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Little Girls Mr. Panda Shirt");

    //Verify image16
    cy.get(
      ":nth-child(18) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Sleeveless Unicorn Patch Gown - Pink");

    //Verify image17
    cy.get(
      ":nth-child(19) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Cotton Mull Embroidered Dress");

    //Verify image18
    cy.get(
      ":nth-child(20) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Blue Cotton Indie Mickey Dress");

    //Verify image19
    cy.get(
      ":nth-child(21) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Long Maxi Tulle Fancy Dress Up Outfits -Pink");

    //Verify image20
    cy.get(
      ":nth-child(22) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Sleeveless Unicorn Print Fit & Flare Net Dress - Multi");

    //Verify image21
    cy.get(
      ":nth-child(23) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Colour Blocked Shirt – Sky Blue");

    //Verify image22
    cy.get(
      ":nth-child(24) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Pure Cotton V-Neck T-Shirt");

    //Verify image23
    cy.get(
      ":nth-child(25) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Green Side Placket Detail T-Shirt");

    //Verify image24
    cy.get(
      ":nth-child(26) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Premium Polo T-Shirts");

    //Verify image25
    cy.get(
      ":nth-child(27) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Pure Cotton Neon Green Tshirt");

    //Verify image26
    cy.get(
      ":nth-child(28) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Soft Stretch Jeans");

    //Verify image27
    cy.get(
      ":nth-child(29) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Regular Fit Straight Jeans");

    //Verify image28
    cy.get(
      ":nth-child(30) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Grunt Blue Slim Fit Jeans");

    //Verify image29
    cy.get(
      ":nth-child(31) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Rose Pink Embroidered Maxi Dress");

    //Verify image30
    cy.get(
      ":nth-child(32) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Cotton Silk Hand Block Print Saree");

    //Verify image31
    cy.get(
      ":nth-child(33) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Rust Red Linen Saree");

    //Verify image32
    cy.get(
      ":nth-child(34) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Beautiful Peacock Blue Cotton Linen Saree");

    //Verify image33
    cy.get(
      ":nth-child(35) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Lace Top For Women");

    //Verify image34
    cy.get(
      ":nth-child(36) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "GRAPHIC DESIGN MEN T SHIRT - BLUE");

    //View 1st item
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();

    //Verify correct product is displayed
    cy.url().should(
      "eq",
      "https://www.automationexercise.com/product_details/1"
    );
    cy.get(".product-information > h2")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Blue Top");

    cy.get(".product-information > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Availability: In Stock");
    cy.get(".product-information > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Condition: New");
    cy.get(".product-information > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Brand: Polo");
  });
});
    
    //Add to cart Item2
    let addCart = "Men Tshirt";
    cy.get(
      ":nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", addCart);
    cy.get(
      ":nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn"
    )
      .should("be.visible")
      .click();

    //Click anywhere on the screen to display again the Homepage
    cy.get("#cartModal").click();
    cy.title().should("eq", "Automation Exercise");

    //Click Cart link in the Home screen
    cy.get(".shop-menu > .nav > :nth-child(3) > a")
      .should("be.visible")
      .click();
    cy.url().should("eq", "https://www.automationexercise.com/view_cart");

    //Verify item added to cart
    cy.get("h4 > a").should("be.visible").invoke("text").should("eq", addCart);

    //Proceed to Checkout
    cy.get(".col-sm-6 > .btn")
      .should("be.visible")
      .and("have.text", "Proceed To Checkout")
      .and("not.be.disabled")
      .click();
    cy.url().should("eq", "https://www.automationexercise.com/view_cart");

    //Verify Checkout modal
    cy.get(".modal-title")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Checkout");

    cy.get(".modal-body > :nth-child(2) > a > u")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Register / Login");

    cy.get(".modal-body > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Register / Login account to proceed on checkout.");

    //Click Register
    cy.get(".modal-body > :nth-child(2) > a > u").click();

    //Verify if Homepage is displayed
    cy.url().should("eq", "https://www.automationexercise.com/login");

    //Click signup link
    cy.contains("Signup / Login").click();

    //Verify signup page is displayed
    cy.get(".signup-form > h2").should("be.visible");
    cy.get('[data-qa="signup-name"]').should("have.value", "");
    cy.get('[data-qa="signup-email"]').should("have.value", "");
    cy.get('[data-qa="signup-button"]').should("be.visible").and("be.enabled");

    cy.fixture("AutomationExerciseUser.json").then((Userdata) => {
      //"user" + faker.string.alpha(2) + "@test.com";
      var Name = Math.random().toString(36).substring(2, 9);
      var EmailAddress = Name + "@test.com";
      cy.get('[data-qa="signup-name"]').type(Name).should("have.value", Name);
      cy.get('[data-qa="signup-email"]')
        .type(EmailAddress)
        .should("have.value", EmailAddress);

      //Click signup button
      cy.get('[data-qa="signup-button"]').click();

      //Verify Account Information screen is visible
      cy.contains("Enter Account Information").should("be.visible");

      //Fill details: Title, Name, Email, Password, Date of birth
      cy.get("#id_gender1").should("be.visible");
      cy.get("#id_gender2").should("be.visible");
      cy.get("#id_gender1").should("not.be.checked");
      cy.get("#id_gender2").should("not.be.checked");

      cy.get("#id_gender1").check().should("be.checked");
      cy.get("#id_gender2").should("not.be.checked");
      cy.get("#id_gender2")
        .check()
        .should("be.checked")
        .invoke("val")
        .then((selectedGender) => {
          cy.log("Selected Gender:", selectedGender); //Result in console and log is "Mrs"
          console.log("Selected Gender:", JSON.stringify(selectedGender));
          cy.wrap(selectedGender).as("genderValue");
          cy.get("@genderValue").then((genderValue) => {
            expect(genderValue).to.eq("Mrs");
            cy.get("#id_gender1").should("not.be.checked");

            //check if matched with name and email entered in Signup screen
            cy.get('[data-qa="name"]').should("have.value", Name);
            cy.get('[data-qa="email"]').should("have.value", EmailAddress);
            cy.get('[data-qa="password"]')
              .should("have.value", "")
              .type("Password")
              .should("have.value", "Password");

            //Date of Birth
            cy.get('[data-qa="days"]')
              .should("be.visible")
              .invoke("text")
              .should("contains", "Day");
            cy.get('[data-qa="months"]')
              .should("be.visible")
              .invoke("text")
              .should("contains", "Month");
            cy.get('[data-qa="years"]')
              .should("be.visible")
              .invoke("text")
              .should("contains", "Year");

            //Select newsletter subscription
            cy.get("#newsletter").should("be.visible").check();
            //Receive special offers from our partners
            cy.get("#optin").should("be.visible").check();

            //Verify fields
            cy.get('[data-qa="first_name"]');
            cy.get('[data-qa="last_name"]');
            cy.get('[data-qa="company"]');
            cy.get('[data-qa="address"]')
              .should("be.visible")
              .and("have.text", "");
            cy.get('[data-qa="address2"]')
              .should("be.visible")
              .and("have.text", "");
            cy.get('[data-qa="country"]');
            cy.get('[data-qa="state"]');
            cy.get('[data-qa="city"]')
              .should("be.visible")
              .and("have.text", "");
            cy.get('[data-qa="zipcode"]')
              .should("be.visible")
              .and("have.text", "");
            cy.get('[data-qa="mobile_number"]')
              .should("be.visible")
              .and("have.text", "");

            //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
            cy.fixture("AutomationExerciseAddress.json").then((Addressdata) => {
              cy.get('[data-qa="first_name"]')
                .should("be.visible")
                .should("have.text", "")
                .type(Addressdata.FirstName)
                .should("have.value", Addressdata.FirstName);
              cy.get('[data-qa="last_name"]')
                .should("be.visible")
                .should("have.text", "")
                .type(Addressdata.LastName)
                .should("have.value", Addressdata.LastName);
              cy.get('[data-qa="company"]')
                .should("be.visible")
                .should("have.text", "")
                .type(Addressdata.Company)
                .should("have.value", Addressdata.Company);
              cy.get('[data-qa="address"]')
                .should("be.visible")
                .should("have.text", "")
                .type(Addressdata.Address)
                .should("have.value", Addressdata.Address);
              cy.get('[data-qa="address2"]')
                .should("be.visible")
                .should("have.text", "")
                .type(Addressdata.Address2)
                .should("have.value", Addressdata.Address2);
              cy.get('[data-qa="country"]')
                .should("be.visible")
                .invoke("text")
                .should("contains", "India");
              cy.get('[data-qa="country"]')
                .select("Canada")
                .invoke("val")
                .then((selectedCountry) => {
                  let country = selectedCountry;
                  expect(country).to.eq("Canada");
                  cy.get('[data-qa="state"]')
                    .should("be.visible")
                    .should("have.text", "")
                    .type(Addressdata.State)
                    .should("have.value", Addressdata.State);
                  cy.get('[data-qa="city"]')
                    .should("be.visible")
                    .should("have.text", "")
                    .type(Addressdata.City)
                    .should("have.value", Addressdata.City);
                  cy.get('[data-qa="zipcode"]')
                    .should("be.visible")
                    .should("have.text", "")
                    .type(Addressdata.Zipcode)
                    .should("have.value", Addressdata.Zipcode);
                  cy.get('[data-qa="mobile_number"]')
                    .should("be.visible")
                    .should("have.text", "")
                    .type(Addressdata.MobileNumber)
                    .should("have.value", Addressdata.MobileNumber);

                  //Click Create account button
                  cy.get('[data-qa="create-account"]').click();

                  //Verify Successful registration message
                  cy.contains("Account Created!").should(
                    "have.text",
                    "Account Created!"
                  );

                  //Click Continue button
                  cy.get('[data-qa="continue-button"]').click();
                  cy.url().should("eq", "https://www.automationexercise.com/");

                  //Verify Logged in as is correct
                  cy.get(":nth-child(10) > a")
                    .should("be.visible")
                    .and("contain", `Logged in as ${Name}`);

                  //Click Cart button again
                  cy.get(".shop-menu > .nav > :nth-child(3) > a")
                    .should("be.visible")
                    .click();

                  //Verify Add to Cart
                  cy.url().should(
                    "eq",
                    "https://www.automationexercise.com/view_cart"
                  );
                  cy.contains("Proceed To Checkout")
                    .should("be.visible")
                    .invoke("text")
                    .should("eq", "Proceed To Checkout");
                  cy.get(".col-sm-6 > .btn").should("be.visible").click();

                  //Verify Checkout screen - Address Details section
                  cy.url().should(
                    "eq",
                    "https://www.automationexercise.com/checkout"
                  );
                  cy.get(":nth-child(2) > .heading")
                    .should("be.visible")
                    .invoke("text")
                    .should("eq", "Address Details");
                  cy.get(
                    "#address_delivery > .address_title > .page-subheading"
                  )
                    .should("be.visible")
                    .invoke("text")
                    .should("eq", "Your delivery address");
                  cy.get("@genderValue").then((genderValue) => {
                    cy.get("#address_delivery > .address_firstname")
                      .should("be.visible")
                      .invoke("text")
                      .then((name) => {
                        const expectedName =
                          `Mrs. ${Addressdata.FirstName} ${Addressdata.LastName}`.trim();
                        const formattedName = name.replace(/\s+/g, " ").trim();
                        console.log(
                          "Actual UI Name:",
                          JSON.stringify(formattedName)
                        );
                        console.log(
                          "Expected Name:",
                          JSON.stringify(expectedName)
                        );
                        cy.log(formattedName);
                        cy.log(expectedName);
                        expect(formattedName).to.eq(expectedName);

                        cy.get("#address_delivery > :nth-child(3)")
                          .should("be.visible")
                          .invoke("text")
                          .should("eq", Addressdata.Company);
                        cy.get("#address_delivery > :nth-child(4)")
                          .should("be.visible")
                          .invoke("text")
                          .should("eq", Addressdata.Address);
                        cy.get("#address_delivery > :nth-child(5)")
                          .should("be.visible")
                          .invoke("text")
                          .should("eq", Addressdata.Address2);
                        cy.get("#address_delivery > .address_city")
                          .should("be.visible")
                          .invoke("text")
                          .then((text) => {
                            const formattedText = text
                              .replace(/\s+/g, " ")
                              .trim();
                            const expectedText =
                              `${Addressdata.City} ${Addressdata.State} ${Addressdata.Zipcode}`.trim();
                            cy.get("#address_delivery > .address_country_name")
                              .should("be.visible")
                              .invoke("text")
                              .should("eq", selectedCountry);

                            cy.get("#address_delivery > .address_phone")
                              .should("be.visible")
                              .invoke("text")
                              .should("eq", Addressdata.MobileNumber);
                            //Verify Checkout screen - Billing Details section
                            cy.get(
                              "#address_invoice > .address_title > .page-subheading"
                            )
                              .should("be.visible")
                              .invoke("text")
                              .should("eq", "Your billing address");
                            cy.get("@genderValue").then((genderValue) => {
                              cy.get("#address_invoice > .address_firstname")
                                .should("be.visible")
                                .invoke("text")
                                .then((name) => {
                                  const expectedName =
                                    `Mrs. ${Addressdata.FirstName} ${Addressdata.LastName}`.trim();
                                  const formattedName = name
                                    .replace(/\s+/g, " ")
                                    .trim();
                                  console.log(
                                    "Actual UI Name:",
                                    JSON.stringify(formattedName)
                                  );
                                  console.log(
                                    "Expected Name:",
                                    JSON.stringify(expectedName)
                                  );
                                  cy.log(formattedName);
                                  cy.log(expectedName);
                                  expect(formattedName).to.eq(expectedName);

                                  cy.get("#address_invoice > :nth-child(3)")
                                    .should("be.visible")
                                    .invoke("text")
                                    .should("eq", Addressdata.Company);
                                  cy.get("#address_invoice > :nth-child(4)")
                                    .should("be.visible")
                                    .invoke("text")
                                    .should("eq", Addressdata.Address);
                                  cy.get("#address_invoice > :nth-child(5)")
                                    .should("be.visible")
                                    .invoke("text")
                                    .should("eq", Addressdata.Address2);
                                  cy.get("#address_invoice > .address_city")
                                    .should("be.visible")
                                    .invoke("text")
                                    .then((text) => {
                                      const formattedText = text
                                        .replace(/\s+/g, " ")
                                        .trim();
                                      const expectedText =
                                        `${Addressdata.City} ${Addressdata.State} ${Addressdata.Zipcode}`.trim();
                                      cy.get(
                                        "#address_invoice > .address_country_name"
                                      )
                                        .should("be.visible")
                                        .invoke("text")
                                        .should("eq", selectedCountry);

                                      cy.get(
                                        "#address_invoice > .address_phone"
                                      )
                                        .should("be.visible")
                                        .invoke("text")
                                        .should("eq", Addressdata.MobileNumber);

                                      //Verify Comment section
                                      cy.get("label")
                                        .should("be.visible")
                                        .invoke("text")
                                        .then((label) => {
                                          expect(label.trim()).to.eq(
                                            "If you would like to add a comment about your order, please write it in the field below."
                                          );

                                          cy.get(".form-control")
                                            .should("be.visible")
                                            .type(
                                              "The big brown fox jumps over a lazy dog."
                                            )
                                            .should(
                                              "have.value",
                                              "The big brown fox jumps over a lazy dog."
                                            );
                                          cy.contains("Place Order")
                                            .should("be.visible")
                                            .click();
                                          //Verify Payment screen
                                          cy.url().should(
                                            "eq",
                                            "https://www.automationexercise.com/payment"
                                          );
                                          cy.get(".heading")
                                            .should("be.visible")
                                            .invoke("text")
                                            .should("eq", "Payment");

                                          cy.get(
                                            ":nth-child(2) > .col-sm-12 > .control-label"
                                          )
                                            .should("be.visible")
                                            .invoke("text")
                                            .should("eq", "Name on Card");
                                          const cleanedName =
                                            expectedName.replace(
                                              /^(Mr\.|Mrs\.|Dr\.)\s*/,
                                              ""
                                            );
                                          cy.get('[data-qa="name-on-card"]')
                                            .should("be.visible")
                                            .and("have.value", "")
                                            .type(cleanedName);
                                          cy.get(
                                            ":nth-child(3) > .col-sm-12 > .control-label"
                                          )
                                            .should("be.visible")
                                            .invoke("text")
                                            .should("eq", "Card Number");
                                          const getRandom10DigitNumber = () => {
                                            return Math.floor(
                                              1000000000 +
                                                Math.random() * 9000000000
                                            );
                                          };
                                          cy.get('[data-qa="card-number"]')
                                            .should("be.visible")
                                            .and("have.value", "")
                                            .type(
                                              getRandom10DigitNumber().toString()
                                            );
                                          cy.get(".cvc > .control-label")
                                            .should("be.visible")
                                            .invoke("text")
                                            .should("eq", "CVC");

                                          const getRandom3DigitNumber = () => {
                                            return Math.floor(
                                              100 + Math.random() * 900
                                            );
                                          };
                                          cy.get('[data-qa="cvc"]')
                                            .should("be.visible")
                                            .and("have.value", "")
                                            .and(
                                              "have.attr",
                                              "placeholder",
                                              "ex. 311"
                                            )
                                            .type(
                                              getRandom3DigitNumber().toString()
                                            );
                                          cy.get(
                                            ":nth-child(2) > .control-label"
                                          )
                                            .should("be.visible")
                                            .invoke("text")
                                            .should("eq", "Expiration");
                                          cy.get('[data-qa="expiry-month"]')
                                            .should("be.visible")
                                            .and("have.value", "")
                                            .and(
                                              "have.attr",
                                              "placeholder",
                                              "MM"
                                            )
                                            .type("01");

                                          cy.get('[data-qa="expiry-year"]')
                                            .should("be.visible")
                                            .and("have.value", "")
                                            .and(
                                              "have.attr",
                                              "placeholder",
                                              "YYYY"
                                            )
                                            .type("2025");
                                          cy.contains("Pay and Confirm Order")
                                            .should("be.visible")
                                            .and("be.enabled")
                                            .invoke("text")
                                            .should(
                                              "eq",
                                              "Pay and Confirm Order"
                                            );
                                          cy.contains(
                                            "Pay and Confirm Order"
                                          ).click();

                                          //Payment Confirmation
                                          cy.get("body").then(($body) => {
                                            if (
                                              $body.find(
                                                "#success_message > .alert-success"
                                              ).length > 0
                                            ) {
                                              cy.get(
                                                "#success_message > .alert-success"
                                              )
                                                .invoke("text")
                                                .then((text) => {
                                                  cy.log(
                                                    "Captured Message: " + text
                                                  );
                                                  expect(text.trim()).to.eq(
                                                    "Your order has been placed successfully!"
                                                  );
                                                });
                                            } else {
                                              cy.log(
                                                "Success message was not found in the DOM."
                                              );
                                            }
                                            cy.url().should(
                                              "eq",
                                              "https://www.automationexercise.com/payment_done/400"
                                            );
                                            cy.get(
                                              '[data-qa="order-placed"] > b'
                                            )
                                              .should("be.visible")
                                              .invoke("text")
                                              .should("eq", "Order Placed!");
                                            cy.get(".col-sm-9 > p")
                                              .should("be.visible")
                                              .invoke("text")
                                              .should(
                                                "eq",
                                                "Congratulations! Your order has been confirmed!"
                                              );

                                            //Download invoice
                                            cy.get(".col-sm-9 > .btn-default")
                                              .should("be.visible")
                                              .invoke("text")
                                              .should("eq", "Download Invoice");
                                            cy.get(
                                              ".col-sm-9 > .btn-default"
                                            ).click();

                                            //Verify successful download of invoice
                                            cy.readFile(
                                              "cypress/downloads/invoice.txt"
                                            ).should("exist");
                                          });
                                        });
                                    });
                                });
                            });
                          });
                      });
                  });
                });
            });
          });
        });
    });