const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/github-vcard/runtime.js',
        './dist/github-vcard/polyfills.js',
        './dist/github-vcard/scripts.js',
        './dist/github-vcard/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/github-vcard.js');
})();
