/// <reference types="cypress" />


import mainPage from "../pages/mainPage";
import registerPage from "../pages/registerPage";

const register_Page = new registerPage;
const main_page = new mainPage;


it('Fail @User', () => {

   main_page
      .goRegisterURL();

   register_Page
      .fillePosta("rec@test.com")
      .fillPassword("Asdasdasd1")
      //.click1()
      .click2()
      .click3()
      .clickCaptcha()
      .clickUyeOl()
      .errorCaptchaControl('Üyelik işlemini güvenli hale getirmek için "Ben robot değilim" alanına tıklayınız.');


})


