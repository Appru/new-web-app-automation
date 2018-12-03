context("tabs work", () => {
  beforeEach(() => {
    cy.visit("https://imogenheap.supapass.com/");
  });

  it("all tabs lead to right place", function() {
    cy.visit("https://imogenheap.supapass.com/");

    cy.contains("Audio")
      .should("be.visible")
      .click();
    cy.url().should("contain", "/audio");

    cy.contains("Video")
      .should("be.visible")
      .click();
    cy.url().should("contain", "/video");

    cy.contains("Feed")
      .should("be.visible")
      .click();
    cy.url().should("contain", "/feed");

    cy.contains("Social")
      .should("be.visible")
      .click();
    cy.url("contain", "/social");
  });

  it("Words next to icons go away in mobile screen", function() {
    var dimensions = [
      "iphone-6+",
      "iphone-6",
      "iphone-5",
      "iphone-4",
      "iphone-3"
    ];

    dimensions.forEach(function(element) {
      cy.viewport(element);

      cy.contains("Audio")
        .find("Audio")
        .should("be.not.visible");

      cy.contains("Video")
        .find("Video")
        .should("not.be.visible");

      cy.contains("Feed")
        .find("Feed")
        .should("not.be.visible");

      cy.contains("Social")
        .find("Social")
        .should("not.be.visible");
    });
  });
});
