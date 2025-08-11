import assert from 'assert';
import mainPage from '../pages/main.page';
import tasksPage from '../pages/tasks.page';
import loginForm from '../pages/login.form';
import { addStep } from '@wdio/allure-reporter';

describe('Тесты формы авторизации', async ()=>{

    it('Проверка открытия формы ввода кода подтверждения', async ()=>{
        addStep('Открываем главную страницу')
        await mainPage.open();
        addStep('Проверяем открытие главнной страницы')
        assert.equal(await mainPage.isMainPageLoaded(), true, 'Главная страница не загрузилась');
        addStep('Переходим к форме авторизации')
        await mainPage.goToLoginForm();
        addStep('Проверяем открытие формы авторизации')
        assert.equal(await loginForm.isLoginFormDisplayed(), true, 'Форма авторизации не загрузилась');
        addStep('Вводим телефон пользователя')
        await loginForm.typePhoneNumber('9032689427');
        addStep('Соглашаемся с политиками')
        await loginForm.checkPolitics();
        addStep('Жмем кнопку далее')
        await loginForm.clcickNextButton();
        addStep('Проверяем открытие формы для ввода кода подтверждения')
        assert.equal(await loginForm.isCodeFormDisplayed(), true, 'Форма кода подтверждения не загрузилась');
        await browser.pause(2000)  //пауза чтобы наглядно видеть что получилось на финальном шаге
    })


});
