context("video tab", () => {
  beforeEach(() => {
    cy.visit("https://motivationallife.supapass.com/video");
  });

  function login() {
    cy.visit("https://motivationallife.supapass.com/login");
    cy.get("input[type=text]").type("jem@supapass.com");
    cy.get("input[type=password]").type("1million");
    cy.get("button")
      .contains("Sign in")
      .click();
  }

  //think i was having a brain aneurysm while writing this test wtf
  it("checks if a collection of 3 videos has only 3 videos", function() {
    cy.visit("https://motivationallife.supapass.com/video");

    
      

    cy.get(
      ":nth-child(15) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img"
    ).click();

    cy.get(':nth-child(3) > .ConditionalLink__StyledLink-s1gzlfy6-0 > :nth-child(1) > .VideoItem__ImageWrapper-o5eevl-1 > .VideoItem__Image-o5eevl-2').should('be.visible')
    cy.get(':nth-child(4) > .ConditionalLink__StyledLink-s1gzlfy6-0 > :nth-child(1) > .VideoItem__ImageWrapper-o5eevl-1 > .VideoItem__Image-o5eevl-2').should('not.exist')
    
    
  });

  // check if the actual video window is visible and the play button is actually there
  it("check the video plays", function() {
    login();
    cy.get(":nth-child(2) > .ChannelTabs__TabLink-s1fngxnq-5").click();

    cy.get(
      ":nth-child(1) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img"
    ).click();

    cy.get(
      ":nth-child(1) > .ConditionalLink__StyledLink-s1gzlfy6-0 > :nth-child(1) > .VideoItem__ImageWrapper-o5eevl-1 > .VideoItem__Image-o5eevl-2"
    ).click();

    cy.url().should("eq", "https://motivationallife.supapass.com/video/315977");
    cy.wait(5000);

    cy.get(".jw-icon-playback").should("be.hidden");

    cy.get(".jw-video").should("be.visible");
  });

  it("video tab, details within collection is visible in each collection", function() {
    var i;
    var node = ":nth-child(" + i + ") > .sc-fMiknA > .sc-hSdWYo > img";

    cy.url().should("contain", "/video");
    for (i = 1; i < 16; i++) {
      cy.get(
        ":nth-child(" +
          i +
          ") > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img"
      ).click();

      cy.url().should("contain", "/collection");

      cy.get("img").should("be.visible");
      cy.get(".CollectionHeader-s11vn2rd-0").should("be.visible");
      cy.get(".PageBody-s3j71u3-0").should("be.visible");
      cy.get(".ListWrapper-e14ill-0").should("be.visible");
      cy.get(".CollectionDetails-s1hnbjk9-0").should("be.visible");

      //add more details

      cy.go("back");
    }
  });

  it("checks there is atleast one video in collection", function() {
    var vidCollection = [
      ":nth-child(1) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(2) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(3) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(1) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(4) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(5) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(6) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(7) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(8) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(9) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(10) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(11) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(13) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(13) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(14) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(15) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(16) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img",
      ":nth-child(17) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img"
    ];

    var videos;

    vidCollection.forEach(function(element) {
      cy.get(element).click();

      cy.get(
        ":nth-child(1) > .ConditionalLink__StyledLink-s1gzlfy6-0 > :nth-child(1) > .VideoItem__ImageWrapper-o5eevl-1 > .VideoItem__Image-o5eevl-2" ||
          ".ConditionalLink__StyledLink-s1gzlfy6-0 > :nth-child(1)"
      ).should("be.visible");

      cy.go("back");
    });
  });
});
