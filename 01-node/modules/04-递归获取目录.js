const fs = require('fs');

const path = '../';
const dirpath = [];

fs.readdir(path, (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    (function getDIR(i) {
        if (i == data.length) {
            console.log(dirpath);
            return;
        }
        let f = data[i];
        fs.stat(path + '/' + f, (err, stats) => {
            if (err) {
                console.log(err);
            } else {
                if (stats.isDirectory()) {
                    dirpath.push(f);
                }
            }
            getDIR(i + 1);
        })
    })(0)

    // for (let i = 0; i < data.length; i++) {
    //     let f = data[i];
    //     fs.stat(path + '/' + f, (err, stats) => {
    //         if (err) {
    //             console.log(err);
    //             return
    //         }
    //         if (stats.isDirectory()) {
    //             dirpath.push(f);
    //             console.log(dirpath);
    //         }
    //     })
    // }

    // data.forEach(f => {
    //     fs.stat(path + '/' + f, (err, stats) => {
    //         if (err) {
    //             console.log(err);
    //             return
    //         }
    //         if (stats.isDirectory()) {
    //             dirpath.push(f);
    //             console.log(dirpath);
    //         }
    //     })
    // })
})