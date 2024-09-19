/** Can you explain about Interface and Enum, and where will you be using, please make some examples. **/
// Creating an object 'person' that adheres to the 'Person' interface
var person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // Output: Hello, my name is John
// Enum example
// An enum (short for "enumeration") is a way to define a set of named constants. Enums are useful for representing a collection of related values.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// Function that takes a 'Direction' enum as an argument and logs a message based on the direction
function move(direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up");
            break;
        case Direction.Down:
            console.log("Moving down");
            break;
        case Direction.Left:
            console.log("Moving left");
            break;
        case Direction.Right:
            console.log("Moving right");
            break;
    }
}
move(Direction.Up); // Output: Moving up
