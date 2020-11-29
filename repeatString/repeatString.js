const repeatString = function(str, num) {
    if (num < 0){
        return 'ERROR'
    }
    return str.repeat(Math.abs(num));
}

module.exports = repeatString
