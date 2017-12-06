
//import * as WebExtensions from '../src/common/WebExtensions'
console.log("Main Script started");

browser.runtime.onMessage.addListener(
    function (request, sender) {
        console.log(request);
        return('back at you')
    }
);
