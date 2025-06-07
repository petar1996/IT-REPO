// Najosnovniji primer call-a

function greet(language, greeting) {
    console.log(`${greeting}, ${this.name}, you are speaking ${language}`);
}

const person = { name: "Ana" };
greet.call(person, "English");


