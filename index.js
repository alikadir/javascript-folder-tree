const niceJSON = dir => {
  let fs = require('fs'),
      files = fs.readdirSync(dir),
      myFile = [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      myFile.push({ [file]: niceJSON(dir + file + '/') });
    } else {
      myFile.push({ [file]: 'file' });
    }
  });
  return myFile;
};

const uglyJSON = dir => {
  let fs = require('fs'),
      files = fs.readdirSync(dir),
      myFile = [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      myFile.push({ name: file, isDirectory: true, children: uglyJSON(dir + file + '/') });
    } else {
      myFile.push({ name: file, isDirectory: false, children: [] });
    }
  });
  return myFile;
};

console.log(JSON.stringify(uglyJSON('/Users/alikadir/Desktop/')));
