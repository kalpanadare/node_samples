var zmq = require('zmq');

// socket to talk to clients
var responder = zmq.socket('rep');

responder.on('message', function(request) {
    console.log("Received request: [", request.toString(), "]");

    // do some 'work'
    setTimeout(function() {

        // send reply back to client.
        responder.send("World");
    }, 1000);
});

responder.bind('tcp://127.0.0.1:5555', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on tcp://127.0.0.1:5555");
    }
});

process.on('SIGINT', function() {
    responder.close();
});