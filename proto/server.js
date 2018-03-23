var http = require('http');
var dispatcher = require('httpdispatcher');
const protobuf = require('/usr/lib/node_modules/protobufjs')
var querystring = require('querystring');
const userjson = require('./User.json')

var dispatcher = new dispatcher();

let userProto = protobuf.Root.fromJSON(userjson)
let user = userProto.lookup('User')

// Create a server
 http.createServer((req, res) => {
        try{
            dispatcher.dispatch(req, res)
        }catch(err){
            console.log(err)
        }
    }).listen(8081, () => {
        console.log("Server is listening on 8081!")
})

//routing
dispatcher.onGet("/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hey, this is the homepage of your server</h1>');
});

dispatcher.onGet("/welcome", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome homepage');
});

dispatcher.onPost("/addUser", (req, res) => {
    console.log("In Add User")
    let val = req.body
    console.log(val)
    console.log(req.body)
    const response = {
        status: 'success'
    }
    res.writeHead(201, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(response))
 })

dispatcher.onError((req, res) => {
    res.writeHead(404);
    res.end("Error, the URL doesn't exist");
});

