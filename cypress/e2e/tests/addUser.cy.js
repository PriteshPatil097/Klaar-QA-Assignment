import loginData from '../../fixtures/loginData.json'
import { addUserList } from "../../pages/addUserList";
const addUserListObj = new addUserList
import addUserData from '../../fixtures/addUserData.json'

describe('Automate Add UserFlow', ()=>{
    before(()=>{
        cy.setCustomViewport(1380, 800); //custome command for set the viewport width and height
        cy.Incorrectlogin(loginData.IncorrectLoginData.Inemail, loginData.IncorrectLoginData.Inpassword) //tried to enter invalid email and password
        cy.login(loginData.Login.email, loginData.Login.password) // custome command for login application.
        
    })

    it('Add user', ()=>{
        addUserListObj.navigateUserlist()// navigate to the userList page
        addUserListObj.fillAddUserForm(addUserData.fullName)
        addUserListObj.enterEmail(addUserData.email)
        addUserListObj.enterDepartment(addUserData.department)
        addUserListObj.selectTitle(addUserData.title)
        addUserListObj.selectManager(addUserData.selectManagerName)
        addUserListObj.SelectuserID(addUserData.userID)
        addUserListObj.selectLocation(addUserData.loc)
        addUserListObj.selectHRBP(addUserData.HRBP)
        addUserListObj.selectsendInviteMail()





    })



})