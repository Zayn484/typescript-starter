// Boolean
var isCool = true;
// Number
var total = 20;
// String
var eyeColor = 'blue';
var age = "I'm " + total + " years old";
// Array
var pets = ['cat', 'dog', 'lion'];
var birds = ['eagle', 'goose', 'sparrow'];
// Object
var wizard = {
    name: 'Ding'
};
// Undefined
var a = undefined;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any
var whatever = 'some string';
// Void
var sing = function () {
    console.log('~ ~ ~ ~');
};
// Never
var error = function () {
    throw Error('Unexpected error!');
};
var robo = function (robots) {
    console.log('FIGHT!');
};
robo({
    count: 1,
    type: 'F56'
});
var dog = {};
dog.count;
// Function
var getArmy = function (robots) {
    console.log('FIGHT');
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = '~ ~ ~ ~';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hellow, " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('rarrrr');
lion.greet();
// Union
var confused;
confused = 30;
