export class addUserList{

    weblocators={

        selectUserList: "[data-cy='workspace-settings-nav-menu-button'] > .ant-menu-submenu > .ant-menu > ul.ng-star-inserted > :nth-child(3) > [data-cy='submenu-button']",
        addUser: "[data-cy='settings-user-list-add-user-button']",
        dropdownwindow: "[data-cy='settings-user-list-add-user-dropdown-menu']",
        selectAddUser:"[data-cy='settings-user-list-add-single-user-button']",
        //add user form
        fullName:"[data-cy='settings-add-user-full-name-text-field']",
        email:"[data-cy='settings-add-user-email-text-field']",
        department:"[data-cy='settings-add-user-select-title-dropdown-area'] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input",
        clickOpsdept: "[.ant-select-item-option-content]",
        title:"[data-cy=.settings-add-user-select-title-dropdown-area'] ",
        selectElement:"#cdk-overlay-41 > nz-option-container",
        manager:"[data-cy='settings-add-user-select-manager-dropdown-area'] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input",
        selectManagerName: ".ant-select-item-option-content",
        userID:"[data-cy='settings-add-user-id-text-field']",
        location:"[data-cy='settings-add-user-location-text-field']",
        HRBP:"[data-cy='settings-add-user-select-hrbp-dropdown-area'] > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input",
        sendInviteMail:"[data-cy='settings-add-user-modal-send-invite-mail-check-box-container'] > :nth-child(2)"


    }
    navigateUserlist(){
    
        cy.get(this.weblocators.selectUserList).click()        
        cy.get(this.weblocators.addUser).click().trigger('mouseover',{ force: true })
        cy.wait(6000)
      cy.get(this.weblocators.dropdownwindow).should('be.visible')
      cy.get(this.weblocators.selectAddUser).should('be.visible').click()
    }
    fillAddUserForm(Name){
        cy.get(this.weblocators.fullName).type(Name)
       
    }
    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }
    enterDepartment(){
        cy.get(this.weblocators.department).click()
        cy.get(this.weblocators.clickOpsdept).find().each(($ele,index, list)=>{

            if($ele.text()== 'Operations'){
                cy.wrap.click({ force: true })
            }
            else{
                cy.log("still searchinggg", $ele.text())
            }


        })
    }
    selectTitle(){
        cy.get(this.weblocators.title)
        cy.get(this.weblocators.selectElement).each(($el,index,list)=>{

            if($el.text()=='Software Dude'){
                cy.wrap($el).click({ force: true })

            }
            else{
                cy.log("still searching", $el.text())
            }
        })
             

    }
    selectManager(){
            cy.get(this.weblocators.manager)
            cy.get(this.weblocators.selectManagerName).each(($elm,index,list )=>{
                if($elm.text()== 'deepa.nayak@gamma.klaar.team (deepa.nayak@gamma.klaar.team)'){
                    cy.wrap($elm).click({ force: true })
                }
                else{
                    cy.log("stilll searchingg", $elm.text())
                }

            })

    }
    SelectuserID(UserID){
        cy.get(this.weblocators.userID).type(UserID)
    }
    selectLocation(loc){
        cy.get(this.weblocators.location).type(loc)
    }

    selectHRBP(HRBP){

        cy.get(this.weblocators.HRBP).type(HRBP)
    }

    selectsendInviteMail(){
        cy.get(this.weblocators.sendInviteMail).click()
    }
    



}