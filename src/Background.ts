import * as WebExtensions from '../src/common/WebExtensions'

console.log('Background loaded')

browser.commands.onCommand.addListener(function(command) {
    console.log("command:", command);
});