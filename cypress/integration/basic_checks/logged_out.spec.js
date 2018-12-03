context("logged out", () => {

  
  beforeEach(() => {
    cy.visit("https://matthayes.supapass.com");
  });




  it("logged out clicking around leads to feed", function() {
    //homepage
    cy.get(".ChannelSidebar__SubscriptionDetails-s15caijq-0").should(
      "be.visible"
    );

    //audio tab
    cy.get(":nth-child(1) > .ChannelTabs__TabLink-s1fngxnq-5").click();
    cy.get(
      ":nth-child(1) > .ListWrapper-e14ill-0 > :nth-child(2) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img"
    ).click();
    cy.get(".TrackItem__TrackTitle-kjf9sv-3").click();
    cy.get(".ChannelSidebar__SubscriptionDetails-s15caijq-0").should(
      "be.visible"
    );
    cy.url().should("contain", "/feed");

    //video tab
    cy.get(":nth-child(2) > .ChannelTabs__TabLink-s1fngxnq-5").click();
    cy.get(
      ":nth-child(1) > .Release__StyledLink-s15nvwg-3 > .ReleaseArtwork__Comp-s1wpriz1-0 > img"
    ).click();
    cy.get(
      ":nth-child(1) > .ConditionalLink__StyledLink-s1gzlfy6-0 > :nth-child(1) > .VideoItem__ImageWrapper-o5eevl-1 > .VideoItem__Image-o5eevl-2"
    ).click();
    cy.get(".ChannelSidebar__SubscriptionDetails-s15caijq-0").should(
      "be.visible"
    );
    cy.url().should("contain", "/feed");

    //feed tab
    cy.get(":nth-child(3) > .ChannelTabs__TabLink-s1fngxnq-5").click();
    cy.get(".ChannelSidebar__SubscriptionDetails-s15caijq-0").should(
      "be.visible"
    );
  });
});
