//FizzBuzz (LeetCode) Compatible:
/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    var NewArr = new Array();
    for(var i=1; i<=n; i++){
        if(i%3 == 0 && i%5 == 0){
       NewArr.push("FizzBuzz");
       }
    else if(i%3 == 0){
       NewArr.push("Fizz");
       }
    else if(i%5 == 0){
       NewArr.push("Buzz");
       }
      else{
        NewArr.push(`${i}`);
      }
    }
    return NewArr;
};
