console.log(__filename);
console.log(__dirname);
function log(message){
	console.log(message);
}

function log1(message,message1){
    console.log(message,message1)
}

module.exports = {
 log,
    log1
}
