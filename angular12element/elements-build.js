const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/angular12element/runtime.js',
        './dist/angular12element/polyfills.js',
        // TODO './dist/angular12element/scripts.js',
        './dist/angular12element/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/web-component-a.js');
    await fs.copyFile('./dist/angular12element/styles.css', 'elements/styles.css')
    // TODO await fs.copy('./dist/angular12element/assets/', 'elements/assets/' )

    // now "deploy" it to the outer app, so we can load it using that server. it is NOT used at compile time.
    await fs.copyFile('./elements/styles.css', '../angular14app/src/assets/styles.css')
    await fs.copyFile('./elements/web-component-a.js', '../angular14app/src/assets/web-component-a.js')

})()
