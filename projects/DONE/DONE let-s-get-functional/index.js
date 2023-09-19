// #!/usr/bin/env node

'use strict';

const { result } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./patrick-henry.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(data) {
    return data.reduce((count, customer) => {
      if (customer.gender === 'male') {
        count++;
      }
      return count;
    }, 0);
  }
var femaleCount = function(data) {
    return data.reduce((count, customer) => {
      if (customer.gender === 'female') {
        count++;
      }
      return count;
    }, 0);
}

var oldestCustomer = function(array){
    let old = array.reduce((acc, curr) => acc.age > curr.age? acc = acc:acc = curr,{})

    return old.name
};

var youngestCustomer = function(array){
  let old = array.reduce((acc, curr) => acc.age < curr.age? acc = acc:acc = curr,{})

  return old.name
};

var averageBalance = function(array){
  //initialize variable
  let nums = [];
  let avg = 0
  //push all nums into an array
  for (let i = 0; i < array.length; i++){
    nums.push(array[i].balance)
  }
  // add all values and divide by array length
nums = nums.map(element => element.replace("$", "").replace(',', ''));
var sum = nums.reduce((acc, curr) => acc + parseFloat(curr), 0);
 avg = sum / nums.length;
  //return 
  return avg
}; // skip till mon

var firstLetterCount = function(array, letter){
  let result = 0;
  for (let i = 0; i < array.length; i++){
  if (array[i].name.toUpperCase().startsWith(letter.toUpperCase())){
    result += 1
  }
}
  return result
};

var friendFirstLetterCount = function(array, customer, letter){
  let result = [];
  for (let i = 0; i < array.length; i++){
    if (array[i].name === customer){
      result = array[i].friends.filter(friend => friend.name.toUpperCase().startsWith(letter.toUpperCase()))
    }
  }

  return result.length
};

var friendsCount = function(data, friendName) {
  // Initialize an empty array to store the friends' names.
  const friendNames = [];

  // Loop through each data object in the array.
  for (const item of data) {
    // Check if the friendName parameter is provided and if the current item has a 'friends' property.
    if (friendName && item.friends) {
      // Use Array.prototype.some to check if the friendName exists in the 'friends' array.
      const isFriend = item.friends.some((friend) => friend.name === friendName);
      if (isFriend) {
        friendNames.push(item.name);
      }
    }
  }

  // Sort and return the friendNames array.
  return friendNames.sort();
}

console.log(friendsCount(customers, 'Olga Newton'))

var topThreeTags = function(data){
  const tagCounts = {};

  // Count tag occurrences
  data.forEach((customer) => {
    customer.tags.forEach((tag) => {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });

  // Sort tags by count in descending order
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);

  // Return the top three tags
  return sortedTags.slice(0, 3);
};

var genderCount = function(data){
  const genderSummary = {
    male: 0,
    female: 0,
    "non-binary": 0, // Changed the key to 'nonBinary'
  };

  data.forEach((customer) => {
    const gender = customer.gender.toLowerCase(); // Convert to lowercase for consistency
    if (genderSummary.hasOwnProperty(gender)) {
      genderSummary[gender]++;
    } else {
      // Handle unknown or other genders
      genderSummary["nonBinary"]++;
    }
  });

  return genderSummary;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
