var eventConfig = require('./config.js').events;
var Events = require('events');
var events = new Events();

events.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

events.on(eventConfig.GREET, function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
events.emit(eventConfig.GREET);

