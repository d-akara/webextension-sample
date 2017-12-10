import { EventSource } from './common/WebExtensions';

import * as WebExtensions from '../src/common/WebExtensions'
console.log("PageProxy loaded");

WebExtensions.subscribeMessages('toolbar.event', (a,b)=>{
    console.log('page include received: ', a, b)
    return 'reply from PageProxy'
})

WebExtensions.subscribeMessages('popup.event', (a,b)=>{
    console.log('page include received: ', a, b)
    return 'reply from PageProxy'
})

WebExtensions.sendMessage({event:'page.event', content:'message from PageProxy'}).then(reply=>console.log(reply))
