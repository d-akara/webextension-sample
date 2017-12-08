
import * as WebExtensions from '../src/common/WebExtensions'
console.log("PageInclude loaded");

WebExtensions.subscribeMessages('chat', (a,b)=>'back at you')