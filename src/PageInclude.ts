
import * as WebExtensions from '../src/common/WebExtensions'
console.log("PageInclude loaded");

browser.runtime.onMessage.addListener(
    function (request, sender) {
        console.log(request);
        return('back at you!')
    }
);
