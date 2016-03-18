/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ... the entire window object
// * because ... the function whatIsThis isn't a method of any object for this to pull information from, so this is returning the default object, window




// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is ... the entire window object
// * because ... because window is the specified object




// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is ... the inAnObject object
// * because ... test1 is immediately inside the inAnObject object




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ... an error occurred
// * because ... test1 is not defined inside anotherObject




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ... the anotherObject
// * because ... this2 is immediately inside the anotherObject object




// * Problem 6
// whatIsThis.call();
// * "this" is ... the entire window object
// * because ... the call method isn't calling anything, so it's just returning the window object. Noticing a theme here..




// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ... the trickyTricky object
// * because ... that's what the .call method is calling




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ... the trickyTricky object
// * because ... that's still what the .call method is calling




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ... the confusing object. Heh.
// * because ... that's what the .call method is calling




// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ... the confusing object
// * because ... that's still what the .call method is calling




// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ... the trickyTricky object
// * because ... the trickyTricky object is what apply is working on




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ... the confusing object
// * because ... the confusing object is what apply is working on




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ... an error occurred
// * because ... apply was misused




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ... the entire window object
// * because ... this is being applied to the only object it can be, so in this case, it's defaulting to the window object




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ... an error occurred
// * because ... there is no test3 defined in inAFunction




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ... the entire window object
// * because ... the newObject isn't being interacted with, it's just being declared. So this is referring to the Window object instead




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ...First the window object, then the inAFunction function
// * because ... test3 is inside the newObject object




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ... the trickyTricky object
// * because ... inAnObject is calling the trickyTricky object, this is deferring to trickyTricky




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ... the confusing object. great name choice, btw.
// * because ... inAnObject and anotherObject are applying the changes of confusing, this is deferring to the confusing object 