package Pages;

import Base.BaseTest;
import io.qameta.allure.Step;
import org.openqa.selenium.By;
import org.testng.Assert;

public class RegisterPage extends BaseTest {

    By txtMail = By.cssSelector("[id='register-email']");
    By txtPassword = By.cssSelector("[id='register-password-input']");
    By btnRegister = By.cssSelector("[class='q-primary q-fluid q-button-medium q-button submit']");
    By click1 = By.cssSelector("[ty-bg-beige ty-mg-zero ty-input ty-checkbox ty-bordered]");
   // By click1 = By.cssSelector("[class='new-co-privacy-statement-for-ty-checkbox]");

    By click2 = By.cssSelector("[class='marketing-checkbox']");
    By click3 = By.cssSelector("[class='personal-checkbox']");
    By clickCaptcha = By.cssSelector("[class='recaptcha-checkbox-border']");


    @Step("filleMail. :{text}")
    public RegisterPage fillMail(String text){
        driver.findElement(txtMail).sendKeys(text);
        return this;
    }
    @Step("fillPassword. :{text}")
    public RegisterPage fillPassword(String text){
        driver.findElement(txtPassword).sendKeys(text);
        return this;
    }
    @Step("click kvkk tıklanır.")
    public RegisterPage click1(){
        driver.findElement(click1).click();
        return this;
    }
    @Step("click asd tıklanır.")
    public RegisterPage click2(){
        driver.findElement(click2).click();
        return this;
    }
    @Step("click da tıklanır.")
    public RegisterPage click3(){
        driver.findElement(click3).click();
        return this;
    }
    @Step("click Captcha tıklanır.")
    public RegisterPage clickCap(){
        driver.findElement(clickCaptcha).click();
        return this;
    }

    @Step("Register tıklanır.")
    public RegisterPage clickRegister(){
        driver.findElement(btnRegister).click();
        return this;
    }
}
