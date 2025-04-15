/// <reference types = "cypress"/>

describe("Add to Cart then Register", () => {
  it("Verify Homepage", () => {
    //Launch website
    cy.visit("https://www.automationexercise.com/");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Verify Product list is displayed
    cy.get(".features_items").should("be.visible");

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
                                            //Click Delete Account
                                            cy.contains(
                                              "Delete Account"
                                            ).should("be.visible");
                                            cy.contains(
                                              "Delete Account"
                                            ).click();

                                            //Successful account deletion
                                            cy.contains(
                                              "Account Deleted!"
                                            ).should("be.visible");
                                            cy.contains(
                                              "Account Deleted!"
                                            ).should(
                                              "have.text",
                                              "Account Deleted!"
                                            );
                                            cy.get(
                                              '[data-qa="continue-button"]'
                                            ).click();
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
  });
});
