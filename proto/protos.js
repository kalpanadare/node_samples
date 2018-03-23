const fs = require('fs')
const path = require('path')
const protobuf = require('/usr/lib/node_modules/protobufjs')
const jsonTarget = require('/usr/lib/node_modules/protobufjs/cli/targets/json')

const userProto = path.resolve("./User.proto")
const file = fs.readFileSync(userProto)
let root = new protobuf.Root()
try {
    root = root.loadSync(userProto)
} catch (e) {
    console.log('Unable to load protobuf files!')
    throw e
}

jsonTarget(root, {}, (err, output) => {
    if (err) {
        throw err
    }

    if (output !== '') {
        //process.stdout.write(output, 'utf8')
        fs.writeFile('User.json',output, 'utf8', (err) => {
            if (err)
                console.log("Unable to write file")
            else
                console.log("Successfully created User.json")
        })
    }
})