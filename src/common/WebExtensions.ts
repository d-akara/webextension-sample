// future use
//browser.tabs.executeScript(tab.id, {code:"document.body.appendChild(document.createElement('script')).src = 'url';"})

interface ExtensionMessage {
    event:string,
    content:Object
}
export function sendMessageActiveTab(message:ExtensionMessage) {
    return browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        return browser.tabs.sendMessage(tabs[0].id, message)
    });
}

export function subscribeMessages(event:string, onMessage:(message:ExtensionMessage, sender:browser.runtime.MessageSender)=>any) {
    browser.runtime.onMessage.addListener((eMessage, eSender, eCallback)=>{
       if (eMessage.event === event) return onMessage(eMessage, eSender);
    });
}