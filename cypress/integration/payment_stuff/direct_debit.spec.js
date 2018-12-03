describe("sub to artist payment section, direct debit", function() {
  var website =
    "https://pay.gocardless.com/flow/RE000CAKNQ3HVMZK3CKMPMNSQDBSXNXA?form_build_id=form-8cWPXU6MFjCwT2BB_hoxQWbIoYjNFpGqAJSNljCpu9w&form_token=4JC7kj41d-EAILf36Q6RguNbe-0JxShRPKSH94N_e3s&form_id=commerce_checkout_form_payment";

  it("Feilds are pre-filled", function() {
    cy.visit(website);

    cy.get("#customer_given_name").should("have.value", "Test");

    cy.get("#customer_family_name").should("have.value", "MAn");

    cy.get("#customer_email").should("have.value", "jem@supapass.com");

    cy.get("#customer_address_line1").should("have.value", "50 dover street");

    cy.get("#customer_city").should("have.value", "London");

    cy.get("#customer_postal_code").should("have.value", "nr3lq");
  });

  it("error occours with blank sort code/account no.", function() {
    cy.get(".continue-button > .btn").click();

    cy.contains("Please correct the errors below").should("be.visible");
  });

  it("error message with wrong sortcode format", function() {
    cy.get("#customer_bank_accounts_branch_code").type("1232443232424");

    cy.get(".continue-button > .btn").click();

    cy.contains("is the wrong length (should be 6 characters)").should(
      "be.visible"
    );
  });

  it("error message with wrong account no. format", function() {
    cy.get("#customer_bank_accounts_account_number").type("1232443232424");

    cy.get(".continue-button > .btn").click();

    cy.contains("is the wrong length (should be 8 characters)").should(
      "be.visible"
    );
  });

  it("error message with wrong postcode", function() {
    cy.get("#customer_postal_code").clear();

    cy.get(".continue-button > .btn").click();

    cy.contains("is required if any address fields are provided").should(
      "be.visible"
    );
  });

  it("error message with wrong postcode", function() {
    cy.get("#customer_address_line1").clear();

    cy.get(".continue-button > .btn").click();

    cy.get(":nth-child(1) > .field_with_errors > .message").should(
      "be.visible"
    );
  });

  it("error message with blank name", function() {
    cy.get("#customer_given_name").clear();

    cy.get(".continue-button > .btn").click();

    cy.get(
      ":nth-child(1) > .u-font-size-0 > .u-padding-Rxs > .field_with_errors > .message"
    ).should("be.visible");
  });

  it("error message with blank lastname", function() {
    cy.get("#customer_family_name").clear();

    cy.get(".continue-button > .btn").click();

    cy.get(
      '[ng-init="connectDataCtrl.isShowingIban = false"] > :nth-child(1) > .message'
    ).should("be.visible");
  });

  it("enter in correct details", function() {
    cy.visit(website);

    cy.get("#customer_bank_accounts_branch_code").type("40-47-84");

    cy.get("#customer_bank_accounts_account_number").type("70872490");

    cy.get("#customer_postal_code")
      .clear()
      .type("NR2 3LQ");

    cy.get(".continue-button > .btn").click();

    // all the attributes on the next page are visible

    cy.get("#merchant-details").should("be.visible");
    cy.get(".inline-dialog__wrapper__content").should("be.visible");
  });
});
