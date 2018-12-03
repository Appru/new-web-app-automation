  context('login in check', () => {
        beforeEach(() => {
          cy.visit('https://imogenheap.supapass.com/login');
        });



        it('should   login', () => {
            cy.get('input[type=text]').type('jem@supapass.com');
            cy.get('input[type=password]').type('1million');
            cy.get('button')
              .contains('Sign in')
              .click();
            cy.url().should('eq', 'https://imogenheap.supapass.com/')
          });


        it('wrong password give eror message', () => {
            cy.get('input[type=text]').type('jem@supapass.com');
            cy.get('input[type=password]').type('8FaLu?ifdsdfdsfdsfsdfsdfCtq6yuEz');
            cy.get('button')
              .contains('Sign in')
              .click();
              cy.get('form').should('contain', 'Try again?');
            
           
          });

  });



  
    