const reverseString = function(str) {
    let arr = str.split("");
    let reversedArr = arr.reverse();
    return reversedArr.join("");
}

module.exports = reverseString
