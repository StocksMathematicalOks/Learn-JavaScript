//Method 1:
function flatten(array) {
    return array.reduce(
        function(memo, el) {
            var items = Array.isArray(el) ? flatten(el) : [el];
            return memo.concat(items);
        },
        []);
}
//Method 2:
array.flat(Infinity);
