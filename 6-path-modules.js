const path = require('path');
console.log(path.sep);

// file path joining
const filepath = path.join('/slive/','documents','node_practice','6-path-modules.js');
console.log(filepath);

// base file path of filepath
const base = path.basename(filepath);
console.log(base);

// absolute path
const abs = path.resolve(__dirname,'5-os-modules.js');
console.log(abs);
