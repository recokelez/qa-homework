package Pages;

import Base.BaseTest;
import io.qameta.allure.Step;
import org.openqa.selenium.By;

public class LoginPage extends BaseTest {
    By txtUsername = By.cssSelector("[name='login email']");
    By txtPassword = By.cssSelector("[type='password']");
    By btnLogin = By.cssSelector("[class='q-primary q-fluid q-button-medium q-button submit']");
    By btnRegister = By.cssSelector("[class='q-secondary q-button-medium q-button tab button right']");

    @Step("fillUsername: {text}")
    public LoginPage fillUsername(String text){
        driver.findElement(txtUsername).sendKeys(text);
        return this;
    }
    @Step("fillPassword: {text}")
    public LoginPage fillPassword(String text){
        driver.findElement(txtPassword).sendKeys(text);
        return this;
    }

    @Step("clickLogin.")
    public LoginPage clickLogin(){
        driver.findElement(btnLogin).click();
        screenshot(driver);
        return this;
    }

    @Step("clickRegister.")
    public LoginPage clickRegister(){
        driver.findElement(btnRegister).click();
        return this;
    }
}
