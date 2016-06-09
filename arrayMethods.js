// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
//1, 10, 2, 21, 3, 4, 40, 5, 7, 7, 76, 805, 81
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//1 pass
var nameArray = [];
nameArray.push('Kyle', 'Uyehara');

//2 pass
genericNumberArray.push(6, 7, 8, 9, 10);

//3 pass
var popResult = colors.pop();

//4 pass
scrambledWords.reverse();

//5 pass
phoneNumber.reverse();

//6 pass
var nextOrder = orderQueue.shift();

//7 pass
mixedNums.sort();

//8 pass
mixedWords.sort();

//9 pass
var notFruit = fruitCollection.splice(1, 3);

//10 pass
gemBox.splice(8, 4);
gemBox.splice(5, 2);

//11 pass
upToTen.splice(2, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//12 pass
brownOnly.splice(1, 5, "brown", "brown", "brown");

//13 pass
var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);

//14 pass
var randomThingsArray = genericNumberArray.concat(colors);