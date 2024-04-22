


class loginPage{

    
    fillUserName(Text){
        cy.get("[name='login email']").type(Text);
        return this;
    }


    fillPassword(Text){
        cy.get("[type='password']").type(Text);
        return this;
    }

    clearUserName(Text){
        cy.get("[name='login email']").clear();
        return this;
    }

    clearPassword(Text){
        cy.get("[type='password']").clear();
        return this;
    }
    
    clickLogin(){
        cy.get("[class='q-primary q-fluid q-button-medium q-button submit']").click();
        return this;
    }


}

export default loginPage;