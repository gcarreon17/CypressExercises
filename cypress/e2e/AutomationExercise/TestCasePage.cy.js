/// <reference types="cypress" />

describe("Test Case Page", () => {
  it("Verify Test Case Page", () => {
    //Navigate to URL
    cy.visit("https://www.automationexercise.com");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Click Test Case Link
    cy.contains("Test Cases").click().should("be.visible");

    //Verify Test Case Page
    //cy.title().should("eq", "TEST CASES");
    cy.get("h2[class='title text-center'] b").should("be.visible");
    cy.get("span").should("be.visible");

    //links
    cy.get(":nth-child(2) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 1: Register User");

    cy.get(":nth-child(3) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 2: Login User with correct email and password");

    cy.get(":nth-child(4) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "Test Case 3: Login User with incorrect email and password"
      );

    cy.get(":nth-child(5) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 4: Logout User");

    cy.get(":nth-child(6) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 5: Register User with existing email");

    cy.get(":nth-child(7) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 6: Contact Us Form");

    cy.get(":nth-child(8) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 7: Verify Test Cases Page");

    cy.get(":nth-child(9) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 8: Verify All Products and product detail page");

    cy.get(":nth-child(10) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 9: Search Product");

    cy.get(":nth-child(11) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 10: Verify Subscription in home page");

    cy.get(":nth-child(12) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 11: Verify Subscription in Cart page");

    cy.get(":nth-child(13) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 12: Add Products in Cart");

    cy.get(":nth-child(14) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 13: Verify Product quantity in Cart");

    cy.get(":nth-child(15) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 14: Place Order: Register while Checkout");

    cy.get(":nth-child(16) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 15: Place Order: Register before Checkout");

    cy.get(":nth-child(17) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 16: Place Order: Login before Checkout");

    cy.get(":nth-child(18) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 17: Remove Products From Cart");

    cy.get(":nth-child(19) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 18: View Category Products");

    cy.get(":nth-child(20) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 19: View & Cart Brand Products");

    cy.get(":nth-child(21) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "Test Case 20: Search Products and Verify Cart After Login"
      );

    cy.get(":nth-child(22) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 21: Add review on product");

    cy.get(":nth-child(23) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 22: Add to cart from Recommended items");

    cy.get(":nth-child(24) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 23: Verify address details in checkout page");

    cy.get(":nth-child(25) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should("eq", "Test Case 24: Download Invoice after purchase order");

    cy.get(":nth-child(26) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality"
      );

    cy.get(":nth-child(27) > .panel > .panel-heading > .panel-title > a > u")
      .click()
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality"
      );

    //Verify Test Steps in Test Case1
    cy.get("#collapse1 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse1 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse1 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse1 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Signup / Login' button");
    cy.get("#collapse1 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify 'New User Signup!' is visible");
    cy.get("#collapse1 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Enter name and email address");
    cy.get("#collapse1 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click 'Signup' button");
    cy.get("#collapse1 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Verify that 'ENTER ACCOUNT INFORMATION' is visible");
    cy.get("#collapse1 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "9. Fill details: Title, Name, Email, Password, Date of birth"
      );
    cy.get("#collapse1 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "10. Select checkbox 'Sign up for our newsletter!'");
    cy.get("#collapse1 > .list-group > :nth-child(11)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "11. Select checkbox 'Receive special offers from our partners!'"
      );
    cy.get("#collapse1 > .list-group > :nth-child(12)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number"
      );
    cy.get("#collapse1 > .list-group > :nth-child(13)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "13. Click 'Create Account button'");
    cy.get("#collapse1 > .list-group > :nth-child(14)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "14. Verify that 'ACCOUNT CREATED!' is visible");
    cy.get("#collapse1 > .list-group > :nth-child(15)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "15. Click 'Continue' button");
    cy.get("#collapse1 > .list-group > :nth-child(16)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "16. Verify that 'Logged in as username' is visible");
    cy.get("#collapse1 > .list-group > :nth-child(17)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "17. Click 'Delete Account' button");
    cy.get("#collapse1 > .list-group > :nth-child(18)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button"
      );

    //Verify Test Steps in Test Case2
    cy.get("#collapse2 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse2 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse2 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse2 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Signup / Login' button");
    cy.get("#collapse2 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify 'Login to your account' is visible");
    cy.get("#collapse2 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Enter correct email address and password");
    cy.get("#collapse2 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click 'login' button");
    cy.get("#collapse2 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Verify that 'Logged in as username' is visible");
    cy.get("#collapse2 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Click 'Delete Account' button");
    cy.get("#collapse2 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "10. Verify that 'ACCOUNT DELETED!' is visible");

    //Verify Test Steps in Test Case3
    cy.get("#collapse3 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse3 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse3 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse3 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Signup / Login' button");
    cy.get("#collapse3 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify 'Login to your account' is visible");
    cy.get("#collapse3 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Enter incorrect email address and password");
    cy.get("#collapse3 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click 'login' button");
    cy.get("#collapse3 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "8. Verify error 'Your email or password is incorrect!' is visible"
      );

    //Verify Test Steps in Test Case4
    cy.get("#collapse4 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse4 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse4 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse4 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Signup / Login' button");
    cy.get("#collapse4 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify 'Login to your account' is visible");
    cy.get("#collapse4 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Enter correct email address and password");
    cy.get("#collapse4 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click 'login' button");
    cy.get("#collapse4 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Verify that 'Logged in as username' is visible");
    cy.get("#collapse4 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Click 'Logout' button");
    cy.get("#collapse4 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "10. Verify that user is navigated to login page");

    //Verify Test Steps in Test Case5
    cy.get("#collapse5 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse5 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse5 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse5 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Signup / Login' button");
    cy.get("#collapse5 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify 'New User Signup!' is visible");
    cy.get("#collapse5 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Enter name and already registered email address");
    cy.get("#collapse5 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click 'Signup' button");
    cy.get("#collapse5 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "8. Verify error 'Email Address already exist!' is visible"
      );

    //Verify Test Steps in Test Case6
    cy.get("#collapse6 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse6 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse6 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse6 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Contact Us' button");
    cy.get("#collapse6 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify 'GET IN TOUCH' is visible");
    cy.get("#collapse6 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Enter name, email, subject and message");
    cy.get("#collapse6 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Upload file");
    cy.get("#collapse6 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Click 'Submit' button");
    cy.get("#collapse6 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Click OK button");
    cy.get("#collapse6 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "10. Verify success message 'Success! Your details have been submitted successfully.' is visible"
      );
    cy.get("#collapse6 > .list-group > :nth-child(11)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "11. Click 'Home' button and verify that landed to home page successfully"
      );

    //Verify Test Steps in Test Case7
    cy.get("#collapse7 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse7 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse7 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse7 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Test Cases' button");
    cy.get("#collapse7 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "5. Verify user is navigated to test cases page successfully"
      );

    //Verify Test Steps in Test Case8
    cy.get("#collapse8 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse8 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse8 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse8 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Products' button");
    cy.get("#collapse8 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "5. Verify user is navigated to ALL PRODUCTS page successfully"
      );
    cy.get("#collapse8 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. The products list is visible");
    cy.get("#collapse8 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click on 'View Product' of first product");
    cy.get("#collapse8 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. User is landed to product detail page");
    cy.get("#collapse8 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "9. Verify that detail detail is visible: product name, category, price, availability, condition, brand"
      );

    //Verify Test Steps in Test Case9
    cy.get("#collapse9 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse9 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse9 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse9 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Products' button");
    cy.get("#collapse9 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "5. Verify user is navigated to ALL PRODUCTS page successfully"
      );
    cy.get("#collapse9 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "6. Enter product name in search input and click search button"
      );
    cy.get("#collapse9 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Verify 'SEARCHED PRODUCTS' is visible");
    cy.get("#collapse9 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Verify all the products related to search are visible");

    //Verify Test Steps in Test Case10
    cy.get("#collapse10 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse10 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse10 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse10 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Scroll down to footer");
    cy.get("#collapse10 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify text 'SUBSCRIPTION'");
    cy.get("#collapse10 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Enter email address in input and click arrow button");
    cy.get("#collapse10 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "7. Verify success message 'You have been successfully subscribed!' is visible"
      );

    //Verify Test Steps in Test Case11
    cy.get("#collapse11 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse11 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse11 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse11 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click 'Cart' button");
    cy.get("#collapse11 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Scroll down to footer");
    cy.get("#collapse11 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify text 'SUBSCRIPTION'");
    cy.get("#collapse11 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Enter email address in input and click arrow button");
    cy.get("#collapse11 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "8. Verify success message 'You have been successfully subscribed!' is visible"
      );

    //Verify Test Steps in Test Case12
    cy.get("#collapse12 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse12 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse12 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse12 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click 'Products' button");
    cy.get("#collapse12 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Hover over first product and click 'Add to cart'");
    cy.get("#collapse12 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Click 'Continue Shopping' button");
    cy.get("#collapse12 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Hover over second product and click 'Add to cart'");
    cy.get("#collapse12 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Click 'View Cart' button");
    cy.get("#collapse12 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Verify both products are added to Cart");
    cy.get("#collapse12 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "10. Verify their prices, quantity and total price");

    //Verify Test Steps in Test Case13
    cy.get("#collapse13 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse13 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse13 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse13 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click 'View Product' for any product on home page");
    cy.get("#collapse13 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify product detail is opened");
    cy.get("#collapse13 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Increase quantity to 4");
    cy.get("#collapse13 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click 'Add to cart' button");
    cy.get("#collapse13 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Click 'View Cart' button");
    cy.get("#collapse13 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "9. Verify that product is displayed in cart page with exact quantity"
      );

    //Verify Test Steps in Test Case14
    cy.get("#collapse14 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse14 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse14 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse14 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Add products to cart");
    cy.get("#collapse14 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Click 'Cart' button");
    cy.get("#collapse14 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify that cart page is displayed");
    cy.get("#collapse14 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click Proceed To Checkout");
    cy.get("#collapse14 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("contains", "8. Click 'Register / Login' button");
    cy.get("#collapse14 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Fill all details in Signup and create account");
    cy.get("#collapse14 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "10. Verify 'ACCOUNT CREATED!' and click 'Continue' button"
      );
    cy.get("#collapse14 > .list-group > :nth-child(11)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "11. Verify ' Logged in as username' at top");
    cy.get("#collapse14 > .list-group > :nth-child(12)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "12.Click 'Cart' button");
    cy.get("#collapse14 > .list-group > :nth-child(13)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "13. Click 'Proceed To Checkout' button");
    cy.get("#collapse14 > .list-group > :nth-child(14)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "14. Verify Address Details and Review Your Order");
    cy.get("#collapse14 > .list-group > :nth-child(15)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "15. Enter description in comment text area and click 'Place Order'"
      );
    cy.get("#collapse14 > .list-group > :nth-child(16)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "16. Enter payment details: Name on Card, Card Number, CVC, Expiration date"
      );
    cy.get("#collapse14 > .list-group > :nth-child(17)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "17. Click 'Pay and Confirm Order' button");
    cy.get("#collapse14 > .list-group > :nth-child(18)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "18. Verify success message 'Your order has been placed successfully!'"
      );
    cy.get("#collapse14 > .list-group > :nth-child(19)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "19. Click 'Delete Account' button");
    cy.get("#collapse14 > .list-group > :nth-child(20)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "20. Verify 'ACCOUNT DELETED!' and click 'Continue' button"
      );

    //Verify Test Steps in Test Case15
    cy.get("#collapse15 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse15 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse15 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse15 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("contains", "4. Click 'Signup / Login' button");
    cy.get("#collapse15 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Fill all details in Signup and create account");
    cy.get("#collapse15 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify 'ACCOUNT CREATED!' and click 'Continue' button");
    cy.get("#collapse15 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Verify ' Logged in as username' at top");
    cy.get("#collapse15 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Add products to cart");
    cy.get("#collapse15 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Click 'Cart' button");
    cy.get("#collapse15 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "10. Verify that cart page is displayed");
    cy.get("#collapse15 > .list-group > :nth-child(11)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "11. Click Proceed To Checkout");
    cy.get("#collapse15 > .list-group > :nth-child(12)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "12. Verify Address Details and Review Your Order");
    cy.get("#collapse15 > .list-group > :nth-child(13)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "13. Enter description in comment text area and click 'Place Order'"
      );
    cy.get("#collapse15 > .list-group > :nth-child(14)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "14. Enter payment details: Name on Card, Card Number, CVC, Expiration date"
      );
    cy.get("#collapse15 > .list-group > :nth-child(15)")
      .should("be.visible")
      .invoke("text")
      .should("contains", "15. Click 'Pay and Confirm Order' button");
    cy.get("#collapse15 > .list-group > :nth-child(16)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "16. Verify success message 'Your order has been placed successfully!'"
      );
    cy.get("#collapse15 > .list-group > :nth-child(17)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "17. Click 'Delete Account' button");
    cy.get("#collapse15 > .list-group > :nth-child(18)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "18. Verify 'ACCOUNT DELETED!' and click 'Continue' button"
      );

    //Verify Test Steps in Test Case16
    cy.get("#collapse16 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse16 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse16 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse16 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("contains", "4. Click 'Signup / Login' button");
    cy.get("#collapse16 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Fill email, password and click 'Login' button");
    cy.get("#collapse16 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify 'Logged in as username' at top");
    cy.get("#collapse16 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Add products to cart");
    cy.get("#collapse16 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Click 'Cart' button");
    cy.get("#collapse16 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Verify that cart page is displayed");
    cy.get("#collapse16 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "10. Click Proceed To Checkout");
    cy.get("#collapse16 > .list-group > :nth-child(11)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "11. Verify Address Details and Review Your Order");
    cy.get("#collapse16 > .list-group > :nth-child(12)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "12. Enter description in comment text area and click 'Place Order'"
      );
    cy.get("#collapse16 > .list-group > :nth-child(13)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "13. Enter payment details: Name on Card, Card Number, CVC, Expiration date"
      );
    cy.get("#collapse16 > .list-group > :nth-child(14)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "14. Click 'Pay and Confirm Order' button");
    cy.get("#collapse16 > .list-group > :nth-child(15)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "15. Verify success message 'Your order has been placed successfully!'"
      );
    cy.get("#collapse16 > .list-group > :nth-child(16)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "16. Click 'Delete Account' button");
    cy.get("#collapse16 > .list-group > :nth-child(17)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "17. Verify 'ACCOUNT DELETED!' and click 'Continue' button"
      );

    //Verify Test Steps in Test Case17
    cy.get("#collapse17 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse17 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse17 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse17 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Add products to cart");
    cy.get("#collapse17 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Click 'Cart' button");
    cy.get("#collapse17 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify that cart page is displayed");
    cy.get("#collapse17 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click 'X' button corresponding to particular product");
    cy.get("#collapse17 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Verify that product is removed from the cart");

    //Verify Test Steps in Test Case18
    cy.get("#collapse18 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse18 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse18 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that categories are visible on left side bar");
    cy.get("#collapse18 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click on 'Women' category");
    cy.get("#collapse18 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "5. Click on any category link under 'Women' category, for example: Dress"
      );
    cy.get("#collapse18 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'"
      );
    cy.get("#collapse18 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "7. On left side bar, click on any sub-category link of 'Men' category"
      );
    cy.get("#collapse18 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Verify that user is navigated to that category page");

    //Verify Test Steps in Test Case19
    cy.get("#collapse19 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse19 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse19 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Click on 'Products' button");
    cy.get("#collapse19 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Verify that Brands are visible on left side bar");
    cy.get("#collapse19 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Click on any brand name");
    cy.get("#collapse19 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "6. Verify that user is navigated to brand page and brand products are displayed"
      );
    cy.get("#collapse19 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. On left side bar, click on any other brand link");
    cy.get("#collapse19 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "8. Verify that user is navigated to that brand page and can see products"
      );

    //Verify Test Steps in Test Case20
    cy.get("#collapse20 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse20 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse20 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Click on 'Products' button");
    cy.get("#collapse20 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "4. Verify user is navigated to ALL PRODUCTS page successfully"
      );
    cy.get("#collapse20 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "5. Enter product name in search input and click search button"
      );
    cy.get("#collapse20 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify 'SEARCHED PRODUCTS' is visible");
    cy.get("#collapse20 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Verify all the products related to search are visible");
    cy.get("#collapse20 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Add those products to cart");
    cy.get("#collapse20 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "9. Click 'Cart' button and verify that products are visible in cart"
      );
    cy.get("#collapse20 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "10. Click 'Signup / Login' button and submit login details"
      );
    cy.get("#collapse20 > .list-group > :nth-child(11)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "11. Again, go to Cart page");
    cy.get("#collapse20 > .list-group > :nth-child(12)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "12. Verify that those products are visible in cart after login as well"
      );

    //Verify Test Steps in Test Case21
    cy.get("#collapse21 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse21 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse21 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Click on 'Products' button");
    cy.get("#collapse21 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "4. Verify user is navigated to ALL PRODUCTS page successfully"
      );
    cy.get("#collapse21 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Click on 'View Product' button");
    cy.get("#collapse21 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify 'Write Your Review' is visible");
    cy.get("#collapse21 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Enter name, email and review");
    cy.get("#collapse21 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Click 'Submit' button");
    cy.get("#collapse21 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Verify success message 'Thank you for your review.'");

    //Verify Test Steps in Test Case22
    cy.get("#collapse22 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse22 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse22 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Scroll to bottom of page");
    cy.get("#collapse22 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Verify 'RECOMMENDED ITEMS' are visible");
    cy.get("#collapse22 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Click on 'Add To Cart' on Recommended product");
    cy.get("#collapse22 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Click on 'View Cart' button");
    cy.get("#collapse22 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Verify that product is displayed in cart page");

    //Verify Test Steps in Test Case23
    cy.get("#collapse23 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse23 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse23 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse23 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Click 'Signup / Login' button");
    cy.get("#collapse23 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Fill all details in Signup and create account");
    cy.get("#collapse23 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify 'ACCOUNT CREATED!' and click 'Continue' button");
    cy.get("#collapse23 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Verify ' Logged in as username' at top");
    cy.get("#collapse23 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "8. Add products to cart");
    cy.get("#collapse23 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Click 'Cart' button");
    cy.get("#collapse23 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "10. Verify that cart page is displayed");
    cy.get("#collapse23 > .list-group > :nth-child(11)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "11. Click Proceed To Checkout");
    cy.get("#collapse23 > .list-group > :nth-child(12)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "12. Verify that the delivery address is same address filled at the time registration of account"
      );
    cy.get("#collapse23 > .list-group > :nth-child(13)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "13. Verify that the billing address is same address filled at the time registration of account"
      );
    cy.get("#collapse23 > .list-group > :nth-child(14)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "14. Click 'Delete Account' button");
    cy.get("#collapse23 > .list-group > :nth-child(15)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "15. Verify 'ACCOUNT DELETED!' and click 'Continue' button"
      );

    //Verify Test Steps in Test Case24
    cy.get("#collapse24 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse24 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse24 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse24 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Add products to cart");
    cy.get("#collapse24 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Click 'Cart' button");
    cy.get("#collapse24 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Verify that cart page is displayed");
    cy.get("#collapse24 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "7. Click Proceed To Checkout");
    cy.get("#collapse24 > .list-group > :nth-child(8)")
      .should("be.visible")
      .invoke("text")
      .should("contains", "8. Click 'Register / Login' button");
    cy.get("#collapse24 > .list-group > :nth-child(9)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "9. Fill all details in Signup and create account");
    cy.get("#collapse24 > .list-group > :nth-child(10)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "10. Verify 'ACCOUNT CREATED!' and click 'Continue' button"
      );
    cy.get("#collapse24 > .list-group > :nth-child(11)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "11. Verify ' Logged in as username' at top");
    cy.get("#collapse24 > .list-group > :nth-child(12)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "12.Click 'Cart' button");
    cy.get("#collapse24 > .list-group > :nth-child(13)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "13. Click 'Proceed To Checkout' button");
    cy.get("#collapse24 > .list-group > :nth-child(14)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "14. Verify Address Details and Review Your Order");
    cy.get("#collapse24 > .list-group > :nth-child(15)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "15. Enter description in comment text area and click 'Place Order'"
      );
    cy.get("#collapse24 > .list-group > :nth-child(16)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "16. Enter payment details: Name on Card, Card Number, CVC, Expiration date"
      );
    cy.get("#collapse24 > .list-group > :nth-child(17)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "17. Click 'Pay and Confirm Order' button");
    cy.get("#collapse24 > .list-group > :nth-child(18)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "18. Verify success message 'Your order has been placed successfully!'"
      );
    cy.get("#collapse24 > .list-group > :nth-child(19)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "19. Click 'Download Invoice' button and verify invoice is downloaded successfully."
      );
    cy.get("#collapse24 > .list-group > :nth-child(20)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "20. Click 'Continue' button");
    cy.get("#collapse24 > .list-group > :nth-child(21)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "21. Click 'Delete Account' button");
    cy.get("#collapse24 > .list-group > :nth-child(22)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "22. Verify 'ACCOUNT DELETED!' and click 'Continue' button"
      );

    //Verify Test Steps in Test Case25
    cy.get("#collapse25 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse25 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse25 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse25 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Scroll down page to bottom");
    cy.get("#collapse25 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify 'SUBSCRIPTION' is visible");
    cy.get("#collapse25 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Click on arrow at bottom right side to move upward");
    cy.get("#collapse25 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen"
      );

    //Verify Test Steps in Test Case26
    cy.get("#collapse26 > .list-group > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "1. Launch browser");
    cy.get("#collapse26 > .list-group > :nth-child(2)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "2. Navigate to url 'http://automationexercise.com'");
    cy.get("#collapse26 > .list-group > :nth-child(3)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "3. Verify that home page is visible successfully");
    cy.get("#collapse26 > .list-group > :nth-child(4)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "4. Scroll down page to bottom");
    cy.get("#collapse26 > .list-group > :nth-child(5)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "5. Verify 'SUBSCRIPTION' is visible");
    cy.get("#collapse26 > .list-group > :nth-child(6)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "6. Scroll up page to top");
    cy.get("#collapse26 > .list-group > :nth-child(7)")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen"
      );

    //Feedback Us
    cy.get(":nth-child(30) > .panel > .panel-heading > .panel-title")
      .should("be.visible")
      .and("contain.text", "Feedback for Us");

    cy.get("#feedback > .list-group > :nth-child(1)")
      .should("be.visible")
      .and(
        "contain.text",
        "We have identified above scenarios and added in the list."
      );
    cy.get("#feedback > .list-group > :nth-child(2)")
      .should("be.visible")
      .and(
        "contain.text",
        "You can explore more test cases in the website and if you find new test scenario that is not covered in above list, do let us know. We will definitely add that in above list."
      );
    cy.get("#feedback > .list-group > :nth-child(3)")
      .should("be.visible")
      .and(
        "contain.text",
        "If you think, this website should cover up any particular feature, kindly share with us at feedback@automationexercise.com. We will work on that part. Your feedback matters a lot."
      );
  });
});
