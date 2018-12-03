describe("social tab", function() {
  var artistName = "matthayes";

  var arrName = [
    "matthayes",
    "imogenheap",
    "leddra",
    "dio",
    "motivationallife",
    "creativetrade",
    "Mycelia"
    //,"julianameyer"
  ];

  it(" checking all the contents of social posts load", function() {
    var child;
    //cy.viewport('iphone-6')

    arrName.forEach(element => {
      cy.visit("https://" + element + ".supapass.com/social");

      for (child = 1; child < 5; child++) {
        cy.get(":nth-child(" + child + ")").should("be.visible");
      }
      //cy.contains("day").should("be.visible");
      cy.get(".PageBody-s3j71u3-0").should("be.visible");
      cy.get(':nth-child(1) > .styles__SocialMeta-s4je41w-6 > .styles__SocialProfile-s4je41w-7 > .styles__SocialAccount-s4je41w-4').should('be.visible')
      cy.get(':nth-child(1) > .styles__SocialMeta-s4je41w-6 > .styles__SocialProfile-s4je41w-7 > .styles__SocialNetwork-s4je41w-3').should('be.visible')
      cy.get(':nth-child(1) > .styles__SocialBody-s4je41w-2 > .Linkify').should('be.visible')
      
    });
  });
});
