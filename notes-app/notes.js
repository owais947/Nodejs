const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title, body){
    const notes = loadNotes()

    //preventing duplicate note from being added
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Adding note successful!')
    }
    else{
        console.log('Note title taken!')
    }
}

const removeNote = function(title){
    const data = loadNotes()

    const notesToKeep = data.filter((note) => note.title !== title)

    if(notesToKeep.length !== 0){
        saveNotes(notesToKeep)
        console.log('Note deleted.')
    }
    else{
        console.log('Note to be deleted not found.')
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes...'))
    notes.forEach((note) =>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if(noteToRead){
        console.log(chalk.white.inverse(noteToRead.title))
        console.log(noteToRead.body)
    }
    else{
        console.log(chalk.red.inverse("Note not found!"))
    }
}
const loadNotes = () => {
    try{
        const data = fs.readFileSync('notes.json')
        const dataJson = data.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const notedata = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notedata)
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}