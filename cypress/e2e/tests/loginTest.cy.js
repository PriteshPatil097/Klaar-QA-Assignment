import loginData from '../../fixtures/loginData.json'


describe("Automation flow of klaar", ()=>{
    before(()=>{
        cy.setCustomViewport(1380, 800); //custome command for set the viewport width and height
        cy.login(loginData.Login.email, loginData.Login.password) //custome 
})
    
    
    it("Login to the application",() => {
      
        



    })

})