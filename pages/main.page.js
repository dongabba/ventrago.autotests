import Page from './page';

class MainPage extends Page{

    get loginLink() { return $('button[class=login-btn]'); }
    get loginBtn() { return $('button*=Вход'); }
    get allTasksLink() { return $('a*=Все задания'); }
    get forPerformanceLink() { return $('a*=Исполнителям'); }
    

    async open(){
        await browser.url('https://ventrago.ru/');
        await browser.maximizeWindow();
    }

    async isMainPageLoaded(){
        return await super.isElementDisplayed(this.loginLink, 5000); 
    }

    async goToAllTasks() {
        await this.allTasksLink.click();
    }

    async goToLoginForm() {
        await this.loginLink.click();
        await this.loginBtn.click();
    }
    

}
export default new MainPage();