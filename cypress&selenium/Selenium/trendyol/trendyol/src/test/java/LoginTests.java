import Base.BaseTest;
import Pages.HomePage;
import Pages.LoginPage;
import Pages.MainPage;
import io.qameta.allure.Feature;
import org.testng.annotations.Test;

@Feature("Login Sceneraios")
public class LoginTests extends BaseTest
{
    LoginPage loginPage = new LoginPage();
    MainPage mainPage = new MainPage();
    HomePage homePage = new HomePage();

    @Test(description = "UserFailTest")
    public void failUserTEST(){

        loginPage
                .fillUsername("TEST QA")
                .fillPassword("TEST")
                .clickLogin();

        mainPage
                .errorMessageControl(errorMessage1);
    }

    @Test(description = "PasswordFailTest")
    public void failPasswordTEST(){
        loginPage
                .fillUsername("resulemre67@gmail.com")
                .clickLogin();

        mainPage
                .errorMessageControl(errorMessage2);
    }

    @Test(description = "NoneDataTest")
    public void noneDataTEST(){

        loginPage
                .fillUsername("")
                .fillPassword("")
                .clickLogin();

        mainPage
                .errorMessageControl(errorMessage1);
    }

    @Test(description = "MinCharTest")
    public void minimumCharTEST(){

        loginPage
                .fillUsername("1")
                .fillPassword("1")
                .clickLogin();

        mainPage
                .errorMessageControl(errorMessage1);
    }

    @Test(description = "MaxCharTest")
    public void maxCharTEST(){

        loginPage
                .fillUsername(""+createRandomNumber(10000))
                .fillPassword(""+createRandomNumber(10000))
                .clickLogin();

        mainPage
                .errorMessageControl(errorMessage1);
    }

    @Test(description = "LoginSuccess")
    public void successTEST(){

        loginPage
                .fillUsername(username)
                .fillPassword(password)
                .clickLogin();

        homePage
                .pageControl("Favorilerim");

    }
}
