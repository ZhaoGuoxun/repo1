const fs = require('fs');

// 判断是文件还是目录
// fs.stat('../modules/01-fs模块.js', (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('是文件:' + data.isFile());
//     console.log('是目录:' + data.isDirectory())
// })

// 创建目录
// fs.mkdir('./css', err => {
//     if (err) {
//         console.error(err);
//         return
//     }
//     console.log('创建成功');
// })

// 创建文件
// fs.writeFile('./index.html', '你好 nodejs', err => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('创建文件成功');
// });

// 追加/创建文件
// fs.appendFile('./index.html', '追加一点东西', err => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('追加成功');
// })

// 读取文件
// fs.readFile('./md5模块.js', (err, data) => {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(data.toString());
// })

// 读取目录
// fs.readdir('../modules', (err, data) => {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(data);  //可以读取目录和文件
// })

// 重命名/移动文件
// fs.rename('./a.txt', '../b.txt', err => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('移动文件成功');
// })

// 删除文件
// fs.unlink('./a.txt', err => {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log('删除文件成功');
// })

// 删除目录
fs.rmdir('./aa', err => {
    if(err) {
        console.log(err);
        return
    }
    console.log('删除目录成功');
})
