import React from "react";

// =======================================
// Avoiding mutation
// =======================================


// -> Use the keyword "readonly" before the type

const arrOfStrings: readonly string[] = ['a', 'b', 'c'];

arrOfStrings[0] = 'd';


// --------------------------

const purchaseOrder = {
	owner: "Kieron"
};

// Creates a type based on the shape of a purchase order:
type PurchaseOrder = typeof purchaseOrder;

// Creates a readonly array of purchase orders
const readonlyOrders: readonly PurchaseOrder[] = [purchaseOrder];

// Cannot assign an index a new value
readonlyOrders[0] = {
	owner: "Kieron",
}

// But doesn't prevent changing the data if it's an object
readonlyOrders[0].owner = 'leo'




// ----------------------------------
// Locking an object or array to avoid mutation
// ----------------------------------

// -> "as const" at the end of the initialization

const myUnchangingUser = {
	name: "Fatma",
} as const;

// When "as const" is applied to the object, then it becomes
// a object literal which doesn't change instead of a mutable object which can.

myUnchangingUser.name = "Raîssa";

// "as const" is a great tool for fixtured data, and places
// where you treat code as literals inline. "as const" also
// works with arrays:

const exampleUsers = [{name: "Brian"}, {name: "Fahrooq"}] as const;

exampleUsers[0].name = 'leo';



// =======================================
// Declare variables or functions
// =======================================

// .d.ts files contain no actual implementation, just type information.

declare const stringArray2: string[];





// =======================================
// You want to use an interface to represent an array of certain values
// =======================================


interface arrayInterf {
	[key: number]: string;		// <- index: value
}

const checkArrInterf = (input: arrayInterf) => { };
// const checkArrInterf = (input: Record<number, string>) => { };		// equivalent

// array already automatically infers it's index values to be a number
// what is here are the values, 1st has string values, second has number values
checkArrInterf(['abc', 'def']);
checkArrInterf([1, 2, 3]);



// =======================================
// When you want to pass an object to a function, and that object must have a certain property.
// Using an interface or type alias
// =======================================


interface AnyObjectButMustHaveName {
	[key: string]: any;		// <- index: value      represents all properties, using a index signature
	draw: () => void;			// <- the required property
}


const printFormattedName = (input: AnyObjectButMustHaveName) => { };

printFormattedName({age: 23, draw: () => { }});
printFormattedName({name: "joey", age: 23, draw: () => { }});



// =======================================
// When you want to pass an object to a function, and that object must have a certain property.
// Using constraint with generics
// =======================================


interface Drawable {
	draw: () => void;
}

declare function renderToScreen<Type extends Drawable>(input: Type[]): void;


renderToScreen([{name: 'leo', draw: () => { }}, {draw: () => { }}]);

// It will fail if draw is missing:
renderToScreen([{name: 'leo'}, {draw: () => { }}]);




// =======================================
// Mapped types
// =======================================



// Allows to change an existing type structure

interface Artist {
	id: number;
	name: string;
	bio: string;
}

// Desired result =>
/*
{
	id: number;
	name?: string;
	bio?: string;
}
*/


// Mapped types let you create a change in an existing type.

type MyPartialType<T> = {
	[Key in keyof T]?: T[Key];
};

type MappedArtistForEdit = MyPartialType<Artist> & {id: number};

// => equivalent
// type MappedArtistForEdit = Partial<Artist> & {id: number};


const artistData: MappedArtistForEdit = {
	// id: '0',		// <- required
	name: 'leo',
	bio: 'programmer'
};



// =======================================
// A function accepts 2 parameters, an object and a string value representing a property of that object.
// You want to make sure that the property exists in the object.
// =======================================



const getProperty = <T, K extends keyof T>(obj: T[], input: K) => {
	return obj[0][input];
};

getProperty([{name: "joey"}], "name");
getProperty([{name: "joey", age: 23}], "age");



// =======================================
// Restrict object values
// =======================================


const a = ['abc', 'def'] as const;
type aT = typeof a[number];

type aT2 = 'abc' | 'def';	// equivalent


type myElT = {
	[key: string]: aT
}

// declare const aEl: myElT;
declare const aEl: Record<string, aT>;		// Equivalent

