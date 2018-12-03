context("paymentScreeen", () => {
  function loopround() {
    var arrName = [
      "matthayes",
      "imogenheap",
      "leddra",
      "dio",
      "motivationallife",
      "creativetrade",
      "disruptek",
      "amandasactionclub"
    ];

    arrName.forEach(function(artist) {
      cy.visit(
        "https://supapass.com/" + artist + "/subscribe?redirect_to_app=1"
      );
    });
  }
  
  it("Billings go away on unchecking box", function() {
    cy.get(".form-type-checkbox > .option").click();

    cy.get(
      "#edit-new-shipping-commerce-customer-address-und-0-postal-code"
    ).should("be.hidden");
  });

  it("nothin entered name feild", function() {
    cy.get("#edit-button").click();

    cy.contains("Name field is required").should("be.visible");

    cy.get("#edit-button--2").click();

    cy.contains("Name field is required").should("be.visible");
  });

  it("nothin entered addresss feild", function() {
    cy.get("#edit-button").click();

    cy.contains("Address 1 field is required").should("be.visible");

    cy.get("#edit-button--2").click();

    cy.contains("Address 1 field is required").should("be.visible");
  });

  it("nothin entered Town/city feild", function() {
    cy.get("#edit-button").click();

    cy.contains("Town/City field is required.").should("be.visible");

    cy.get("#edit-button--2").click();

    cy.contains("Town/City field is required.").should("be.visible");
  });

  it("nothin entered Postcode feild", function() {
    cy.get("#edit-button").click();

    cy.contains("Postcode field is required.").should("be.visible");

    cy.get("#edit-button--2").click();

    cy.contains("Postcode field is required.").should("be.visible");
  });

  it("nothin entered shipping address feild", function() {
    cy.get("#edit-button").click();

    cy.contains("Shipping Address 1 field is required.").should("be.visible");

    cy.get("#edit-button--2").click();

    cy.contains("Shipping Address 1 field is required.").should("be.visible");
  });

  it("nothin entered Shipping Town/City feild", function() {
    cy.get("#edit-button").click();

    cy.contains("Shipping Town/City field is required.").should("be.visible");

    cy.get("#edit-button--2").click();

    cy.contains("Shipping Town/City field is required.").should("be.visible");
  });

  it("nothin entered Shipping Postcode feild", function() {
    cy.get("#edit-button").click();

    cy.contains("Shipping Postcode field is required.").should("be.visible");

    cy.get("#edit-button--2").click();

    cy.contains("Shipping Postcode field is required.").should("be.visible");
  });

  it("Bad giftcodes dont work, letters", function() {
    cy.get("#edit-gift-card-code").type("aaa");

    cy.get("#edit-gift-card-redeem").click();

    cy.contains("Please enter a valid Gift Card code").should("be.visible");
  });

  it("Bad giftcodes dont work, numbers", function() {
    cy.get("#edit-gift-card-code").type("123");

    cy.get("#edit-gift-card-redeem").click();

    cy.contains("Please enter a valid Gift Card code").should("be.visible");
  });
  it("Procced to the go-cardless page", function() {
    cy.get("#edit-mail").type("testman@supapass.com");

    cy.get("#edit-pass").type("password123");

    cy.get("#edit-new-billing-commerce-customer-address-und-0-name-line").type(
      "test man"
    );

    cy.get(
      "#edit-new-billing-commerce-customer-address-und-0-thoroughfare"
    ).type("50 Dover Street");

    cy.get("#edit-new-billing-commerce-customer-address-und-0-locality").type(
      "Norwich"
    );

    cy.get(
      "#edit-new-billing-commerce-customer-address-und-0-postal-code"
    ).type("NR2 3LQ");

    cy.get(".form-type-checkbox > .option").click();

    //cy.get('#edit-button')
    // .click()

    //cy.request('https://supapass.com/leddra/subscribe')

    //cy.url().should('contain', '/subscribe')
  });
});
