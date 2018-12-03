describe("credit card screen", function() {
  var prod = "https://supapass.com/creativetrade/subscribe?redirect_to_app=1";

  it("enter in all the details", function() {
    cy.visit(prod);

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

    cy.get("#edit-button--2").click();

    cy.wait(100);

    cy.request('https://mms.paymentsensegateway.com/Pages/PublicPages/paymentform.aspx')

    
  });

  
  });
