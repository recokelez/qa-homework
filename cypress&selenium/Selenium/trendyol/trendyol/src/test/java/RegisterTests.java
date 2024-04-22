import Base.BaseTest;
import Pages.HomePage;
import Pages.LoginPage;
import Pages.RegisterPage;
import io.qameta.allure.Feature;
import org.testng.annotations.Test;

@Feature("Register Test Scenarios")
public class RegisterTests extends BaseTest {

    LoginPage loginPage = new LoginPage();
    RegisterPage registerPage = new RegisterPage();
    HomePage homePage = new HomePage();

    @Test(description = "User Create")
    public void userCreate(){

       //loginPage.clickRegister();
        driver.get("https://www.trendyol.com/uyelik");

        registerPage
                .fillMail("TESTQA@")
                .fillPassword("QAasdasdTEST")
                .click1()
                .click2()
                .click3()
                .clickCap()
                .clickRegister();

        homePage.pageControl("favorilerim");
    }

    @Test(description = "Geçerli Kullanıcı Kontrolü")
    public void ValidUser(){

        loginPage
                .clickRegister();

        registerPage
                .fillMail("")
                .fillPassword("")
                .clickRegister();
    }
}
