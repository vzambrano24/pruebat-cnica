describe('View to Cart', () => {
    beforeEach('Visit the Login Page', ()=>{
        cy.wait(5000)
        cy.visit('https://www.saucedemo.com/')
      })
    it('should click the add-to-cart button', () => {
       
        //Fills username and password correct
        cy.get("#user-name").type("standard_user").should('have.value',"standard_user")
        cy.get("#password").type("secret_sauce").should('have.value',"secret_sauce")
        cy.get("#login-button").click()
        //should click the first add-to-cart button
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
         //should click the second add-to-cart button
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        // should click to view cart
        cy.get('.shopping_cart_link').click()
      
    })

})
