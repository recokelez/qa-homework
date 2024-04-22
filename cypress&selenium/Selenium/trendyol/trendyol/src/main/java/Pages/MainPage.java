package Pages;

import Base.BaseTest;
import io.qameta.allure.Step;
import org.openqa.selenium.By;
import org.testng.Assert;

public class MainPage extends BaseTest {

    By lblErrorMessage = By.cssSelector("[class='message']");


    @Step("Hata Mesajı Görüntülenir: {errorMessage}")
    public MainPage errorMessageControl(String errorMessage){
        String text = driver.findElement(lblErrorMessage).getText();

        Assert.assertEquals(text, errorMessage);
        return this;
    }

}
