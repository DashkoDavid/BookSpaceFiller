const fs = require ('fs');

const clearBook = 'AlicesAdventureInWonderland.txt';
const davidBook = 'DavidsAdventureInWonderland.txt';
const name = 'DavidDashko';
const text = fs.readFileSync(clearBook, 'utf8');
const spaceReplace = text.replace(/ /g, name);

//Creating David's Advantures In Wonderland
fs.writeFileSync(davidBook, spaceReplace);

console.log('Congrats! davidBook created! Here it is:' + davidBook);
