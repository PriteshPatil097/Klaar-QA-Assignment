import loginData from '../../fixtures/loginData.json'

import { workspacePage } from '../../pages/workSpacePage'
const workSpacePageObj = new workspacePage

describe("Automate workspace setting", ()=>{
before(()=>{
    cy.setCustomViewport(1380, 800); //custome command for set the viewport width and height
 //   cy.Incorrectlogin(loginData.IncorrectLoginData.Inemail, loginData.IncorrectLoginData.Inpassword) //tried to enter invalid email and password
    cy.login(loginData.Login.email, loginData.Login.password) // custome command for login application.
    cy.fixture("Asset 1.png").then(function (data) {
        this.data = data;
      });
})
     it('should display required elements', () => {

            workSpacePageObj.verifyHeader() // validate the header of the web page.
            workSpacePageObj.validateworkspaceNameandFields() // validate the workspaceName and fields.
            workSpacePageObj.validateOrgSection() // validate the org section.
            workSpacePageObj.validateOrgSection()
           // workSpacePageObj.addWorkspaceLogo()// Validate and click on the file choose button.
           const fileName = 'Asset 1.png'       
           workSpacePageObj.addWorkspaceLogo(fileName)// Validate and click on the file choose button.
         });
     it.skip('Upload workspacelogo',function(){

        


     })


    })
