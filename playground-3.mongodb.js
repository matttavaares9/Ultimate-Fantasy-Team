/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

const database = 'PlayerPoints';
const collection = 'Points';
use(database);

db.players.insertMany([
   {
       "name": "LeBron James",
       "score": 0
   },
   {
       "name": "Kevin Durant",
       "score": 0
   },
   {
       "name": "Giannis Antetokounmpo",
       "score": 0
   },
   {
       "name": "Stephen Curry",
       "score": 0
   },
   {
       "name": "Kawhi Leonard",
       "score": 0
   },
   {
       "name": "Joel Embiid",
       "score": 0
   },
   {
       "name": "Luka Dončić",
       "score": 0
   },
   {
       "name": "James Harden",
       "score": 0
   },
   {
       "name": "Damian Lillard",
       "score": 0
   },
   {
       "name": "Nikola Jokić",
       "score": 0
   },
   {
       "name": "Anthony Davis",
       "score": 0
   },
   {
       "name": "Kyrie Irving",
       "score": 0
   },
   {
       "name": "Devin Booker",
       "score": 0
   },
   {
       "name": "Jimmy Butler",
       "score": 0
   },
   {
       "name": "De'Aaron Fox",
       "score": 0
   },
   {
       "name": "Jayson Tatum",
       "score": 0
   },
   {
       "name": "Karl-Anthony Towns",
       "score": 0
   },
   {
       "name": "Ben Simmons",
       "score": 0
   },
   {
       "name": "Zion Williamson",
       "score": 0
   },
   {
       "name": "DeMar DeRozan",
       "score": 0
   },
   {
       "name": "Bradley Beal",
       "score": 0
   },
   {
       "name": "Donovan Mitchell",
       "score": 0
   },
   {
       "name": "Jaylen Brown",
       "score": 0
   },
   {
       "name": "Ja Morant",
       "score": 0
   },
   {
       "name": "Bam Adebayo",
       "score": 0
   }
]
);