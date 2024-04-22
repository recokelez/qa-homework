class registerPage{


    errorMessageControl(Text){
        cy.get("[class='message']").should("have.text",Text);
        return this;
    }

    errorCaptchaControl(Text){
        cy.get("[class='captcha-box-error']").should("have.text",Text);
        return this;
    }

    class="captcha-box-error"
    
    fillePosta(Text){
        cy.get("[type='email']").type(Text);
        return this;
    }


    fillPassword(Text){
        cy.get("[type='password']").type(Text);
        return this;
    }
      /*click1(){
        cy.get("[class='new-co-privacy-statement-for-ty-checkbox]").click();
        return this;
    }  */
    click2(){
        cy.get("[class='marketing-checkbox']").click();
        return this;
    }
  
    click3(){
        cy.get("[class='personal-checkbox']").click();
        return this;
    }
    clickCaptcha(){
        cy.get("[class='captcha-box-wrapper']").click();
        return this;
    }
     
    clickUyeOl(){
        cy.get("[class='q-primary q-fluid q-button-medium q-button submit']").click();
        return this;
    }



}

export default registerPage;