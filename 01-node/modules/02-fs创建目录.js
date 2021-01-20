const fs = require('fs');

const path = './upload';
fs.stat(path, (err, data) => {
  if (err) {
    mkdir(path);
    return
  }
  if (data.isFile()) {
    fs.unlink(path, err => {
      if (err) {
        console.log(err);
        return
      }
      mkdir(path);
    })
  } else {
    console.log('目录已存在');
  }
})


function mkdir(dir) {
  fs.mkdir(dir, err => {
    if (err) {
      console.log(err);
      return
    }
    console.log('创建目录成功');
  })
}