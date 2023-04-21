describe('End purchase', () => {
    beforeEach('Visit the Login Page', ()=>{
        cy.wait(5000)
        cy.visit('https://www.saucedemo.com/')
      })
    it('Complete the checkout', () => {
       
        //Fills username and password correct
        cy.get("#user-name").type("standard_user").should('have.value',"standard_user")
        cy.get("#password").type("secret_sauce").should('have.value',"secret_sauce")
        cy.get("#login-button").click()
        //should click the first add-to-cart button
        cy.get("#add-to-cart-sauce-labs-backpack").click()
         //should click the second add-to-cart button
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        // should click to view cart
        cy.get('.shopping_cart_link').click()
        // should click to checkout and Complete the form
        cy.get("#checkout").click()
        cy.get("#first-name").type("Victoria").should('have.value',"Victoria")
        cy.get("#last-name").type("Zambrano").should('have.value',"Zambrano")
        cy.get("#postal-code").type("170306").should('have.value',"170306")
        cy.get("#continue").click()
        // should end purchase
        cy.get("#finish").click()
        cy.get("#back-to-products").click()
        // Logout
        cy.get("#react-burger-menu-btn").click()
        cy.get('#logout_sidebar_link').click()

      
    })

})