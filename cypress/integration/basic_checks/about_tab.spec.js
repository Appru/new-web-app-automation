describe("about tab", function() {
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

 //var emailObj = JSON.stringify(email)
 //var passwordObj = JSON.stringify(password);

 var email1 = 'jem@supapass.com'
 var password1= '1million'


  var domain = '.supapass.com/login'
  var drupalDomain= 'https://supapass.com/';

  function login(artist) {
    cy.visit("https://" + artist + domain);
    cy.get("input[type=text]").type(email1);
    cy.get("input[type=password]").type(password1);
    cy.get("button")
      .contains("Sign in")
      .click();
  }

  it("the subscride bar appears and the word subscribe appears", function() {
    arrName.forEach(artist => {
      cy.visit("https://" + artist + domain);

      cy.get(
        ".ChannelSidebar__SubscriptionDetails-s15caijq-0 > :nth-child(5)"
      ).should("be.visible");
      cy.get(".ChannelHero__ChannelImage-s2dkqay-2").should("be.visible");
    });
  });

  function goToPay(artist) {
    cy.visit(drupalDomain + artist + "/subscribe");
  }

  it("Payment screen is there for artists", function() {
    var i = "matthayes";

    arrName.forEach(artist => {
      goToPay(artist);
    });
  });

  it("the subscride bar goes away after logging in ", function() {
    arrName.forEach(artist => {
      login(artist);
      cy.wait(3000);
      cy.get(
        ".ChannelSidebar__SubscriptionDetails-s15caijq-0 > :nth-child(5)"
      ).should("not.be.visible");
    });
  });
});
