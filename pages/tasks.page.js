import Page from './page';

class TasksPage extends Page{

    get moneyFilterInput() { return $('.common-input--money'); }
    get workerFilterCheckbox() { return $('label*=Работник торгового зала')}
    get vacancyTopList() { return $$('//li[@class=\'vacancy-card-container\']/a')}
    get setDataForTaskBtn() { return $$('button*=Выбрать дату')}
    get applyToWorkBtn() { return $('button*=Взять в работу')}
    get authFormHeader() { return $('h2*=Войдите в профиль и берите подработку')}
    get cookiesAcceptButton() { return $('.cookies-accept')}

    async isMoneyFilterDisplayed(){
        return await super.isElementDisplayed(this.moneyFilterInput, 5000); 
    }

    async setWorkerFilter() {
        await this.workerFilterCheckbox.click();
    }

    async getFirstVacancyFromTopList() {
        return await this.vacancyTopList[0].getText();
    }

    async clickSetDataForTaskButton() {
        await this.setDataForTaskBtn[0].click();
    }

    async clickApplyToWorkBtn() {
        await this.applyToWorkBtn.click();
    }

    async isAuthFormHeaderDisplayed() {
        return await super.isElementDisplayed(this.authFormHeader, 5000);
    }

    async clickCookiesAcceptButton() {
        await this.cookiesAcceptButton.click();
    }
    

}
export default new TasksPage();