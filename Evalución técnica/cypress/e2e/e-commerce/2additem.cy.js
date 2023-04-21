//const { it } = require ('./cypress/e2e/e-commerce/login.cy.js')
describe('Add to Cart Buttons', () => {
    beforeEach('Visit the Login Page', ()=>{
        cy.wait(5000)
        cy.visit('https://www.saucedemo.com/')
      })
    it('should click the first add-to-cart button', () => {

        cy.get("#user-name").type("standard_user").should('have.value',"standard_user")
        cy.get("#password").type("secret_sauce").should('have.value',"secret_sauce")
        cy.get("#login-button").click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
       
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    })

})