aEl.a = 'abc';
aEl.a = 'aaa';



// =======================================
// Restrict object properties
// =======================================

// Get the interface/type from an object, to use on another object as its type
// You get the autocomplete benefit and compile time error checking


const b = {
	abc: {},
	def: {}
}

type bType<T> = {
	[Key in keyof T]: T[Key]		// <- keyof because T is an object
}

declare const bEl: bType<typeof b>;


bEl.abc = {};
bEl.zzz = {};

bEl['abc'] = {};
bEl['zzz'] = {};



// =======================================
// Restrict properties and values
// =======================================


const values = ['abc', 'def'] as const;
type IValues = typeof values[number];

const customerProps = {
	abc: {},
	def: {}
}

type IType<T> = {
	[Key in keyof T]: IValues		// <- keyof because T is an object
}

declare const customer: IType<typeof customerProps>;

customer.abc = 'abc';
customer.abc = 'zzz';

customer['abc'] = 'abc';
customer['abc'] = 'zzz';

customer.zzz = 'abc';
customer['zzz'] = 'abc';		// <- key not allowed but doesn't signal error

customer.zzz = 'zzz';
customer['zzz'] = 'zzz';		// <- key and value not allowed but doesn't signal error



// =======================================
// Unknown type
// =======================================

// Playground: https://www.typescriptlang.org/play/?q=429#example/unknown-and-never

// The idea is do declare something that might be of multiple types, and you want to guarantee that it is up
// to the user to define the type.


const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);

const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);

let testName = myOtherAccount.name;


// The object myOtherAccount cannot be used until the type has been declared to TypeScript.
// This can be used to ensure that API consumers think about their typing up-front:

type User = {name: string};
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
testName = myUserAccount.name;





// =======================================
// Never type
// =======================================

// playground: https://www.typescriptlang.org/play/?q=429#example/unknown-and-never

// Use "never" when you know that a function will never return a value.
// This is if you know that a function will/might throw an error.

// Because TypeScript supports code flow analysis, the language
// needs to be able to represent when code logically cannot happen.


const neverReturns = (): never => {
	throw new Error("Always throws, never returns");
};


// Can also be used to guarantee that all use cases are accounted for

enum Flower {
	Rose,
	Rhododendron,
	Violet,
	Daisy,
	Tulip		// <- added
}

const flowerLatinName = (flower: Flower) => {
	switch (flower) {

		case Flower.Rose:
			return "Rosa rubiginosa";
		case Flower.Rhododendron:
			return "Rhododendron ferrugineum";
		case Flower.Violet:
			return "Viola reichenbachiana";
		case Flower.Daisy:
			return "Bellis perennis";

		// case Flower.Tulip:
		// 	return "Bellis perennis";

		default:
			const _exhaustiveCheck: never = flower;		// its like saying this option should never occur
			return _exhaustiveCheck;
	}
};




// =======================================
// Narrowing
// =======================================


type APIResponses = {version: 0; msg: string} | {version: 1; message: string; status: number} | {error: string};

const handleResponse = (response: APIResponses) => {

	// Handle the error case, and then return
	if ("error" in response) {
		console.error(response.error);
		return;
	}

	// TypeScript now knows that APIResponse cannot be
	// the error type. If it were the error, the function
	// would have returned. You can verify this by
	// hovering over response below.

	if (response.version === 0) {
		console.log(response.msg);
	} else if (response.version === 1) {
		console.log(response.status, response.message);
	}
};




// =======================================
// Type widening
// =======================================

// A wider type will override the lesser type.


type WindowStates = "open" | "closed" | "minimized" | string;





// =======================================
// Tuples
// =======================================


const failingResponse = ["Not Found", 404];

const passingResponse: [string, number] = ["{}", 200];

// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).

// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.

if (passingResponse[1] === 200) {
	const localInfo = JSON.parse(passingResponse[0]);
	console.log(localInfo);
}


type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
	[0, "Adankwo", "adankwo.e@"],
	[1, "Kanokwan", "kanokwan.s@"],
	[2, "Aneurin", "aneurin.s@", "Supervisor"],
];

// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
	[staff[0], 250],
	[staff[1], 250, 260],
	[staff[0], 300, 300, 300],
];

const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];

