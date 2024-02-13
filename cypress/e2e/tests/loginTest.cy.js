import loginData from '../../fixtures/loginData.json'


describe("Automation flow of klaar", ()=>{
    before(()=>{
        cy.setCustomViewport(1380, 800); //custome command for set the viewport width and height
       // cy.Incorrectlogin(loginData.IncorrectLoginData.Inemail, loginData.IncorrectLoginData.Inpassword) //tried to enter invalid email and password
        cy.login(loginData.Login.email, loginData.Login.password) // Login with valid email & password

})
    
    
    it("Login to the application",() => {
      
        



    })

})