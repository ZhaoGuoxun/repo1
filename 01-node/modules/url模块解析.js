const URL = require('url');

const api = 'https://www.baidu.com?name=zhhj&age=20';
const Url = URL.parse(api, true);

console.log(Url);
