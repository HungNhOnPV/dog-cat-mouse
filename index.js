var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
var dog = new Dog('Milu');

try {
	cat.eat(dog);
} catch (error) {
	console.log('Error while cat eating a dog.');
}

cat.eat(mouse);

console.log(cat);