// You can use tuples to describe functions which take
// an undefined number of parameters with types:

declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);



// =======================================
// Built in utility types
// =======================================



// Readonly<Type>

// Takes an object and makes its properties read-only.

interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}

type StickerFromAPI = Readonly<Sticker>;

/*
{
	readonly id: number;
	readonly name: string;
	readonly createdAt: string;
	readonly updatedAt: string;
	readonly submitter: undefined | string;
}
*/



// Partial<Type>

// Takes a type and converts all of its properties to optional ones.

interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}

type StickerUpdateParam = Partial<Sticker>;

/*
type StickerUpdateParam = {
	id?: number | undefined;
	name?: string | undefined;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
	submitter?: undefined | string;
}
*/



// Required<Type>

// Creates a type which converts all optional properties to required ones.

type StickerUpdateParam = {
	id?: number | undefined;
	name?: string | undefined;
	createdAt?: string | undefined;
	updatedAt?: string | undefined;
	submitter?: undefined | string;
}

type ReqStickerUpd = Required<StickerUpdateParam>;

/*
type ReqStickerUpd = {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: string;
}
*/



// Record<KeysFrom, Type>


// Creates a type which uses the list of properties from KeysFrom and gives them the value of Type.

// List which keys come from:
type NavigationPages = "home" | "stickers" | "about" | "contact";

// The shape of the data for which each of ^ is needed:
interface PageInfo {
	title: string;
	url: string;
	axTitle?: string;
}

const navigationInfo: Record<NavigationPages, PageInfo> = {
	home: {title: "Home", url: "/"},
	about: {title: "About", url: "/about"},
	contact: {title: "Contact", url: "/contact"},
	stickers: {title: "Stickers", url: "/stickers/all"},
};




// Pick<Type, Keys>

// Creates a type by picking the set of properties Keys from Type. Essentially an allow-list for extracting type information from a type.

interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}

type StickerSortPreview = Pick<Sticker, "name" | "updatedAt">;

/*
type StickerSortPreview = {
	name: string;
	updatedAt: string;
}
*/



// Omit<Type, Keys>

// Creates a type by removing the set of properties Keys from Type. Essentially a block-list for extracting type information from a type.


interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}

type StickerTimeMetadata = Omit<Sticker, "name">;

/*
type StickerTimeMetadata = {
	updatedAt: string;
	id: number;
	createdAt: string;
	submitter: undefined | string;
}
*/



// Exclude<Type, RemoveUnion>

// Works on unions.
// Creates a type where any property in Type's properties which don't overlap with RemoveUnion.


type NavigationPages = "home" | "stickers" | "about" | "contact";
type HomeNavigationPages = Exclude<NavigationPages, "home">;

// type HomeNavigationPages = "stickers" | "about" | "contact"




// Extract<Type, MatchUnion>

// Works on unions.
// Creates a type where any property in Type's properties are included if they overlap with MatchUnion.


type NavigationPages = "home" | "stickers" | "about" | "contact";
type DynamicPages = Extract<NavigationPages, "home" | "stickers">;

// type DynamicPages = "home" | "stickers"





// NonNullable<Type>

// Creates a type by excluding null and undefined from a set of properties. Useful when you have a validation check.


interface Sticker {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	submitter: undefined | string;
}
type StickerLookupResult = Sticker | undefined | null;
type ValidatedResult = NonNullable<StickerLookupResult>;

// type ValidatedResult = Sticker




// ReturnType<Type>

// Get the return type of a function.


declare function getStickerByID(id: number): Promise<StickerLookupResult>;
type StickerResponse = ReturnType<typeof getStickerByID>;

// type StickerResponse = Promise<StickerLookupResult>




// InstanceType<Type>

// Creates a type which is an instance of a class, or object with a constructor function.


class StickerCollection {
	stickers: Sticker[];
}

type CollectionItem = InstanceType<typeof StickerCollection>;

// type CollectionItem = StickerCollection



// ===================================================

// https://basarat.gitbook.io/typescript


// Rulling out "null" and "undefined"

function foo(arg: string | null | undefined) {
	if (arg != null) {
		const a = arg;
		// arg must be a string as `!=` rules out both null and undefined. 
	}
}



