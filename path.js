const path = require('path')

console.log(path.basename('/home/princya/Documents/node/app.js','.js'))

//console.log(process.env.PATH)
console.log(path.delimiter)
//console.log(process.env.PATH.split(path.delimiter))

console.log(path.extname('/home/princya/Documents/node/app.js'))

console.log(path.format({
    root: '/ignored',
    dir: '/home/princya/Documents',
    //base: 'pencil.txt',
    name: 'pen',
    ext: '.txt'
}))

console.log(path.isAbsolute('home/princya/Documents/node/app.js'))

console.log(path.join('','',''))

console.log(path.normalize('home/princya//Documents'))

console.log(path.parse('home/princya//Documents/app.js'))

console.log('home/princya/Documents'.split(path.sep))