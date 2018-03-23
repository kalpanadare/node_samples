const crypto = require('crypto')
const assert = require('assert')

const princya = crypto.createDiffieHellman(2048) //createECDH('secp521r1');
const princyakey = princya.generateKeys()
//console.log(princyakey))

const kalpana = crypto.createDiffieHellman(princya.getPrime(), princya.getGenerator())//createECDH('secp521r1');
const kalpanakey = kalpana.generateKeys()
//console.log(kalpanakey)

const princyaSecret = princya.computeSecret(kalpanakey)
const kalpanaSecret = kalpana.computeSecret(princyakey)

console.log(assert.strictEqual(princyaSecret.toString('hex'),kalpanaSecret.toString('hex'))
