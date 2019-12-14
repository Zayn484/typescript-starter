// Boolean
let isCool: boolean = true;

// Number
const total: number = 20;

// String
const eyeColor: string = 'blue';
const age: string = `I'm ${total} years old`;

// Array
let pets: string[] = [ 'cat', 'dog', 'lion' ];
let birds: Array<string> = [ 'eagle', 'goose', 'sparrow' ];

// Object
let wizard: object = {
	name: 'Ding'
};

// Undefined
let a: undefined = undefined;

// Tuple
let basket: [string, number];
basket = [ 'basketball', 5 ];

// Enum
enum Size {
	Small = 1,
	Medium = 2,
	Large = 3
}
let sizeName: string = Size[2];

// Any
let whatever: any = 'some string';

// Void
let sing = (): void => {
	console.log('~ ~ ~ ~');
};

// Never
let error = (): never => {
	throw Error('Unexpected error!');
};

// Interface
interface Army {
	count: number;
	type: string;
	magic?: string;
}

let robo = (robots: Army) => {
	console.log('FIGHT!');
};

robo({
	count: 1,
	type: 'F56'
});

// Type assertion
interface CatArmy {
	count: number;
	type: string;
	magic: string;
}

let dog = {} as CatArmy;
dog.count;

// Function
let getArmy = (robots: Army) => {
	console.log('FIGHT');
};

// Class
class Animal {
	private sing: string = '~ ~ ~ ~';
	constructor(sound: string) {
		this.sing = sound;
	}

	greet(): string {
		return `Hellow, ${this.sing}`;
	}
}

let lion = new Animal('rarrrr');
lion.greet();

// Union
let confused: string | number;
confused = 30;
