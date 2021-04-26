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
console.log("--- Question #2. ---");
const addToCollection = (title, artist, yearPublished) => { // To practice conventionally declaring functions, since we can't use concise arrow notation in jQuery, it'd be: function addToCollection(title, artist, yearPublished) {}
  let addition = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  } // End "addition".
  collection.push(addition);
  return addition;
}; // End "addToCollection".
console.log(`Adding 'Greatest Hits by The Offspring' to 'collection' array via 'addToCollection' function: `, addToCollection("Greatest Hits", "The Offspring", 2005));
console.log(`Showing the 'collection' array (expect 1 object literal): `, collection);
console.log("\n"); // End Question #2.


// - #3.) Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
console.log("--- Question #3. ---"); // I'll just be listing CD's I bought as a teenager. :)
console.log(`Adding Album 1 of 6 via 'addToCollection' function: `, addToCollection("Americana", "The Offspring", 1998));
console.log(`Adding Album 2 of 6 via 'addToCollection' function: `, addToCollection("Smash", "The Offspring", 1994));
console.log(`Adding Album 3 of 6 via 'addToCollection' function: `, addToCollection("The Sickness", "Disturbed", 2000));
console.log(`Adding Album 4 of 6 via 'addToCollection' function: `, addToCollection("The Eminem Show", "Eminem", 2002));
console.log(`Adding Album 5 of 6 via 'addToCollection' function: `, addToCollection("Encore", "Eminem", 2004));
console.log(`Adding Album 6 of 6 via 'addToCollection' function: `, addToCollection("D12 World", "D12", 2004));
console.log(`Showing the 'collection' array (expect 7 object literals): `, collection);
console.log("\n"); // End Question #3.


// - #4.) Add a function named `showCollection`. This function should: (DONE)
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.) (DONE)
//   - Console.log the number of items in the array. (DONE)
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
console.log("--- Question #4. ---");
const showCollection = array => {
  console.log(`The number of albums in this list is: `, array.length);
  let albumCount = 1; // This is unnecessary and not requested, but I'd like my console.log to include an Album Count (e.g., "Album #1 is ... Album #2 is ..." etc.), so I'm adding a counter into the function. :)
  for (let i in array) {
    console.log(`Album #${albumCount}: ${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}.`);
    albumCount++;
  } // End "for album in collection" loop.
}; // End "showCollection".
console.log("The 'showCollection' function has been created.  Tested in next question.");
console.log("\n"); // End Question #4.


// console.log("--- Tests, Delete After ---");
// // Ryan's Comments: So I have an array of objects.  The array is "collection", and each object is an album with TITLE, ARTIST, and YEAR inside.  I need to access the array --> object --> property specifically.  What's the syntax for that.
// // console.log(array[i]); // This works and logs each object as it's listed in the array, but not in the format they want.
// console.log(collection);
// console.log(collection[0]);
// console.log(collection[0].title);
// console.log("\n"); // End Tests.



// - #5.) Test the `showCollection` function.
console.log("--- Question #5. ---");
showCollection(collection);
console.log("\n"); // End Question #5.


// - #6.) Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
console.log("--- Question #6. ---");

console.log("\n"); // End Question #6.


// - #7.) Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log("--- Question #7. ---");

console.log("\n"); // End Question #7.


// > When testing your functions, write all tests in the JavaScript file!
