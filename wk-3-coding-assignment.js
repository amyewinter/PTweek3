//Step 1 - creating array
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Step 1a - subtracting the first element from the last element in the array and printing the result (90)
console.log(ages.pop() - ages.shift());

//Step 1b - adding a new age to the end of the ages array
ages.push(39);

//subtracting the first element from the last element in the array and printing the result (30)
console.log(ages.pop() - ages.shift());

//Step 1c - calculating the average of the values in the ages array
var aTotal = 0;
for (var i = 0; i < ages.length; i++) {
  aTotal += ages[i];
}
//printing average to console (25)
console.log(aTotal / ages.length);

//Step 2 - creating names array
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Step 2a - calculating the average number of letters per name in names
var nTotal = 0;
for (var i = 0; i < names.length; i++) {
  nTotal += names[i].length;
}
//printing average to console (3.833)
console.log(nTotal / names.length);

//Step 2b - concatenating values in names
var nString = "";
for (var i = 0; i < names.length; i++) {
  nString += names[i] + " ";
}
//printing to console (names)
console.log(nString);

//Step 3 - access the last element of an array using array[array.length - 1] or assign the value of array.pop to a variable

//Step 4 - access the first element of an array using array[0] or assign the value of array.shift to a variable

//Step 5 - adding name lengths to nameLengths array
var nameLengths = [];
for (var i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

//Step 6 - calculating sum of elements in nameLengths and printing to console (23)
var nLTotal = 0;
for (var i = 0; i < nameLengths.length; i++) {
  nLTotal += nameLengths[i];
}
console.log(nLTotal);

// see EOD for further tests and expected results

//Step 7 - function concatenates word, n times
function iConcat(word, n) {
  var wString = "";
  for (var i = 0; i < n; i++) {
    wString += word;
  }
  return wString;
}

//Step 8 - function concatenates firstName and lastName
function nameConcat(firstName, lastName) {
  return firstName + " " + lastName;
}

//Step 9 - function calculates the sum of an array and returns true if sum > 100
function is100(array) {
  var thisTotal = 0;
  for (var i = 0; i < array.length; i++) {
    thisTotal = thisTotal + array[i];
  }
  return thisTotal > 100;
}

//Step 10 - function returns average of array elements
function avgOut(array) {
  var aTotal = 0;
  for (var i = 0; i < array.length; i++) {
    aTotal = aTotal + array[i];
  }
  return aTotal / array.length;
}

//Step 11 - function compares averages of two arrays
function compareArrays(array1, array2) {
  var avg1 = avgOut(array1);
  var avg2 = avgOut(array2);

  return avg1 > avg2;
}

//Step 12 - function
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.5;
}

//Step 13 - original function selects at random from a set of answers to a question.  I love the Magic 8 Ball; who doesn't need a little guidance now and then?
function magic8Ball(question) {
  var eightBallAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "You may rely on it.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];
  return eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)];
}

//Testing and debugging

//Step 5 - result should be 3 5 3 5 4 3
console.log(nameLengths);

//Step 7 - result should be finefinefinefinefine
console.log(iConcat("fine", 5));

//Step 8 - result should be "Regina George"
console.log(nameConcat("Regina", "George"));

//Step 9 - result should be true, false
console.log(is100([90, 5, 2, 4]));
console.log(is100([2, 3]));

//Step 10 - result should be 5
console.log(avgOut([10, 2, 5, 3]));

//Step 11 - should return false, true
console.log(compareArrays([3, 4, 5], [3, 4, 5]));
console.log(compareArrays([3, 4, 17], [3, 4, 6]));

//Step 12 - result should be false
console.log(willBuyDrink(false, 11));

//Step 13 - should return random statement from array
console.log(magic8Ball("Will it rain today?"));
