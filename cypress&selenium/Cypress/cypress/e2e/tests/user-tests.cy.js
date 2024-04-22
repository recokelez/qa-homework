/// <reference types="cypress" />

import loginPage from "../pages/loginPage";
import mainPage from "../pages/mainPage";
import homePage from "../pages/homePage";
import baseLib from "../base/baseLib";


describe('User Test', () => {
   const login_page = new loginPage();
   const main_page = new mainPage();
   const home_page = new homePage();
   const base_lib = new baseLib();

   var errorMessage = "Lütfen geçerli bir e-posta adresi giriniz."
   var errorMessage2 = "E-posta adresiniz ve/veya şifreniz hatalı."
   var errorMessage3 = "Lütfen şifrenizi giriniz."

   it('Fail Username and Password', () => {

      main_page
         .goURL();

      login_page
         .fillUserName("recrec")
         .fillPassword("asdasd")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage);

   })

   it('Fail @user and Password', () => {

      main_page
         .goURL();

      login_page
         .fillUserName("rec@gmail.com")
         .fillPassword("asdasd")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage2);
   })


   it('Fail Password', () => {
      main_page
         .goURL();

      login_page
         .fillUserName("test@gmail.com")
         .clearPassword()
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage3);
   })



   it('Login Success', () => {

      main_page
         .goURL();

      login_page
         .fillUserName("UygunMail")
         .fillPassword("UygunParola")
         .clickLogin();

      home_page.titleControl();


   })

   it('maxChar', () => {

      main_page
         .goURL();

      login_page
         .fillUserName(base_lib.getRandomNumber(10))
         .fillPassword(base_lib.getRandomNumber(10))
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage);

   })

   it('minChar', () => {

      main_page
         .goURL();

      login_page
         .fillUserName("1")
         .fillPassword("1")
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage);

   })


   it('noneData', () => {

      main_page
         .goURL();

      login_page
         .clearUserName()
         .clearPassword()
         .clickLogin();

      main_page
         .errorMessageControl(errorMessage);


   })

})
