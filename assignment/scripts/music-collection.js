console.log('***** Music Collection *****')
console.log("\n");


// - #1.) Create a variable `collection` that starts as an empty array. (DONE)
console.log("--- Question #1. ---");
const collection = [];
console.log(`My music collection is (expect empty array): `, collection);
console.log("\n"); // End Question #1.


// - #2.) Add a function named `addToCollection`. This function should: (DONE)
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters (DONE)
//   - Create a new object having the above properties (DONE)
//   - Add the new object to the end of the `collection` array (DONE)
//   - Return the newly created object (DONE)
//   - STRETCH #2: Update the `addToCollection` function to also take an input parameter for the array of tracks. (DONE)
console.log("--- Question #2. ---");
const addToCollection = (title, artist, yearPublished, tracks) => { // To practice conventionally declaring functions, since we can't use concise arrow notation in jQuery, it'd be: function addToCollection(title, artist, yearPublished, tracks) {}
  let addition = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  } // End "addition".
  collection.push(addition);
  return addition;
}; // End "addToCollection".
console.log("The 'showCollection' function has been created.  Tested in next question.");
console.log("\n"); // End Question #2.


// - #3.) Test the `addToCollection` function: (DONE)
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.) (DONE)
//   - Console.log each album as added using the returned value. (DONE)
//   - After all are added, console.log the `collection` array. (DONE)
//   - STRETCH 2: Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. (DONE)
console.log("--- Question #3. ---"); // I'll just be listing CD's I bought as a teenager. :)
console.log(`Adding Album 1 of 6 via 'addToCollection' function: `, addToCollection("Americana", "The Offspring", 1998, [{trackName: "Pretty Fly", trackDuration: "3:08"}, {trackName: "Why Don't You Get a Job", trackDuration: "2:52"}, {trackName: "The Kids Aren't Alright", trackDuration: "3:00"}]));
console.log(`Adding Album 2 of 6 via 'addToCollection' function: `, addToCollection("Smash", "The Offspring", 1994, [{trackName: "Gotta Get Away", trackDuration: "3:52"}, {trackName: "Come Out and Play", trackDuration: "3:17"}, {trackName: "Self Esteem", trackDuration: "4:17"}]));
console.log(`Adding Album 3 of 6 via 'addToCollection' function: `, addToCollection("The Sickness", "Disturbed", 2000, [{trackName: "The Game", trackDuration: "3:47"}, {trackName: "Stupify", trackDuration: "4:33"}, {trackName: "Down With the Sickness", trackDuration: "4:38"}]));
console.log(`Adding Album 4 of 6 via 'addToCollection' function: `, addToCollection("The Eminem Show", "Eminem", 2002, [{trackName: "Square Dance", trackDuration: "5:23"}, {trackName: "Without Me", trackDuration: "4:50"}, {trackName: "Superman", trackDuration: "5:50"}]));
console.log(`Adding Album 5 of 6 via 'addToCollection' function: `, addToCollection("Encore", "Eminem", 2004, [{trackName: "Just Lose It", trackDuration: "4:08"}, {trackName: "Ass Like That", trackDuration: "4:25"}, {trackName: "Mockingbird", trackDuration: "4:10"}]));
console.log(`Adding Album 6 of 6 via 'addToCollection' function: `, addToCollection("D12 World", "D12", 2004, [{trackName: "My Band", trackDuration: "4:58"}, {trackName: "How Come", trackDuration: "4:09"}, {trackName: "Bizarre", trackDuration: "1:21"}]));
console.log(`Showing the 'collection' array (expect '6' results): `, collection);
console.log("\n"); // End Question #3.


// - #4.) Add a function named `showCollection`. This function should: (DONE)
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.) (DONE)
//   - Console.log the number of items in the array. (DONE)
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`. (DONE)
//   - STRETCH #2: Update the `showCollection` function to display the list of tracks for each album with its name and duration. (DONE)
//        TITLE by ARTIST, published in YEAR:
//          1. NAME: DURATION
//          2. NAME: DURATION
//          3. NAME: DURATION
console.log("--- Question #4. ---");
const showCollection = array => {
  console.log(`The number of albums in this list is: `, array.length);
  let albumCount = 1; // This wasn't requested, but I'd like my console.log to include an Album Count (e.g., "Album #1 is ..." etc.), so I'm adding a counter into the function. :)
  for (let i in array) {
    console.log(`Album #${albumCount}: \n'${collection[i].title}' by ${collection[i].artist}, published in ${collection[i].yearPublished}: \n${collection[i].tracks}`);
    albumCount++;
  } // End "for i in array" loop.
}; // End "showCollection".
console.log("The 'showCollection' function has been created.  Tested in next question.");
console.log("\n"); // End Question #4.


