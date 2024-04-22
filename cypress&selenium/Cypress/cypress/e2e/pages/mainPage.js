class mainPage{

    goURL(){
        cy.visit("https://www.trendyol.com/giris?cb=%2F");
        return this;
    }
    goRegisterURL(){
        cy.visit("https://www.trendyol.com/uyelik?cb=%2F");
        return this;
    }

    errorMessageControl(Text){
        cy.get("[class='message']").should("have.text",Text);
        return this;
    }

  

}

export default mainPage;