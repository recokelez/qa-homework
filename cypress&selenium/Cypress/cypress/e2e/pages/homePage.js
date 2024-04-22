class homePage{


    titleControl(){

    cy.get("[class='link account-user']").should("have.text",'Hesabım')

    return this;
}


}

export default homePage;