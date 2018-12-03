context("audio tab", () => {
  beforeEach(() => {
    cy.visit("https://" + artistName + ".supapass.com/audio");
  });

  var albumThumbnails = [
    ":nth-child(1) > .sc-cMljjf > .sc-eHgmQL > img",
    ":nth-child(2) > .sc-cMljjf > .sc-eHgmQL > img",
    ":nth-child(3) > .sc-cMljjf > .sc-eHgmQL > img",
    ":nth-child(4) > .sc-cMljjf > .sc-eHgmQL > img",
   
  ];

  var firstSongName = "Episode 1";
  var secondSongName = "Episode 2";
  var artistName = "matthayes";


  //login fucntion using jem's username and password
  function login() {
    cy.visit("https://" + artistName + ".supapass.com/login");
    cy.get("input[type=text]").type("jem@supapass.com");
    cy.get("input[type=password]").type("1million");
    cy.get("button")
      .contains("Sign in")
      .click();
    cy.url().should("eq", "https://" + artistName + ".supapass.com/");
    cy.visit("https://" + artistName + ".supapass.com/audio");
  }

  //the miniplayer pops up when you click on a track
  it("check the miniplayer", function() {
    login();
    cy.get(":nth-child(1) > .sc-cMljjf > .sc-eHgmQL > img").click();
    cy.get(
      ":nth-child(1) > .sc-bYSBpT > .sc-elJkPf"
    ).click();

   

    cy.get(".PlayerBar__PlayerBarInner-bfh3k1-1").should("be.visible");
    cy.get(".SeekBar__Comp-s1onq4dn-0").should("be.visible");
    cy.get(".PlayerBar__TrackName-bfh3k1-7").should("be.visible");
    cy.get(".PlayerBar__TrackChannel-bfh3k1-10").should("be.visible");
  });

  it("miniplayer goes to next song ", function() {
    login();
    cy.get(":nth-child(1) > .ChannelTabs__TabLink-s1fngxnq-5").click();
    cy.get(
      ":nth-child(1) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img"
    ).click();

    cy.get(
      ":nth-child(1) > .TrackItem__TrackInfo-kjf9sv-2 > .TrackItem__TrackTitle-kjf9sv-3"
    ).click();

    cy.contains(firstSongName).should("be.visible");

    cy.get(".PlayerBar__NextButton-bfh3k1-4 > .Icon__SVG-s1e7w1xi-0").click();

    cy.wait(5000);

    cy.contains(secondSongName).should("be.visible");
  });

  it("checks all album images/buttons show up no collections", function() {
    albumThumbnails.forEach(function(element) {
      cy.get(element).should("be.visible");
    });
  });

  it("check details within the album", function() {
    albumThumbnails.forEach(function(element) {
      cy.get(element).click();

      cy.get("img").should("be.visible");
      cy.get(".ReleasePage__ReleaseChannel-s1byoddy-1").should("be.visible");
      cy.get(".ReleasePage__ReleaseTitle-s1byoddy-4").should("be.visible");
      cy.get(".ReleasePage__ReleaseDetails-s1byoddy-5").should("be.visible");
      cy.get(".ReleasePage__ReleaseDetails-s1byoddy-5").should("be.visible");

      cy.get(".styled__BackgroundFade-s14yuawt-13").should("be.visible");
      cy.go("back");
    });
  });
});
