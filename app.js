/*
  Initial version of the test app
*/
let Mod_Dog = require('./dog.js');
let Mod_Cat = require('./cat.js');

console.log('App is starting');

Mod_Dog.bark();

Mod_Cat.miaow();
Mod_Cat.stroke(7);

console.log('App has finally finished');

