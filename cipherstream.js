const crypto = require('crypto')
const fs = require('fs')

//create cipher
const cipher = crypto.createCipher('aes192','a password')

let encrypted = ''
cipher.on('readable',() => {
    const data = cipher.read()
    if (data){
        encrypted += data.toString('hex')
    }
})

cipher.on('end', () => {
    console.log("encrypted : "+encrypted)
})

cipher.write('some clear text data')
cipher.end()
/*
const input = fs.createReadStream('crypto.js');
const output = fs.createWriteStream('test.enc');

input.pipe(cipher).pipe(output);*/

