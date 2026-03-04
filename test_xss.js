const pathname = '/';
const BASE_PATH = pathname.replace(/\/[^/]*$/, '');
const path = 'javascript:alert(1)';
console.log("BASE_PATH:", BASE_PATH);
console.log("rawUrl:", BASE_PATH + path);