// - #5.) Test the `showCollection` function. (DONE)
console.log("--- Question #5. ---");
showCollection(collection);
console.log("\n"); // End Question #5.


// - #6.) Add a function named `findByArtist`. This function should: (DONE)
//   - Take in `artist` (a string) parameter (DONE)
//   - Create an array to hold any results, empty to start (DONE)
//   - Loop through the `collection` and add any objects with a matching artist to the array. (DONE)
//   - Return the array with the matching results. If no results are found, return an empty array. (DONE)
console.log("--- Question #6. ---");
const findByArtist = name => { // If we wanted to make this function non-specific to the "collection" array, we'd want to add an "array" parameter here as well, right?
  let results = [];
  for (let i in collection) { // And then all "collection" references to "array".
    if (name == collection[i].artist) { // If the input 'name' matches the 'collection' 'artist' name:
      results.push(collection[i]); // Add that artist to the empty array 'results'.
    } // End "if name == artist" conditional.
  } // End "for i in collection" loop.
  return results;
}; // End "findByArtist".
console.log("The 'findByArtist' function has been created.  Tested in next question.");
console.log("\n"); // End Question #6.


// - #7.) Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log("--- Question #7. ---");
console.log(`Testing 'findByArtist("Eminem")' function (expect '2' results): `, findByArtist("Eminem"));
console.log(`Testing 'findByArtist("Disturbed")' function (expect '1' result): `, findByArtist("Disturbed"));
console.log(`Testing 'findByArtist("Weird Al Yankovich")' function (expect empty array): `, findByArtist("Weird Al"));
console.log("\n"); // End Question #7.


// ### Stretch goals
// - #S1.) Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. The search criteria might look sosomething like this:
//      { artist: 'Ray Charles', year: 1957 }
//   - Return a new array of all items in the `collection` matching *all* of the search criteria. (DONE)
//   - If no results are found, return an empty array. (DONE)
//   - If there is no search object or an empty search object provided as input, then return all albums in the `collection`. (DONE)
//   - STRETCH #2: Update `search` to allow a `trackName` search criteria.
console.log("--- Stretch #1. ---");
const search = object => { // Have to figure out how to pass an object as an argument.
  let results = [];
  if (object == "" || object == null || object == undefined) { // If empty search critera conditional:
    return collection; // Return all albums in 'collection'.
  } // End empty search criteria conditional.
  // if (typeof object == "string") { // If the search critera is a string: // Technically this was never part of the question.
    for (let i in collection) {
      if (object == collection[i].artist || object == collection[i].title || object == collection[i].yearPublished || object == object == collection[i].tracks) { // If string matches any of the artist, title, yearPublished, OR tracks:
        results.push(collection[i]); // Add it to the new 'results' array.
      } // End "if object == collection" string conditional.
    } // End "for i in collection" loop.
  // } // End "if typeof == string" conditional.
  // if (typeof object == "object") { // If the search critera is an object:
  //   // .filter?  .find? .includes?  .indexOf?  Need to figure out how to use passed object literals in comparisons.
  // } // End "if typeof == object" conditional.
  return results;
}; // End "search".
console.log("The 'search' function has been created.  Tested below.");
console.log(`Testing 'search("Eminem")' function (expect '2' results): `, search("Eminem"));
console.log(`Testing 'search("2004")' function (expect '2' results): `, search("2004"));
console.log(`Testing 'search("The Sickness")' function (expect '1' result): `, search("The Sickness"));
console.log(`Testing 'search()' function empty conditional (expect '6' results): `, search());
console.log(`Testing 'search("")' function empty conditional (expect '6' results): `, search(""));
console.log(`Testing 'search({artist: "Eminem"})' function (expect '1' results): `, search({artist: "Eminem"})); // Broken, I need to figure out how to search with key value pairs... I think?
// console.log(`Testing 'search("Square Dance")' function (expect '1' result): `, search("Square Dance")); // This will never work because I have the track names hardcoded with time and numbers.
// console.log(`Testing 'search("Eminem", 2002)' function (expect '1' results): `, search("Eminem", 2002)); // Broken, is pulling two results.  // This shouldn't work anyways.
console.log("\n"); // End Stretch #1.


// - #S2.) Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property: (DONE)
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks. (DONE)
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration. (DONE)
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
console.log("--- Stretch #2. ---");
console.log("All of the functionality requests have been built into the code, above.")
console.log("\n"); // End Stretch #2.

