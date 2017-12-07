const {FuseBox} = require('fuse-box');

const fuse = FuseBox.init({
    homeDir:'.',
    output:'dist/$name.js'
})
fuse.bundle("polyfills").instructions(`> src/common/Polyfills.ts`).globals({'webextension-polyfill': 'browser'})
fuse.bundle('page').instructions(">![src/PageInclude.ts]").watch('src/**')
fuse.bundle('extension').instructions(">![src/ExtensionUI.ts]").watch('src/**')

fuse.run()