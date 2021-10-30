describe("Test app", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
// Token is saved
        cy.saveLocalStorage();
    });

    it("Logins a user", () => {
// Assign
        cy.visit("/login");

// Act
        cy.findByRole("textbox", { name: /email/i }).type("cypress@test.com");
        cy.get("#enter-password").type("testtest");
        cy.findByTestId("login-button").click();

// We see the login page (Assert)
        cy.findByText(/welcome/i).should("exist");
    });

    it("Add a todo item", () => {
// "Assign"
        const randomNum = Math.floor(Math.random() * 1000000000);

// Act
        cy.get("#enter-todo").type("This is a random number: " + randomNum);
        cy.findByTestId("enter-todo-button").click();

// Assert
        cy.contains(randomNum).should("exist");
    });
});