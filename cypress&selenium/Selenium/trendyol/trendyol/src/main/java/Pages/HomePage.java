package Pages;

import Base.BaseTest;
import io.qameta.allure.Step;
import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends BaseTest {

    By objTitle = By.cssSelector("[class='account-nav-item account-favorites']");

    @Step("Sayfa Kontrolü: {title}")
    public HomePage pageControl(String title){
        String text = driver.findElement(objTitle).getText();

        Assert.assertEquals(title, text);
        return this;
    }



}
