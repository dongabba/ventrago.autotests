import Page from './page';

class LoginForm extends Page{

    get loginFormHeader() { return $('h2*=Вход для исполнителя'); }
    get phoneNumberInput() { return $('.form-input'); }
    get nextButton() { return $('button*=Далее'); }
    get checkmarks() { return $$('.checkmark'); }
    get codeFormHeader() { return $('h3*=Введите код')}

    async isLoginFormDisplayed(){
        return await super.isElementDisplayed(this.loginFormHeader, 5000); 
    }

    async typePhoneNumber(number) {
        await this.phoneNumberInput.setValue(number)
    }
    
    async checkPolitics() {
        await this.checkmarks[0].click();
        await this.checkmarks[1].click();
    }

    async clcickNextButton() {
        await this.nextButton.click();
    }

    async isCodeFormDisplayed() {
        return await super.isElementDisplayed(this.codeFormHeader, 5000);
    }
    

}
export default new LoginForm();