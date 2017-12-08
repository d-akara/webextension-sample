import * as WebExtensions from '../src/common/WebExtensions'

console.log('ExtensionUI loaded')

WebExtensions.sendMessageActiveTab({ event: "chat", content: 'hello' }).then((response) => {
    console.log(response);
    const newImageHTMLElement = document.createElement("div");
    newImageHTMLElement.innerText = response as Object as string
    document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
    browser.windows.create({type:'popup', height:200, width:200})
});
