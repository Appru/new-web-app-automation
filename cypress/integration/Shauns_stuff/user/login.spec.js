context('[/login]', () => {
  const email = 'test2071@example.com';
  const password = 'supapass123';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should greet with Sign in', () => {
    cy.get('h1').contains('Sign in');
  });

  it('requires a valid email', () => {
    cy.get('button').should('be.disabled');
    cy.queryByPlaceholderText('Email').type('invalidemail');
    cy.get('button').click();
    cy.get('form').contains('Are you sure?');
    cy.queryByPlaceholderText('Email')
      .clear()
      .type(email);
  });

  it('requires a password', () => {
    cy.queryByPlaceholderText('Email')
      .clear()
      .type(email);
    cy.queryByPlaceholderText('Password').clear();
    cy.get('button').click();
    cy.get('form').contains("It's probably not nothing");
  });

  it('enables login button when email and password are valid', () => {
    cy.get('button').should('be.disabled');
    cy.queryByPlaceholderText('Email')
      .clear()
      .type(email);
    cy.queryByPlaceholderText('Password')
      .clear()
      .type(password);
    cy.get('button').should('be.enabled');
  });

  it('shows error on failed login', () => {
    cy.queryByPlaceholderText('Email')
      .clear()
      .type(email);
    cy.queryByPlaceholderText('Password')
      .clear()
      .type('?!wrong{enter}');
    cy.get('form').contains('Try again?');
  });

  it('redirect to / on successful login', () => {
    cy.queryByPlaceholderText('Email')
      .clear()
      .type(email);
    cy.queryByPlaceholderText('Password')
      .clear()
      .type(password + '{enter}');
    cy.location('pathname').should('eq', '/');
  });

  it('should test login with the faked login request', () => {
    cy.login();
  });
});