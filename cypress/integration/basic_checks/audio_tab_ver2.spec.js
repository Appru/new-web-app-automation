context("motivationatil life audio", () => {
  beforeEach(() => {
    cy.visit("https://leddra.supapass.com/audio");
  });

  var arrName = [
    "matthayes",
    "imogenheap",
    "leddra",
    "dio",
    "motivationallife",
    "disruptek",
    "amandasactionclub"
  ];




  it("checks atleast one song is in the latest album", function() {
    arrName.forEach(function(artist) {
      cy.visit("https://" + artist + ".supapass.com/audio");

      //clicks on image location rather than html tag, bit more robust
      //:nth-child(1) > .sc-cMljjf > .sc-eHgmQL > img
      cy.get(':nth-child(1)').click()
      
      cy.get("img").click(216.25, 216.25, { force: true });


      //i guess as long as the track doesn't visibley move, it checks if songs are there
      cy.get('span').should('be.visible',569.5,48)
    });
  });


  it("clicks first audio track imgee", function() {
    arrName.forEach(function(artist) {
      cy.viewport('iphone-6')
      cy.visit("https://" + artist + ".supapass.com/audio");

      //clicks on image location rather than html tag, bit more robust

      cy.get("img").click(216.25, 216.25, { force: true });


      //i guess as long as the track doesn't visibley move, it checks if songs are there
      cy.get('span').should('be.visible',569.5,48)

     
    });
  });





  it("there is atleast one picture that loads", function() {
    cy.get(":nth-child(1)").should("be.visible");

    //checking  there are atleast two imgs on the page, guess is kinda better
    //that atleast the profile pic and one album loads

    arrName.forEach(function(artist) {
      cy.visit("https://" + artist + ".supapass.com/audio");

      cy.get("body")
        .find("img")
        .should($listOfElements => {
          expect($listOfElements).to.have.length.above(1);
        });
    });
  });
});
