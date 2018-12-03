const darkTheme = require('../../../src/app/layout/themes/dark');
const lightTheme = require('../../../src/app/layout/themes/light');

const tabAccountSelector = '[data-test="tab--account"]';
const tabBarSelector = '[data-test="channel-tabs"]';

const sizes = [
  [1920, 1080],
  [1280, 1024],
  [1024, 768]
  // [800, 600],
  // [640, 480],
  // [300, 640]
];

context('[/] - authenticated - channel tabs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('contains a tab bar', () => {
    cy.get(tabBarSelector).should('be.visible');
  });

  it('contains an account drop down menu that opens and toggle theme change item', () => {
    cy.login();

    sizes.forEach(size => {
      cy.viewport(size[0], size[1]);

      // open dropdown
      cy.get(tabAccountSelector)
        .should('exist')
        .click();

      // theme should be dark
      const darkBg = rgbArrayToString(hexToRgb(darkTheme.background));
      cy.contains('Change theme')
        .parent()
        .should('be.visible')
        .should('have.css', 'background-color')
        .and('eq', darkBg);

      // toggle theme to light
      cy.contains('Change theme').click();

      cy.get(tabAccountSelector)
        .should('exist')
        .click();

      // check theme changes
      const lightBg = rgbArrayToString(hexToRgb(lightTheme.background));
      cy.contains('Change theme')
        .parent()
        .should('be.visible')
        .should('have.css', 'background-color')
        .and('eq', lightBg);

      // change it back
      cy.contains('Change theme').click();
    });
  });

  it('opens a drop down and successfully logs out', () => {
    sizes.forEach(size => {
      cy.login();
      cy.viewport(size[0], size[1]);
      cy.get(tabAccountSelector).click();
      cy.contains('Logout').click();
      cy.get('a').contains('Subscribe');
      cy.get('a').contains('Sign in');
    });
  });
});

const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));

const rgbArrayToString = rgb => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;