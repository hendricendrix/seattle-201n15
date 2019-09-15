'use strict';

var catListEl = document.getElementById('pet-list');

var cookie = {
  name: 'cookie',
  color: 'brown',
  isLoud: false,
  sheds: true
}

var malaki = {
  name: 'malaki', 
  color: ['orange', 'white'],
  isLoud: true,
  sheds: false
}

var tangerine = {
  name: 'tangerine',
  color: ['orange', 'white'],
  isLoud: false,
  sheds: true
}

// GOAL: GET THE NAMES OF MY PETS TO APPEAR IN THE DOM

// THREE STEPS
// 1. create an element
// 2. give it content
// 2. append it to the DOM

// we need a render function that will render this to the DOM
  // create an li
  // add the content - the name of the pet
  // append it to the DOM - stick it onto the ul

var myPetsName = [cookie.name, malaki.name, tangerine.name];

function render(){
  for(var i = 0; i < myPetsName.length; i++){
    // make an li
    var liEl = document.createElement('li');

    // give it content - the name
    liEl.textContent = myPetsName[i];

    // stick it on the DOM - to the UL
    catListEl.appendChild(liEl);
  }
}


var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

const classes = `header ${ isLargeScreen() ? '' :
`icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;

var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster

function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"

function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'

var str = String.raw`Hi\n${2+3}!`;
// "Hi\n5!"

str.length;
// 6

str.split('').join(',');
// "H,i,\,n,5,!"