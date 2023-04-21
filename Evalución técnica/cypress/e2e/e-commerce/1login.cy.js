describe('Login Test', () => {
  beforeEach('Visit the Login Page', ()=>{
    cy.wait(5000)
    cy.visit('https://www.saucedemo.com/')
  })
  // Password Incorrect
  it('Fills username and password incorrect', () => {

      cy.get("#user-name").type("standard_user1").should('have.value',"standard_user1")
      cy.get("#password").type("secret_sauce1").should('have.value',"secret_sauce1")
      cy.get("#login-button").click()
      cy.contains('Epic sadface: Username and password do not match any user in this service')
  })
  // User locked 
  it('Fills user locked', () => {

      cy.get("#user-name").type("locked_out_user").should('have.value',"locked_out_user")
      cy.get("#password").type("secret_sauce").should('have.value',"secret_sauce")
      cy.get("#login-button").click()
      cy.contains('Epic sadface: Sorry, this user has been locked out.')
  })
   // User with problem 
  it('Fills user with problem', () => {

      cy.get("#user-name").type("problem_user").should('have.value',"problem_user")
      cy.get("#password").type("secret_sauce").should('have.value',"secret_sauce")
      cy.get("#login-button").click()
      cy.get("#react-burger-menu-btn").click()
      cy.get('#logout_sidebar_link').click()
  })  
  
    // User performance glitch
  it('Fills user performance glitch', () => {

      cy.get("#user-name").type("performance_glitch_user").should('have.value',"performance_glitch_user")
      cy.get("#password").type("secret_sauce").should('have.value',"secret_sauce")
      cy.get("#login-button").click()
      cy.get("#react-burger-menu-btn").click()
      cy.get('#logout_sidebar_link').click()
  })
    // User and password correct 
  it('Fills username and password correct', () => {

      cy.get("#user-name").type("standard_user").should('have.value',"standard_user")
      cy.get("#password").type("secret_sauce").should('have.value',"secret_sauce")
      cy.get("#login-button").click()
  })
  
module.exports = { it };
})