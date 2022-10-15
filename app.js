const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

debugger
// Add command
yargs.command({
  'command': 'add',
  'describe': 'Add new note',
  builder: {
    'title': {
      'describe': 'Note title',
      'demandOption': true,
      'type': 'string'
    },
    'body': {
      'describe': 'Note Body',
      'demandOption': true,
      'type': 'string'
    }
  },
  handler: (argv) => {
    notes.addNotes(argv.title, argv.body)
  }
})

// Remove command
yargs.command({
  'command': 'remove',
  'describe': 'Remove command',
  builder: {
    'title': {
      'describe': 'Note title',
      'demandOption': true,
      'type': 'string'
    }
  },
  handler: (argv) => {
    notes.removeFile(argv.title)
  }
})

// List command 
yargs.command({
  'command': 'list',
  'describe': 'List command',
  handler: () => {
    notes.listData()
  }
})


// Reading command 
yargs.command({
  'command': 'read',
  'describe': 'Reading command',
  builder: {
    'title': {
      'describe': 'Note title',
      'demandOption': true,
      'type': 'string'
    }
  },
  handler: (argv) => {
    notes.getData(argv.title)
  }
})

yargs.parse()
