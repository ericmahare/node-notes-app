const fs = require('fs')

//get all notes 
const getNotes = () => {
  try {
    const data = fs.readFileSync(`${__dirname}/notes/notes.json`)
    return JSON.parse(data)
  } catch(err) {
    return []
  }
}

// save notes 

const saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes)
  fs.writeFileSync(`${__dirname}/notes/notes.json`, jsonData)
}
// add notes
const addNotes = (title, body) => {
  const notes = getNotes();
  const duplicate = notes.find(note => note.title === title)
  if(!duplicate) {
    const newData = {
      title,
      body
    }
    notes.push(newData)
    saveNotes(notes)
  }else {
    console.log('No duplicate values allowed 🔥')
  }
}

// remove single data
const removeFile = (title) => {
  const notes = getNotes();
  const newData = notes.filter(data => data.title !== title)
  saveNotes(newData)
}

// list all files 
const listData = () => {
  const notes = getNotes();
  notes.forEach(note => {
    const {title, body} = note
    console.log(`😂 Title: ${title} Body: ${body}😹`)
  });
}

// find single data
const getData = (title) => {
  const notes = getNotes()
  const singleData = notes.find(note => note.title === title)
  console.log(`Title: ${singleData.title} Body: ${singleData.body}`)
}

module.exports = { 
  addNotes,
  removeFile,
  listData,
  getData
}

