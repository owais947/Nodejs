const yargs = require('yargs')
const readNote = require('./notes.js')
const notesutil = require('./notes.js')

yargs.version('1.1.0')
//add, remove, list, read

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesutil.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesutil.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'List of the notes',
    handler(){
        notesutil.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: 'Read the note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesutil.readNote(argv.title)
    }
})

yargs.parse()