const {FuseBox} = require('fuse-box');

const fuse = FuseBox.init({
    homeDir:'.',
    output:'dist/$name.js',
    sourceMaps: {inline: true}
})
fuse.bundle("polyfills").instructions(`> src/common/Polyfills.ts`).globals({'webextension-polyfill': 'browser'})
fuse.bundle('page-proxy').instructions(">![src/PageProxy.ts]").watch('src/**')
fuse.bundle('popup').instructions(">![src/PopUp.ts]").watch('src/**')
fuse.bundle('browser-toolbar').instructions(">![src/BrowserToolbar.ts]").watch('src/**')
fuse.bundle('background').instructions(">![src/Background.ts]").watch('src/**')

fuse.run()