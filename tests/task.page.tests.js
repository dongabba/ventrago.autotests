import assert from 'assert';
import expect from 'expect';
import mainPage from '../pages/main.page';
import tasksPage from '../pages/tasks.page';
import { addStep } from '@wdio/allure-reporter';

describe('Тесты страницы Все задания', async ()=>{

    it('Проверка фильтра по Профессии', async ()=>{
        addStep('Открываем главную страницу')
        await mainPage.open();
        assert.equal(await mainPage.isMainPageLoaded(), true, 'Главная страница не загрузилась');
        addStep('Переходим на страницу Все заявки')
        await mainPage.goToAllTasks();
        addStep('Проверяем открытие страницы')
        assert.equal(await tasksPage.isMoneyFilterDisplayed(), true, 'Страница "Все задания" не загрузилась');
        addStep('Выставляем фильтр по профессии = Работник торгового зала')
        await tasksPage.setWorkerFilter();
        addStep('Проверяем корректность работы фильтра')
        expect(await tasksPage.getFirstVacancyFromTopList()).toContain('Работник торгового зала')
        await browser.pause(2000)  //пауза чтобы наглядно видеть что получилось на финальном шаге
    })

    it('Проверка взятия задачи в работу', async ()=>{
        addStep('Открываем главную страницу')
        await mainPage.open();
        assert.equal(await mainPage.isMainPageLoaded(), true, 'Главная страница не загрузилась');
        addStep('Переходим на страницу Все заявки')
        await mainPage.goToAllTasks();
        addStep('Проверяем открытие страницы')
        assert.equal(await tasksPage.isMoneyFilterDisplayed(), true, 'Страница "Все задания" не загрузилась');
        await tasksPage.clickCookiesAcceptButton();
        addStep('Нажимаем выбрать дату')
        await tasksPage.clickSetDataForTaskButton();
        addStep('Нажимаем взять в работу')
        await tasksPage.clickApplyToWorkBtn();
        addStep('Проверяем отображение формы авторизации')
        assert.equal(await tasksPage.isAuthFormHeaderDisplayed(), true, 'Форма авторизации не открылась');
        await browser.pause(2000)  //пауза чтобы наглядно видеть что получилось на финальном шаге
    })

});
