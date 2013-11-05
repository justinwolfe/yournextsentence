// your next sentence - justin wolfe, 9/13
// a web app to help you write your next sentence
// objects

// weights

var weights = {
		does: {
			continuity: 10,
			addition: 10,
			repetition: 10,
			digression: 10,
			focus: 15,
			character: 10,
			plot: 15,
			tone: 5,
			voice: 5,
			form: 10,
			remaining: 0
		},
		contains: {
			visual: 15,
			sensory: 10,
			colors: 10,
			things: 10,
			kinetic: 15,
			sonic: 10,
			figurative: 10,
			referential: 5,
			allusive: 5,
			interior: 10,
			remaining: 0
		},
		is: {
			fragment: 5,
			simple: 60,
			compound: 5,
			complex: 25,
			compoundcomplex: 5,
			remaining: 0
		},
};

// sentences

var sentenceDoes = {
	name: "sentenceDoes",
	type : ["continuity", "addition", "repetition", "digression", "focus", "character", "plot", "tone", "style", "form"],
	weight: [20, 20, 10, 10, 10, 10, 10, 5, 5],
	continuity: [
	"continue the thread of the previous sentence",
	"give more detail about the previous sentence",
	"move on from the previous sentence",
	"break violently from the previous sentence",
	"revise the previous sentence in a new sentence"
	],
	addition: [
	"introduce a new element",
	"introduce new information",
	"introduce a new detail",
	"show us something new",
	"tell us something new"
	],
	repetition: [
	"repeat something",
	"repeat something again",
	"create a new motif",
	"continue a motif",
	"reconsider an earlier idea"
	],
	digression: [
	"show the reader something else",
	"redirect focus",
	"tell the reader something else",
	"transition to something else",
	"look away at something else",
	"shift focus"
	],
	focus: [
	"describe what just happened",
	"describe what's happening",
	"zoom in",
	"zoom out",
	"be more specific",
	],
	character: [
	"let a character realize something",
	"let a character remember something",
	"let a character have a small epiphany",
	"let the character fantasize",
	"reveal something about a character",
	"let a character interact with the world",
	"complicate a character",
	"make a character less likeable",
	"make a character more likeable"
	],
	plot: [
	"advance the plot",
	"move the story forward",
	"keep things moving",
	"intensify the conflict",
	"increase tension"
	],
	tone: [
	"be awkward",
	"be melancholy",
	"be erotic",
	"be sad",
	"be ugly",
	"be dirty",
	"be crazy",
	"be funny",
	"be pretty",
	"be trippy",
	"be epic",
	"be mysterious",
	"be solemn"
	],
	style: [
	"make the familiar strange",
	"shift to a different register",
	"be boring (it's okay)",
	"be essayistic",
	"be thrilling",
	"be messy",
	"be spare",
	"slow down time",
	"speed up time",
	"turn up the volume",
	"fantasize about something",
	"throw in the kitchen sink"
	],
	form: [
	"start a new paragraph",
	"start a new section",
	"end the current paragraph",
	"end the current section"
	],
};

var sentenceContains = {
	name: "sentenceContains",
	type : ["visual", "sensory", "colors", "things", "kinetic", "sonic", "figurative", "referential", "allusive", "character"],
	weight: [20, 20, 10, 10, 10, 10, 10, 0, 5, 5],
	visual : [
	"a specific image", 
	"a specific, concrete image",
	"a detail about the setting",
	"a vague, unclear image", 
	"a visual detail", 
	"a small visual detail", 
	"a shift in perception", 
	"a visual texture", 
	"some kind of darkness", 
	"some kind of light", 
	"a shadow"
	],
	sensory: [
	"a comforting smell", 
	"a disgusting smell", 
	"an industrial smell", 
	"a domestic smell", 
	"a loud sound", 
	"a quiet sound", 
	"an ambient sound", 
	"an annoying sound", 
	"a dissonant sound", 
	"a beautiful sound", 
	"a rough texture", 
	"a smooth texture", 
	"a soft texture", 
	"a hard texture", 
	"a liquid", 
	"a solid", 
	"the movement of air"
	],
	colors: [
	"something blue",
	"something red",
	"something green",
	"something black",
	"something gray",
	"something white",
	"something brown",
	"something orange",
	"something purple",
	"something yellow"
	],
	things: [
	"a small object",
	"a medium-sized object",
	"a large object",
	],
	kinetic: [
	"a large physical movement", 
	"a small physical movement", 
	"an unexpected movement",
	"a small gesture", 
	"a surprising gesture", 
	"a strange gesture",
	"physical contact", 
	"touching", 
	"the use of an object", 
	"something moving"
	],
	sonic: [
	"alliteration",
	"assonance",
	"consonance"
	],
	figurative: [
	"a metaphor",
	"a simile"
	],
	referential: [
	"a word from the previous sentence",
	"a phrase from the previous sentence",
	"a word from another sentence",
	"a phrase from another sentence",
	"a word from a random page in a nearby book",
	"a phrase from a random page in a nearby book"
	],
	allusive: [
	"an allusion to another work of literature",
	"a biblical allusion",
	"a classical allusion",
	"an allusion to a work of art",
	"an allusion to history",
	"an allusion to pop culture",
	],
	character: [
	"a thought",
	"an observation",
	"a judgement",
	"a memory",
	"a dream",
	"something interesting about a character",
	]
};

var sentenceIs = {
	name: "sentenceIs",
	type : ['a fragment', 'a simple sentence', 'a complex sentence', 'a compound sentence', 'a compound/complex sentence'],
	weight : [10, 45, 30, 10, 5]
};

// special moves

var specialMoves = {
	specialDoes: [],
	specialContains: [],
};

// settings 

var settingsMenu = {
	displayed : false,
	aboutDisplayed: false,
	counter: 0,
	currentDoes: "",
	currentContains: "",
	currentIs: "",
	currentState: "does",
	specialMoves: false,
	specialMovesPercentage: 20
};
