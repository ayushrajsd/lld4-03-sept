let person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

let greetLater = person.greet.bind(person); // Bind `this` to the `person` object
setTimeout(greetLater, 1000); // Output after 1 second: "Hello, John"
