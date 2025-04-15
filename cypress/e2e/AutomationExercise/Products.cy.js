///<reference types = "cypress"/>

describe("Products Page", () => {
  it("Products", () => {
    cy.visit("https://www.automationexercise.com");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Verify List of Products are visible
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
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p"
    )
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
