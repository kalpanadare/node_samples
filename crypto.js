const crypto = require('crypto')
const {createHash} = require('crypto')

const password = 'askl'
var hash = crypto.createHmac('sha256',password).digest('hex')
var hash1 = crypto.createHmac('sha256',password).update("test").digest('hex')
var hash2 = createHash('sha256').update(password).digest('hex')
console.log(hash)
console.log(hash1)

const certificate = new crypto.Certificate()
const certificate2 = crypto.Certificate()
console.log(certificate)

const spkac1sha512 = 'MIICZDCCAUwwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDGUKiE6xqFCsreRygPVnt1ZODwUKaXxgp1mWNrkWNlvdwNK088nxevVndZea3JuPIkxfNJah7muZ9ueoI2iZm6xn9kYH2eQcUeaOcnWb64t9TjMYI+LbW+zeGfyYV6Wgq8m0ExhzQWIbi8flAJAsV8VUbk6fb1a/gdfq8Sx6WYu5ttuN6p3YT+h7gijw5bcmZIzUKfESOpiYSVnARfOjtQ6IJFB0FqK5CKdYP01ZPz8p5Kn35wOkbwusk81CgRWmZhs1WoRJOCm3eE/kR5ou/6ACWB3P55DGopxyVdYsaVyyZ/TPGt6Hn/gzLQ08vyLWge6qBkVXNlWAt+yW42HR9PAgMBAAEWJGVhOGRkMjZmLTA0MTQtNGY2Yy05NGIzLTU5NjJhODBlYTc5ZDANBgkqhkiG9w0BAQ0FAAOCAQEAQCn+RvC/Ak78AOnO7YGEpqsmNO36p6cmiaxryyOcRRQbrkKRpjbjP/KkpWUELdlyVjkVnGTMIMMLxAfbvkVR+Pe3FWwfbKTs5oToVxo1NfH+h495ijS5u/PRBIDJtLnC5ggUo2hAQDppyNeyuh23oljT9+U3EDG9dDO1x01dSEUf003IqBxgLU59TOzs5+ouxISRqT7ww8DE57mWRKEQsnegKpgSka6dI7JcHFrDuV2cFN/Zha9Iyk9kE4Ox8saWa8rGZ7dL2GH4Q3PCZoTftruoyF9P7kF8qhZ8m2AfJL+6k8D2W7qRYL4LE/EmAQR9a4rN1Wd/xVlANevMrdqpnw==';
var buffer = new Buffer(spkac1sha512)
const publickey = certificate.exportPublicKey(buffer).toString('utf8');
console.log(`Verify Public Key : ${certificate.verifySpkac(buffer)}`)
console.log(`export Challenge : ${certificate.exportChallenge(buffer)} `)
console.log(`publickey : ${publickey}`)








