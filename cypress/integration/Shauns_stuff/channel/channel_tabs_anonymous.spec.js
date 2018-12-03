const tabBarSelector = '[data-test="channel-tabs"]';

context('[/] - anonymous - channel tabs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain a tab bar', () => {
    cy.get(tabBarSelector).should('be.visible');
  });

  it('links Subscribe to correct checkout url based on current channel subdomain', () => {
    // crudely get the first part of the hostname
    const channelName = window.location.hostname.split('.')[0];

    cy.get('a')
      .contains('Subscribe')
      .parent()
      .should(
        'have.attr',
        'href',
        `https://supapass.com/${channelName}/subscribe?redirect_to_app=1`
      );
  });

  it('has a sign in button that points to /login', () => {
    cy.get('a')
      .contains('Sign in')
      .parent('a')
      .should('have.attr', 'href', '/login');
  });

  it('should have a clickable Audio, Video, Feed, Social and Info tabs that change url', () => {
    cy.get('[data-test="tab--audio"]').click();
    cy.location('pathname').should('eq', '/audio');
    cy.get('[data-test="tab--feed"]').click();
    cy.location('pathname').should('eq', '/feed');
    cy.get('[data-test="tab--video"]').click();
    cy.location('pathname').should('eq', '/video');
    cy.get('[data-test="tab--social"]').click();
    cy.location('pathname').should('eq', '/social');
    cy.get('[data-test="tab--info"]').click();
    cy.location('pathname').should('eq', '/');
  });
});