console.log("Tests below.");
let artistTest = collection.filter(artist => collection.artist == "Eminem");
console.log(artistTest);






// Save code below

// console.log("--- Stretch #1. ---");
// const search = (artist, year) => {
//   if ((artist == "" || year == "") || (artist == null && year == null) || (artist == undefined && year == undefined)) { // If empty search critera conditional:
//     return collection; // Return all albums in 'collection'.
//   } // End empty search criteria conditional.
//   let results = [];
//   for (let i in collection) {
//     if ((artist == collection[i].artist || artist == collection[i].title || artist == collection[i].yearPublished) && (year == collection[i].artist || year == collection[i].title || year == collection[i].yearPublished)) { // If (artist matches any of the artist, title, OR yearPublished info) AND (year matches any of the artist, title, OR yearPublished info):
//       results.push(collection[i]); // Add it to the new 'results' array.
//     } // End "if object == collection" conditional.
//   } // End "for i in collection" loop.
//   return results;
// }; // End "search".
// console.log("The 'search' function has been created.  Tested below.");
// console.log(`Testing 'search("Eminem")' function (expect '2' results): `, search("Eminem")); // Broken by adding year parameter.
// console.log(`Testing 'search("2004")' function (expect '2' results): `, search("2004")); // Broken by adding year parameter.
// console.log(`Testing 'search("The Sickness")' function (expect '1' result): `, search("The Sickness")); // Broken by adding year parameter.
// console.log(`Testing 'search()' function empty conditional (expect '6' results): `, search());
// console.log(`Testing 'search("")' function empty conditional (expect '6' results): `, search(""));
// console.log(`Testing 'search("Eminem", 2002)' function (expect '1' results): `, search("Eminem", 2002));
// console.log("\n"); // End Stretch #1.


// ### Stretch goals
// - #S1.) Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. The search criteria might look sosomething like this:
//      { artist: 'Ray Charles', year: 1957 }
//   - Return a new array of all items in the `collection` matching *all* of the search criteria. (DONE)
//   - If no results are found, return an empty array. (DONE)
//   - If there is no search object or an empty search object provided as input, then return all albums in the `collection`. (DONE)
//   - STRETCH #2: Update `search` to allow a `trackName` search criteria.
// console.log("--- Stretch #1. ---");
// const search = (artist, year) => { // There's got to be a way to do a partial keyword search...
//   if ((artist == "" || year == "") || (artist == null && year == null) || (artist == undefined && year == undefined)) { // If empty search critera conditional:
//     return collection; // Return all albums in 'collection'.
//   } // End empty search criteria conditional.
//   let results = [];
//   for (let i in collection) {
//     if ((artist == collection[i].artist || artist == collection[i].title || artist == collection[i].yearPublished) || (year == collection[i].artist || year == collection[i].title || year == collection[i].yearPublished)) { // If (artist matches any of the artist, title, OR yearPublished info) AND (year matches any of the artist, title, OR yearPublished info):
//       results.push(collection[i]); // Add it to the new 'results' array.
//     } // End "if object == collection" conditional.
//   } // End "for i in collection" loop.
//   return results;
// }; // End "search".
// console.log("The 'search' function has been created.  Tested below.");
// console.log(`Testing 'search("Eminem")' function (expect '2' results): `, search("Eminem"));
// console.log(`Testing 'search("2004")' function (expect '2' results): `, search("2004"));
// console.log(`Testing 'search("The Sickness")' function (expect '1' result): `, search("The Sickness"));
// console.log(`Testing 'search()' function empty conditional (expect '6' results): `, search());
// console.log(`Testing 'search("")' function empty conditional (expect '6' results): `, search(""));
// console.log(`Testing 'search("Eminem", 2002)' function (expect '1' results): `, search("Eminem", 2002)); // Broken, is pulling two results.
// console.log("\n"); // End Stretch #1.


// console.log("--- Tests, Delete After ---");
// // Ryan's Comments: So I have an array of objects.  The array is "collection", and each object is an album with TITLE, ARTIST, and YEAR inside.  I need to access the array --> object --> property specifically.  What's the syntax for that.
// // console.log(array[i]); // This works and logs each object as it's listed in the array, but not in the format they want.
// console.log(collection);
// console.log(collection[0]);
// console.log(collection[0].title);
// console.log(collection[0].artist);
// console.log(collection[0].yearPublished);
// console.log("\n"); // End Tests.
// > When testing your functions, write all tests in the JavaScript file!
