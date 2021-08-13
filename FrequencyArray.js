const Freqquency = arr.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
//Returns the frequency of the values in an array, with key value pairs in an object.
