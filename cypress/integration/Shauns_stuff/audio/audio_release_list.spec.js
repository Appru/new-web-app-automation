const selectReleaseList = '[data-test="release-list"]';
const selectReleases = '[data-test="release"]';

context('[/] - anonymous - channel tabs', () => {
  beforeEach(() => {
    cy.visit('/audio');
  });

  it('contains a list of releases that are clickable', () => {
    cy.get(selectReleaseList).should('be.visible');
    cy.get(selectReleases).each(($el, i, $list) => {
      cy.wrap($el)
        .should('be.visible')
        .find('a')
        .should('be.visible')
        .should('have.attr', 'href');
    });
  });

  it('can visit the first release', () => {
    cy.get(selectReleases)
      .first()
      .click();
    cy.contains('tracks').should('be.visible');
  });
});