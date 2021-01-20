const mkdirp = require('mkdirp');

mkdirp('./upload').then(() => {
    console.log('创建成功');    
}, err => {
    console.log(err);
})