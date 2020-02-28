let vacationType;
let groupSize;
let travelSuggestion;
let destination;
let result;

vacationType = prompt(
  "What kind of trip would you like to go on, musical, tropical, or adventurous?"
);

groupSize = prompt("How many are in your group?");

if (vacationType.toLowerCase() === "musical") {
  destination = "New Orleans";
}

if (vacationType.toLowerCase() === "tropical") {
  destination = "Beach Vacation in Mexico";
}

if (vacationType.toLowerCase() === "adventurous") {
  destination = "Whitewater Rafting the Grand Canyon";
}

if (groupSize >= 1 && groupSize <= 2) {
  travelSuggestion = "First Class";
}

if (groupSize >= 3 && groupSize <= 5) {
  travelSuggestion = "Helicopter";
}

if (groupSize >= 6) {
  travelSuggestion = "Charter Flight";
}

result = `Since you are a group of ${groupSize} going on a ${vacationType} trip, you should take a ${travelSuggestion} to ${destination}`;

console.log(result);
