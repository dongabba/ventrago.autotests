import assert from 'assert';
import mainPage from '../pages/main.page';
import tasksPage from '../pages/tasks.page';
import loginForm from '../pages/login.form';
import { addStep } from '@wdio/allure-reporter';

describe('Тесты главной страницы сайта', async ()=>{

    it('Проверка открытия главной страницы сайта', async ()=>{
        addStep('Открываем главную страницу')
        await mainPage.open();
        addStep('Проверяем открытие главнной страницы')
        assert.equal(await mainPage.isMainPageLoaded(), true, 'Главная страница не загрузилась');
        await browser.pause(2000)  //пауза чтобы наглядно видеть что получилось на финальном шагем
    })

    it('Проверка открытия формы "Авторизации"', async ()=>{
        addStep('Открываем главную страницу')
        await mainPage.open();
        addStep('Проверяем открытие главнной страницы')
        assert.equal(await mainPage.isMainPageLoaded(), true, 'Главная страница не загрузилась');
        addStep('Переходим к форме авторизации')
        await mainPage.goToLoginForm();
        addStep('Проверяем открытие формы авторизации')
        assert.equal(await loginForm.isLoginFormDisplayed(), true, 'Форма авторизации не загрузилась');
        await browser.pause(2000)  //пауза чтобы наглядно видеть что получилось на финальном шаге
    })

    it('Проверка перехода к разделу "Все задания"', async ()=>{
        addStep('Открываем главную страницу')
        await mainPage.open();
        addStep('Проверяем открытие главнной страницы')
        assert.equal(await mainPage.isMainPageLoaded(), true, 'Главная страница не загрузилась');
        addStep('Переходим на страницу Все заявки')
        await mainPage.goToAllTasks();
        addStep('Проверяем открытие страницы')
        assert.equal(await tasksPage.isMoneyFilterDisplayed(), true, 'Страница "Все задания" не загрузилась');
        await browser.pause(2000)  //пауза чтобы наглядно видеть что получилось на финальном шаге
    })

});
