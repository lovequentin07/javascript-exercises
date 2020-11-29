const removeFromArray = function(...args) {
    const arr = args[0]
    return arr.filter(el => !args.includes(el));
}

module.exports = removeFromArray
