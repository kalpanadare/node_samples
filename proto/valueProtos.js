const protobuf = require('/usr/lib/node_modules/protobufjs')
const userjson = require('./User.json')
const http = require('http')

let userProto = protobuf.Root.fromJSON(userjson)
let user = userProto.lookup('User')

var querystring = require('querystring');

var postData = querystring.stringify({
    msg: 'hello world'
});

let userValues = {
    userId : 1,
    name: 'Princya',
    email: 'princya.esther@gmail.com',
    password: 'princya'
}
let value = user.create(userValues)
let encodedValue = user.encode(value).finish()
let decodedValue = user.decode(encodedValue)
console.log(value.name)
console.log("decoded Value :"+decodedValue.email)

var options = {
    hostname: 'localhost',
    port: 8081,
    path: '/addUser',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Length': value.toString().length
    }
};

var req = http.request(options, function (res) {
    console.log('STATUS:', res.statusCode);
    console.log('HEADERS:', JSON.stringify(res.headers));

    res.setEncoding('utf8');

    res.on('data', function (chunk) {
        console.log('BODY:', chunk);
    });

    res.on('end', function () {
        console.log('No more data in response.');
    });
});

req.on('error', function (e) {
    console.log('Problem with request:', e.message);
});

req.write(value.toString())
req.end();