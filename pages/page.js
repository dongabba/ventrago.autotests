export default class Page {

    async isElementDisplayed(element, time) {
        try {
            await element.waitForDisplayed({ timeout: time })
            return true;
        } catch (err) {
            return false;
        }
    }
    
}