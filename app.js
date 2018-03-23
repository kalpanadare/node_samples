const abc = require('./log')
const {log1} = require('./log')
const os = require('os')
const fs = require('fs')

console.log("Learning nodejs");

abc.log("I am here");
log1('tet','test')
//console.log(os.cpus());



fs.writeFile('asyncMessage','Hello Async Message','utf8', (err) => {
    if (err) console.log(err)
    else console.log("Async data is saved")
})


fs.writeFileSync('message','medicineName Paracetamal','utf8')
var message = fs.readFileSync('message','utf8')
console.log(message)


