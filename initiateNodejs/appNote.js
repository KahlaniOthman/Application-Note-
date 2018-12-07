console.log("Starting note application")

const yargs = require('yargs')
const notes = require('./note.js')


var title=yargs.argv.title
var body=yargs.argv.body
var command=yargs.argv._[0]

if(command==="add"){
    console.log("adding note")
    notes.addingNote(title,body)

}else if(command==="remove"){
    console.log('removing note')
    notes.removeNote(title)
    
}else if(command==="read"){
    console.log("reading note")
    notes.readNote(title)


}else if(command==="list"){
    console.log("listing all notes")
    notes.getAll()
}else console.log("unknowing command was used!!")













































/*var _ = require('lodash');


const note=JSON.stringify([{"module1":"core module"},{"module2":"local module"}
,{"module3":"third module"}])

fs.writeFileSync("note.json",note)

var removeModule=module;
var objNote=fs.readFileSync("./note.json")
var objNote=JSON.parse(objNote)
 

const obj=_.remove(objNote,objNote[1])

console.log(objNote)*/
