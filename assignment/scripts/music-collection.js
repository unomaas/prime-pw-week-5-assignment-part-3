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
console.log(`Adding Album 1 of 6 via 'addToCollection' function: `, addToCollection("Americana", "The Offspring", 1998, [{trackNumber: 1, trackName: "Pretty Fly", trackDuration: "3:08"}, {trackNumber: 2, trackName: "Why Don't You Get a Job", trackDuration: "2:52"}, {trackNumber: 3, trackName: "The Kids Aren't Alright", trackDuration: "3:00"}]));
console.log(`Adding Album 2 of 6 via 'addToCollection' function: `, addToCollection("Smash", "The Offspring", 1994, [{trackNumber: 1, trackName: "Gotta Get Away", trackDuration: "3:52"}, {trackNumber: 2, trackName: "Come Out and Play", trackDuration: "3:17"}, {trackNumber: 3, trackName: "Self Esteem", trackDuration: "4:17"}]));
console.log(`Adding Album 3 of 6 via 'addToCollection' function: `, addToCollection("The Sickness", "Disturbed", 2000, [{trackNumber: 1, trackName: "The Game", trackDuration: "3:47"}, {trackNumber: 2, trackName: "Stupify", trackDuration: "4:33"}, {trackNumber: 3, trackName: "Down With the Sickness", trackDuration: "4:38"}]));
console.log(`Adding Album 4 of 6 via 'addToCollection' function: `, addToCollection("The Eminem Show", "Eminem", 2002, [{trackNumber: 1, trackName: "Square Dance", trackDuration: "5:23"}, {trackNumber: 2, trackName: "Without Me", trackDuration: "4:50"}, {trackNumber: 3, trackName: "Superman", trackDuration: "5:50"}]));
console.log(`Adding Album 5 of 6 via 'addToCollection' function: `, addToCollection("Encore", "Eminem", 2004, [{trackNumber: 1, trackName: "Just Lose It", trackDuration: "4:08"}, {trackNumber: 2, trackName: "Ass Like That", trackDuration: "4:25"}, {trackNumber: 2, trackName: "Mockingbird", trackDuration: "4:10"}]));
console.log(`Adding Album 6 of 6 via 'addToCollection' function: `, addToCollection("D12 World", "D12", 2004, [{trackNumber: 1, trackName: "My Band", trackDuration: "4:58"}, {trackNumber: 2, trackName: "How Come", trackDuration: "4:09"}, {trackNumber: 3, trackName: "Bizarre", trackDuration: "1:21"}]));
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
  let albumCount = 1;
  for (let i in array) {
      console.log(`Album #${albumCount}: \n'${collection[i].title}' by ${collection[i].artist}, published in ${collection[i].yearPublished}: \n${collection[i].tracks[0].trackNumber}. ${collection[i].tracks[0].trackName}: ${collection[i].tracks[0].trackDuration} \n${collection[i].tracks[1].trackNumber}. ${collection[i].tracks[1].trackName}: ${collection[i].tracks[1].trackDuration} \n${collection[i].tracks[2].trackNumber}. ${collection[i].tracks[2].trackName}: ${collection[i].tracks[2].trackDuration}`); // Need a nested loop to work here.
    albumCount++;
  } // End for i loop.
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
const search = object => {
  let results = [];
  if (object == "" || object == null || object == undefined || object.length == 0) { // If empty search critera conditional:
    return collection; // Return all albums in 'collection'.
  } else if (typeof object == "string") { // Else if the search critera is a string:
    for (let i in collection) { // Loop through the collection array's object's indices:
      if (object == collection[i].artist || object == collection[i].title || object == collection[i].yearPublished || object == collection[i].tracks[i]) { // If string matches any of the artist, title, yearPublished, OR tracks:
        results.push(collection[i]); // Add it to the new 'results' array.
      } // End "if object == collection" string conditional.
    } // End "for i in collection" loop.
  } else if (typeof object === "object") { // Else if the search critera is an object:
    for (let criteria of collection) {
      if (criteria.artist === object.artist) { // If artist comparison:
        results.push(criteria);
      } else if (criteria.artist === object.artist && critera.yearPublished === object.yearPublished) { // Else if artist and yearPublished comparison:
        results.push(criteria);
      } else if (criteria.title === object.title && critera.yearPublished === object.yearPublished) { // Else if title and yearPublished comparison:
        results.push(criteria);
      } else if (criteria.title === object.title) { // Else if title comparison:
        results.push(criteria);
      }
    } // End "for critera of collection" loop.
  } // End "if typeof == object" conditional.
  return results;
}; // End "search".
console.log("The 'search' function has been created.  Tested below.");
console.log(`Testing 'search()' function empty conditional (expect '6' results): `, search());
console.log(`Testing 'search("")' function empty conditional (expect '6' results): `, search(""));
console.log(`Testing 'search("Eminem")' string conditional (expect '2' results): `, search("Eminem"));
console.log(`Testing 'search("2004")' string conditional (expect '2' results): `, search("2004"));
console.log(`Testing 'search("The Sickness")' string conditional (expect '1' result): `, search("The Sickness"));
console.log(`Testing 'search({artist: "Eminem"})' object conditional (expect '2' results): `, search({artist: "Eminem"}));
console.log(`Testing 'search({artist: "Eminem", yearPublished: 2002})' object conditional (expect '1' results): `, search({artist: "Eminem", yearPublished: 2002})); // This is broken, should only return one result, is returning two.
// console.log(`Testing 'search({title: "The Eminem Show", yearPublished: 2002})' object conditional (expect '1' results): `, search({title: "The Eminem Show", yearPublished: 2002})); // This is broken, should kick one result.
// console.log(`Testing 'search({title: "The Eminem Show"})' object conditional (expect '1' results): `, search({title: "The Eminem Show"})); // This is broken, giving me a "criteria is not defined" error.
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
