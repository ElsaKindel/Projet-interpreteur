//import { EventEmitter } from 'node:events';
const EventEmitter = import('events');
const { default: inquirer } = import('inquirer');
class MyEmitter extends eventEmitter {}


const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');

/*const {} = require("fs");

  const path = process.cwd();
  console.log(path);*/


/*  const inquirer = require('inquirer');


  inquirer.prompt([
    {
      name: "faveReptile",
      message: "What is your favorite reptile ? "
    },
  ])
  .then(answers => {
    console.info("Answer:", answers.faveReptile);
  });*/