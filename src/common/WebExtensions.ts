// Interface mapping for cross browser web extension API
export interface Window {
    browser?: typeof browser;
    chrome?: typeof browser;
    msBrowser?: typeof browser;
}
declare var window:Window;
window['browser'] =  window.msBrowser || window.browser || window.chrome;

export const VERSION = 1;


//browser.tabs.executeScript(tab.id, {code:"document.body.appendChild(document.createElement('script')).src = 'url';"})