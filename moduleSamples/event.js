/*
Kyle Snow
Keyin Collage
Jan 14 2023
*/

/*
The Node.js core API is built around a concept in which
certain kinds of objects called “emitters” emit named events
that cause Function objects "listeners" to be called.

Here I will show you a very simple example of a event being created and called.
*/

// get the reference of EventEmitter class of events module

const EventEmitter = require("events");

//creating an object of EventEmitter

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// creating the function that gets called when the event gets emitted
myEmitter.on("event", () => {
  console.log("The first event has been called and ocurred ! ");
  console.log("The second event will occur in...");

  var count = 3;

  // creating a countdown for second event to start

  setTimeout(() => {
    console.log(count);
    count--;
  }, 1000);

  setTimeout(() => {
    console.log(count);
    count--;
  }, 2000);

  setTimeout(() => {
    console.log(count);
  }, 3000);
});

// raising the first event
myEmitter.emit("event");

// creating a function for the second and third event

function action2() {
  console.log("The second event occurred!");
}

function action3() {
  console.log("yet another event occurred!");
}

//calling the second event
myEmitter.on("eventTwo", action2);

//calling another function for the second event
myEmitter.on("eventTwo", action3);

//raising the second event
setTimeout(() => {
  myEmitter.emit("eventTwo");
}, 4000);
