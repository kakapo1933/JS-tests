/** Can you explain about Interface and Enum, and where will you be using, please make some examples. **/

// Interface example
// An interface defines the structure of an object. It specifies the types of properties and methods that an object should have.
interface Person {
    name: string;
    age: number;
    greet(): void;
}

// Creating an object 'person' that adheres to the 'Person' interface
const person: Person = {
    name: "John",
    age: 30,
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is John

// Enum example
// An enum (short for "enumeration") is a way to define a set of named constants. Enums are useful for representing a collection of related values.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// Function that takes a 'Direction' enum as an argument and logs a message based on the direction
function move(direction: Direction) {
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
