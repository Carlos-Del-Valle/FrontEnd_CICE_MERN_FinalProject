describe('LogIn user', () => {
    it('Logins a user', () => {
        cy.visit('/login');
        //cy.findByPlaceholderText(/username/i).type('test');
        cy.findByPlaceholderText(/email/i).type('test@test.com');

        const password = 'Password123!';

        cy.findByPlaceholderText('Password').type(password);
        //cy.findByPlaceholderText(/confirm password/i).type(password);

        cy.findByRole('button', { name: /submit/i }).click();
    });
});