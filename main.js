

let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
// The number of loops to perform (what if the array changes?)
// let loopCount = 5;

// // Keep track of which band we're on in the loop
// let currentBand = "";

// // Keep track of which veggie we're on in the loop
// let currentVeggie = "";

// // Get a reference to the appropriate DOM element for bands
// let bandElement = document.getElementById(name);

// // Get a reference to the appropriate DOM element for vegetables
// let veggieElement = ???;

// Start looping
// for (let loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
// for (let loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
    // Add the band names into the correct <div>
//   currentBand = ???;

  // Add the veggie names into the correct <div>
//   currentVeggie = ???;
// }
// Loop through the two arrays provided (bands and vegetables) 
// and output each element in the arrays into their corresponding 
// HTML <div> element. Ensure that each item is in a block 
// element (e.g. li, div, p. etc...)



const place = function(items, parName) {
    // for each thing in items, find element whose id matches name and put that in an li tag
    for (let i = 0; i < items.length; i++){
        const matchingElement = document.getElementById(parName);
        const listItem = document.createElement("LI");
        const listText = document.createTextNode(items[i]);
        listItem.appendChild(listText);
        matchingElement.appendChild(listItem)
    }

}

place (bands, "boy-bands"); 
place (vegetables, "vegetables")

