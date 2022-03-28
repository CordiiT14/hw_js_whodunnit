//---MVP
//------Episode 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
const verdict = declareMurderer();
  console.log(verdict); 

  // prints 'Miss Scarlet' because verdict is the result of declareMurderer which accesses the object scenario, with the key murdered whos value is 'Miss Scarlet"

// -------Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// would recieve an error because you are trying to reassign the const variable murderer in the function changeMurder. 

//------Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

//prints 'First Verdict: The murderer is Mrs. Peacock' because firstVerdict is assigned the result of declareMurderer in which the variable murderer is 'Mrs Peacock'

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//would print 'Second Verdict: The murdered is Professor Plum' because secondverdict is assigned the string and interpolated variable murderer declared at the top. 

//------Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
//prints 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustart' because suspects is the result of declareAllSuspects in which suspectThree is reassigned to Colonel Mustart
console.log(`Suspect three is ${suspectThree}.`);
// //prints 'Suspect three is Mrs Peacock as it interprolates the global variable suspectThree declared at the top. 

//------Episode 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
//will print 'the weapon is the Revolver' because verdict is the result of declarWeapon which prints 'The weapon is the ${scenario.weapon}' the object scenario weapon has been changed using the changeWeapon function to the revolver before the declareWeapon function is called. 

//-----Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        murderer = 'Mrs. White';
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//prints 'The murdered is Mrs. White' because the changeMurderer function first reassigned 'Mr. Green' to murderer and then assigned Mrs. White as the murderer by calling the plottwist function within the changeMurder function. 

//------Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mr. Green';             

    const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
        murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
    }

    plotTwist();                        
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//prints 'the murderer is Mr. Green'. 
//The ChangeMurderer function reassigns the varaible murderer. 
//plotTwist creates a new local variable named murderer and assigned that colonel mustard and unexpectedOutcome changes that local murderer variable.
// Neither of those functions ever access the original and global variable murderer. 

//-----Episode 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function(room) {
        if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
        }

        const unexpectedOutcome = function(murderer) {
            if (scenario.murderer === murderer) {
            scenario.weapon = 'Candle Stick';
            }
        }

        unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
}
  
const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
}
  
changeScenario();
const verdict = declareWeapon();
console.log(verdict);
//The Weapon is Candle Stick. 
//ChangeScenario reassigns the murdered and weapon then calls plotTwist('dining room') changes murderer and calls unexpectedOutcome('colonel Mustard') which reassigns scenario.weapon to 'candel sticks'.

//-----Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//The Murderer is Proffessor Plum. 
//The murderer variable in the if block is not the same as the murderer variable declared at the top.
//Take away let in the if statement to access the global variable murderer and reassign. 
