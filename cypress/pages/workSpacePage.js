/// <reference types="Cypress" />


export class workspacePage{
    weblocators={


    pageTitle: "[data-cy='page-heading-field']",
    verifyHeader:"span[data-cy='page-heading-field']",
    workspaceName: "input[placeholder='Organization name']", 
    workspaceDomain: "button[class='ant-btn btn-full-width org-btn']",
    saveBtn: "button[data-cy='settings-workspace-save-changes-button']",

    selectOrgChart: ".ant-select-selector",
    chooseFilebtn: '[data-cy="settings-choose-workspace-logo-button"] > .ng-star-inserted',
    saveOrgbtn: "[data-cy='settings-organization-save-button']",
    workspacelogoSave:"#main-app > app-root > app-layout > nz-layout > nz-layout > nz-content > div > app-settings > div > nz-card.ant-card.uploadCard.round-sm.ant-card-bordered.ng-star-inserted > div > div > nz-spin > div > div > div > button:nth-child(1)"

}
checkPageTitle(){

    cy.get(this.weblocators.checkPageTitle).should('have.text', 'Workspace Details');
    cy.title().should('eq', 'Workspace Details');    

}
verifyHeader(){
cy.get(this.weblocators.verifyHeader).should('be.visible');

}
validateworkspaceNameandFields(){
    cy.get(this.weblocators.workspaceName).should('be.visible')
    cy.get(this.weblocators.workspaceDomain).should('be.visible')
    cy.get(this.weblocators.saveBtn).should('be.visible')

}
validateOrgSection(){
    cy.get(this.weblocators.selectOrgChart).should('be.visible')
    cy.get(this.weblocators.saveOrgbtn).should('be.visible')
}
addWorkspaceLogo(path){
 //   cy.get(this.weblocators.chooseFilebtn).should('be.visible')
    //cy.get(this.weblocators.Workspace_Logo).should('be.visible')
    cy.get(this.weblocators.chooseFilebtn).dblclick({ force: true }).attachFile(path)
    cy.wait(5000)
}


}