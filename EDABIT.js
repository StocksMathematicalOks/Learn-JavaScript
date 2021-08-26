//FIND ANY VALUE IN A BINARY TREE, GIVEN THE ARRAY THAT THE BINARY TREE IS EQUAL TO.
function flatten(tree) {
    return tree.reduce(
        function(memo, el) {
            var items = Array.isArray(el) ? flatten(el) : [el];
            return memo.concat(items);
        },
        []);
}
function valueInTree(tree, val) {
    if (flatten(tree).includes(val) == true){
        return true;
    }
    else {
        return false;
    }
}


//SPLIT AN ARRAY INTO BOOMERANGS, AND THEN COUNT HOW MANY BOOMERANGS THERE ARE.
var arr1 = [3,2,3,4,5,5,4,5,4,5,4,3,4,54];
function condition(arr1){
 var boomerangCount = 0;  // we initialize a local variable to hold the count
 for (var i = 0; i < (arr1.length-2); i++) 
 {
 if (arr1[i] == arr[i+2] && arr1[i+1] != arr1[i])
 {
    boomerangCount++; // and we increment it every successful time
    //return [arr[i], arr[i+1], arr[i+2]];
 }
 }
return boomerangCount; // and after we swept the array we're done and returning it
}



//FLATTEN A NESTED ARRAY.
function flatten(array) {
    return array.reduce(
        function(memo, el) {
            var items = Array.isArray(el) ? flatten(el) : [el];
            return memo.concat(items);
        },
        []);
}



//FIND THE LENGTH OF A NESTED ARRAY.
function flatten(array) {
    return array.reduce(
        function(memo, el) {
            var items = Array.isArray(el) ? flatten(el) : [el];
            return memo.concat(items);
        },
        []);
}
var arr = [[[[[0]]],2,2,3],[3,4,3,[4,[5]],4]];
    console.log(flatten(arr).length);
    console.log(flatten(arr));



//Flattening Array Second Version:
// Fix this incorrect code so that all tests pass!
function flatten(arr) {
    return arr.reduce(
            function(memo, el) {
                var items = Array.isArray(el) ? flatten(el) : [el];
                return memo.concat(items);
            },
            []);
    }


//Check if one Array can be nested into another.
function canNest(arr1, arr2) {
    if(Math.min.apply(Math, arr1) > Math.min.apply(Math, arr2)
    && Math.max.apply(Math, arr1) < Math.max.apply(Math, arr2))
    return true;
    else {
    return false;  
        }
    }




//FINDING COMMON ELEMENTS BETWEEN TWO ARRAYS.
function commonElements(arr1, arr2) {
	const Com = arr1.filter(function(i) { return arr2.indexOf(i) !== -1;});
	const Al = Com.sort(function(a, b){return a-b});
    var deduped = Al.filter(function (el, i, Al) {
	return Al.indexOf(el) === i;
});
		return deduped;
}
//Finding Common elements between two Arrays.
return arr1.filter(val => arr2.includes(val));

//Finding the values that are not common between two Arrays.
return arr1.filter(val => arr2.includes(val));

//Flip an 1xn array into an nx1 array and vica versa.
function flipArray(arr) {
	var tempArr = new Array();
	function getArrayDepth(arr) {
    if (Array.isArray(arr)) return 1 + Math.max(...arr.map(t => 
	  getArrayDepth(t)))
    else return 0
}
	function flatten(arr) {
    return arr.reduce(
            function(memo, el) {
                var items = Array.isArray(el) ? flatten(el) : [el];
                return memo.concat(items);
            },
            []);
    }
	function Split(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr.slice(i, i + 1));
    }
}
	if (getArrayDepth(arr) > 1){
		return flatten(arr);
	}
	if (getArrayDepth(arr) == 1){
		var Raay = [];
    for (var i = 0; i < arr.length; i++) {
        Section = arr.slice(i, i + 1);
        Raay.push(Section);
    }
    return Raay;
	}
	else{
		return [];
	}
}


//HOW TO FIND THE DEPTH OF ANY ARRAY.
function depth(arr) {
    if (Array.isArray(arr)) return 1 + Math.max(...arr.map(t => 
    depth(t)))
  else return 0
}



//Concatenate to form Target Array test.(EDABIT) provides the rules for the test.
function canConcatenate(arr, target) {
	function flatten(arr) {
    return arr.reduce(
            function(memo, el) {
                var items = Array.isArray(el) ? flatten(el) : [el];
                return memo.concat(items);
            },
            []);
    }
function hasDuplicates(arr, target) {
    var valuesSoFar = [];
    for (var i = 0; i < arr.length; ++i) {
        var value = arr[i];
        /*In JavaScript indexOf(value) == -1 just show that
        there is not match to that value in the same array or another array
        instead of using "false", so when indexOf(value) !==-1 it means that
        there is another matching value/duplicate.*/
        if (valuesSoFar.indexOf(value) !== -1) {
            return true;
        }
        valuesSoFar.push(value);
    }
    return false;
}
	
	if(target.every(elem => flatten(arr).includes(elem)) === true 
		&& hasDuplicates(flatten(arr)) === false 
		&& hasDuplicates(target) === false){
		return true;
	}
	else{
		return false;
	}
}


//How to find the elements that are in one array but not in another array.
Str1Split.filter(x => !Str2Split.includes(x));


//How to divide Array into chuncks.
function chunkify(arr, size) {
	var Newrray = new Array();
	/*Notice the Loop is saying for all elements in the array, apply this 
	function only to every element which is i+size.*/
	for(i=0; i < arr.length ; i += size){
		Newrray.push(arr.slice(i, i + (size)))
	}
	return Newrray
}


//This syntax allows you to split a Number into Digits.
(n + '').split('').map((i) => { return Number(i); });


//Seven Boom! (Rules provided on EDABIT).
function sevenBoom(arr) {
    var joined = arr.join('');
    var newArray = new Array();
    var StringJoined = joined.toString();
    function SplitNum(joined){
    for (var i = 0, len = StringJoined.length; i < len; i += 1){
        newArray.push(+StringJoined.charAt(i));
        }
    return newArray;
    }

        if(SplitNum(joined).includes(7) === true){
            return "Boom!";
        }
        if(SplitNum(joined).includes(7) === false){
            return "there is no 7 in the array";
        }
    }



//Oddish or Evenish? (EDABIT)
function oddishOrEvenish(num) {
	if(num % 2 == 0){
		return "Evenish";
	}
	else{
		return "Oddish"
	}
}


//Syntax to allow you to round any number to any degree of accuracy.
return Number.parseFloat(x).toPrecision(y);


//Add the Values of the Symbols in a Matrix.
function checkScore(arr) {
	function flatten(arr) {
    return arr.reduce(
            function(memo, el) {
                var items = Array.isArray(el) ? flatten(el) : [el];
                return memo.concat(items);
            },
            []);
    }
	var FlattenedArr = flatten(arr);
	var NumElem = JSON.stringify(FlattenedArr);
  var NewElem = NumElem.replace (/"/g,'');
	function SumElements(NewElem){
        let sum = 0;
	for(i=0; i < NewElem.length; i++){
		sum += NewElem[i];
	}
}
	if(Math.sign(SumElements(NewElem)) == 1){
		return SumElements(NewElem);
	}
	if(Math.sign(SumElements(NewElem)) == -1){
		return 0;
	}
}
console.log(checkScore(arr));


//Recursion: Array Summation:
function recurAdd(arr) {
	return arr.reduce((a,b) => a + b, 0);
}

//Combine Arrays (EDABIT):
var arr1 = [5,6,4,6];
var arr2 = [4,3,5,3,5];
var arr3 = [5,34,5,2,54,2];
function combineArrays(arr1, arr2, arr3) {
	var NewRR = new Array();
	NewRR.push(arr1);
	NewRR.push(arr2);
	NewRR.push(arr3);
	return NewRR
}
console.log(combineArrays(arr1, arr2, arr3));


//Positive Dominant (EDABIT):
var a = [3,4,2,5,6,7];
function isPositiveDominant(a) {
    var NewRR = new Array();
	function CheckSign(a){
		for(i=0; i < a.length; i++){
            NewRR.push(Math.sign(a[i]));
            }
            return NewRR
		}
var arrNegative = CheckSign(a).filter(x => x == -1);
var arrPositive = CheckSign(a).filter(x => x == 1);
	if(arrNegative.length > arrPositive.length){
		return false;
	}
	if(arrNegative.length < arrPositive.length){
		return true;
	}
}
console.log(isPositiveDominant(a));


//Double Character Swap (EDABIT):
var str = "aabbccc";
var c1 = "a";
var c2 = "b";
function Push(str, c1, c2){
	var newRRay = new Array();
    newRRay.push(str);
    newRRay.push(c1);
    newRRay.push(c2);
    return newRRay;
}
function Slice(str, c1, c2){
	var newRRay2 = new Array();
    var newRRay = Push(str, c1, c2);
    for(i=0; i < newRRay.length; i++){
		newRRay2.push(newRRay.slice(i, i + 1));
	}
	return newRRay2;
}
function doubleSwap(str, c1, c2) {
    var newRRay2 = Slice(str, c1, c2)
	var twoStr = newRRay2.filter(x => newRRay2.indexOf(x) == 0);
    function flatten(twoStr) {
        return twoStr.reduce(
                function(memo, el) {
                    var items = Array.isArray(el) ? flatten(el) : [el];
                    return memo.concat(items);
                },
                []);
        }
    var NewtwoStr = flatten(twoStr);
    var value = NewtwoStr[0];
    value = value.replaceAll(c1, '~');
	value = value.replaceAll(c2, c1);
	return value.replaceAll('~',c2);
    }
console.log(doubleSwap(str, c1, c2));


//Broken KeyBoard (EDABIT):
var str1 = "beethoven";
var str2 = "affthoif5";
function findBrokenKeys(str1, str2) {
	var Str1Spp = str1.split('');
    var Str2Spp = str2.split('');
    var Al =  Str1Spp.filter(x => !Str2Spp.includes(x));
    var deduped = Al.filter(function (el, i, Al) {
	return Al.indexOf(el) === i;});
    return deduped;
}
console.log(findBrokenKeys(str1, str2));


//Sum of Missing Numbers (EDABIT):
var arr = [4, 3, 8, 1, 2];
function sumMissingNumbers(arr) {
	var Sorted = arr.sort(function(a,b){return a-b});
	var MaxVals = Math.max.apply(Math, Sorted);
  	var EleM = Array.from({length:MaxVals},(v,k)=>k+1);
	var filtered = EleM.filter(x => !Sorted.includes(x));
	var filSum = filtered.reduce((a,b) => a + b, 0)
	return filSum
}
console.log(sumMissingNumbers(arr));


//Oddly or Evenly Positioned (EDABIT):
r =[6,7,8,9];
s = "odd";
var Str1 = new Array();
var Num1 = new Array();
var Str2 = new Array();
var Num2 = new Array();
function charAtPos(r, s) {
  if(s == "even"){
    for (var i = 0; i < r.length; i++) {
    if (typeof r[i] === 'string') {
        var Joined = r.join('');
        var JoinSp = Joined.split("");
        let filtered1 = JoinSp.filter((a,i)=>i%2===0);
        return filtered1;
            }
        }
            for (var i = 0; i < r.length; i++) {
            if (typeof r[i] === 'number') {
                let filtered2 = r.filter((a,i)=>i%2===0);
                return filtered2;
                    }
                }
            }
            if(s == "odd"){
                for (var i = 0; i < r.length; i++) {
                if (typeof r[i] === 'string') {
                    var Joined2 = r.join('');
                    var JoinSp2 = Joined2.split("");
                    let filtered3 = JoinSp2.filter((a,i)=>i%2!=0);
                    return filtered3;
                        }
                    }
                        for (var i = 0; i < r.length; i++) {
                        if (typeof r[i] === 'number') {
                            let filtered4 = r.filter((a,i)=>i%2!=0);
                            return filtered4;
                                }
                            }
                        }
                    }
console.log(charAtPos(r,s));



//Leet Code Remove Duplicates from an Array:
var Max = [0,1,2,3,4];
function removeDuplicates(Max) {
    var dedupedMax = Max.filter( (el, i, Max) => Max.indexOf(el) === i);
        return dedupedMax;
}
console.log(removeDuplicates(Max));


//Find the Most Frequent Element in an Array (EDABIT):
//Find Highest Occurence (EDABIT):
var arr = [3,7,3]
function findFrequent(arr) {
	const Freqq = arr.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    var ObjectO2 = Object.keys(Freqq).reduce((a, b) => Freqq[a] > Freqq[b] ? a : b);
    return Math.floor(ObjectO2);
}
console.log(findFrequent(arr));


//Group in Order (EDABIT):
function chunkify(arr, size) {
	var Newrray = new Array();
	/*Notice the Loop is saying for all elements in the array, apply this 
	function only to every element i+size, such that we don't just apply it 
    from one element to the whole length of the array, but rather to
    the next specific element.*/
	for(i=0; i < arr.length ; i += size){
		Newrray.push(arr.slice(i, i + (size)))
	}
	return Newrray
}


//The Actual Memory Size of your USB Flash Drive (EDABIT):
var ms = "32GB";
var NewArr5 = new Array();
function actualMemorySize(ms) {
	var newMS = ms.split("");
    if(newMS.includes("M") == true && newMS.includes("B") == true){
        var value1 = "M";
        var value2 = "B";
        var newMS1M = newMS.filter(item1 => item1 !== value1);
        var newMS2M = newMS1M.filter(item2 => item2 !== value2);
    }
    if(newMS.includes("G") == true && newMS.includes("B") == true){
        var value1 = "G";
        var value2 = "B";
        var newMS1M = newMS.filter(item1 => item1 !== value1);
        var newMS2M = newMS1M.filter(item2 => item2 !== value2);
    }
	var NNMS = newMS2M.join('');
    var NNMS2 = [NNMS];
	var NumMS = NNMS2.map((i) => Number(i));
	var FinalNum = NumMS[0]-(NumMS[0]*(0.07));
    return Number.parseFloat(FinalNum).toPrecision(4);
}
console.log(actualMemorySize(ms));



//Burglary Series (15): Number of Occurrences (EDABIT):
function countNumberOfOccurrences(obj) {
    var ObjKey1 = Object.keys(obj);
    var ObjEntries1 = Object.entries(obj);
    var ObjEntries2 = ObjEntries1.flat(Infinity);
    var FinalArr = ObjEntries2.filter(x=>!ObjKey1.includes(x));
    const FreqqFinalArr = FinalArr.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
        return FreqqFinalArr;
    }
    
    
//Filter out Strings from an Array (EDABIT):
var arr = [1,2,3,"a", "b"];
function filterArray(arr) {
	var NewRR3 = new Array();
	for(i=0; i < arr.length; i++){
		if(typeof arr[i] === "string"){
			return arr.filter(i => arr[i]);
		}
	}
}
console.log(filterArray(arr));


//TheDailyByte (Stock Prices):
var prices = [3,2,4,3,5,6,7]
function BiggestProfit(prices){
    return Math.max.apply(Math,prices);
}
console.log(BiggestProfit(prices));


//Maximum value in an Array (Two Methods):
function findHighest(arr) {
	arr.sort(function(a,b){return a-b});
	return arr.pop();
}
function findHighest(arr) {
    return Math.max.apply(Math, arr);
}

//Let's sort this Array! (EDABIT):
function ascDesNone(arr, str) {
	if(str == "Asc"){
	return arr.sort(function(a,b){return a-b});
	}
	if(str == "Des"){
	return arr.sort(function(a,b){return b-a});
	}
	if(str == "None"){
	return arr;
	}
}

//Find the Missing Number (EDABIT):
function missingNum(arr) {
	var NumArr = Array.from(Array(11).keys());
	NumArr.shift();
	return NumArr.filter(x=>!arr.includes(x))[0];
}
// Find the Missing Number Second Method (EDABIT):
function missingNumA(arr) {
	arr.sort(function(a,b){return a-b});
    for(i=0;i<arr.length;i++){
        if(arr[i+1] - arr[i] !== 1){
            return (arr[i]+1);
        }
    }
}

//Return an Array of SubArrays (EDABIT):
var y = 1;
var z = "edabit";
var x = 2;
function matrix(x, y, z) {
	var NewArr = [];
	var NewArr2 = [];
	function ElemCreate(x,y,z){
	for(i=0;i<x*y;i++){
		NewArr.push(z);
	}
	return NewArr;
}
	var NewArr = ElemCreate(x,y,z);
	for(i=0;i<x;i++){
		NewArr2.push(NewArr.slice(i,i+y));
	}
	return NewArr2;
}
console.log(matrix(x,y,z));

//Sum of Odd and Even Numbers (EDABIT):
var arr = [1, 2, 3, 4, 5, 6];
function sumOddAndEven(arr) {
	var NewArr2 = [];
	var NewArr3 = [];
	for(i=0;i<arr.length;i++){
		if(arr[i]%2 == 0){
			NewArr2.push(arr[i]);
		}
		if(arr[i]%2 !== 0){
			NewArr3.push(arr[i]);
		}
	}
	var Even = NewArr2.reduce((a,b) => a+b,0);
	var Odd = NewArr3.reduce((a,b) => a+b,0);
	return [Even, Odd];
}
console.log(sumOddAndEven(arr));

//Find value in Binary Tree Second Method (EDABIT):
function valueInTree(tree, val) {
	var NewArr = tree.flat(Infinity);
	if(NewArr.includes(val) == true){
		return true;
	}
	if(NewArr.includes(val) == false){
		return false
	}
}
console.log(valueInTree(tree, val));

//Minimum and Maximum Value in BST (EDABIT):
class Node {
    constructor(data) {
      this.data = data;
      this.right = null;
      this.left = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    insert(element) {
      const node = new Node(element);
      if (!this.root) {
        this.root = node;
      } else {
        this.insertNode(this.root, node);
      }
    }
    insertNode(node, newNode) {
      if (node.data > newNode.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
      // Start
    minimum() {
          var NewArr = [];
     let current = this.root;
          while(current.left !== null){
              current = current.left;
          }
          NewArr.push(current.data);
          return Math.max.apply(Math, NewArr);
    }
    maximum() {
      var NewArr2 = [];
     let current = this.root;
          while(current.right !== null){
              current = current.right;
          }
          NewArr2.push(current.data);
          return Math.max.apply(Math, NewArr2);
    }
      // End
  }

//Reverse a String (FreeCodeCamp.org):
function reverseString(str) {
    var Str1 = str.split("");
    var NewArr = new Array();
    function Reverse(){
    for (var i = Str1.length - 1; i >= 0; i--){
      NewArr.push(Str1[i]);
          }
      return NewArr;
      }
    var NewArr = Reverse();
    var NewArr2 = NewArr.join('');
    return NewArr2;
    }
    
    console.log(reverseString("hello"))
    reverseString("hello");


//Factorialize a Number (FreeCodeCamp.org):
function factorialize(num) {
    if(num <= 1){
      return 1;
    }
    else{
      return num*factorialize(num-1);
    }
  }
  factorialize(5);


//Sum of All Numbers in a Range (FreeCodeCamp.org):
function sumAll(arr){
    var arr2 = arr.sort(function(a,b){return a-b});
    var start = arr2[0];
    var end = arr2[1];
    function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    var result = range(start, end);
    var FinalResult = result.reduce((a,b) => a+b, 0);
    return FinalResult;
    }
    console.log(sumAll([1,4]));


//Diff Two Arrays (FreeCodeCamp.org):
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(x=>!arr2.includes(x)||!arr1.includes(x));
    }
    console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//Reverse A Binary String (EDABIT):
var num = 10;
function reversedBinaryInteger(num) {
	var str = Number(num).toString(2);
	function ReverseString(){
	var Str1 = str.split("");
    var NewArr = new Array();
    function Reverse(){
    for (var i = Str1.length - 1; i >= 0; i--){
      NewArr.push(Str1[i]);
          }
      return NewArr;
      }
    var NewArr = Reverse();
    var NewArr2 = NewArr.join('');
    return NewArr2;
	}
	var NewArr2 = ReverseString();``
  var NewArr3 = [NewArr2].map((i)=>Number(i));
  var NewNum3 = NewArr3[0];
	var ReverNum = parseInt(NewNum3, 2);
  return ReverNum;
  }
console.log(reversedBinaryInteger(num));


//Three Arrays! (EDABIT):
var arr1 = [1, 2, 3]; 
var arr2 = [5, 3, 2];
var arr3 = [7, 3, 2];
function sumCommon(arr1, arr2, arr3) {
    return (arr1.concat(arr2).concat(arr3).filter(x=>!arr1.includes(x)||!arr2.includes(x)||!arr3.includes(x))).reduce((a,b)=>a+b,0);
}


//Seek and Destroy (FreeCodeCamp.org):
function destroyer(arr, ...ValstoRemove) {
    return arr.filter(item=>!ValstoRemove.includes(item));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Sort Positives, Keep Negatives (EDABIT):
var arr = [1,2,3,4,-3,-4,5,-6,7];
function Ascend(){
var NewRR = new Array();
var arr2 = arr.filter(x=>Math.sign(x)==1);
function Negatives(){
	for(i=0;i<arr.length;i++){
   if(Math.sign(arr[i]) == -1){
   		NewRR.push([arr[i]], i);
   		} 
		}
  return NewRR;
	}
  var NewRR = Negatives();
  var SortedArr = arr2.sort(function(a,b){return a-b});
 	for(i=0;i<NewRR.length;i+=2){
  SortedArr.splice(NewRR[i+1],0,NewRR[i]);
  }
  return SortedArr;
}
console.log(Ascend());

//Code for finding the biggest sum of two numbers in an array:
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }
    else{
    var NewRR = new Array();
    var Maximum = Math.max.apply(Math, nums);
    function Nested(){
    for(var i=0;i<nums.length;i++){
        if(nums[i] !== Maximum){
            NewRR.push(nums[i]+Maximum);
            }
        }
        return NewRR;
    }
    var NewRR = Nested();
    return Math.max.apply(Math, NewRR);
    }
};


//Return Largest Numbers in Arrays (FreeCodeCamp.org):
function largestOfFour(arr) {
    var NewRR = new Array();
    function SliceTest(){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
          NewRR.push(Math.max.apply(Math, arr[i]));
        }
      }
    return NewRR;
    }
    var NewRR = SliceTest();
    var FinalArr = NewRR.filter(function (el, i, NewRR) {
    return NewRR.indexOf(el) === i;});
    return FinalArr;
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//Repeat a String Repeat a String (FreeCodeCamp.org):
function repeatStringNumTimes(str, num) {
    if(Math.sign(num) == 1){
    var RepArr = Array(num).fill(str);
    var RepArrStr = RepArr.join('');
    return RepArrStr;
  }
  else {
    return "";
    }
  } 
  console.log(repeatStringNumTimes("abc", 3));


//Truncate a String (FreeCodeCamp.org):
function truncateString(str, num) {
    if (str.length > num) {
    var NewStr = str.split("");
    var NumStr = NewStr.slice(0, num);
    var NumStr2 = NumStr.join('');
    return NumStr2+'...';
    } else {
      return str;
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


//Search and Replace (FreeCodeCamp.org):
function myReplace(str, before, after) {
    var Str2 = str.split(" ");
    var IndexBef = Str2.indexOf(before);
    function startsWithCapital(before){
      return (before[0] === before[0].toUpperCase());
  }
  if(startsWithCapital(before) == true){
  function capitalizeFirstLetter(after) {
    return after[0].toUpperCase() + after.slice(1);
  }
  var NewWord = capitalizeFirstLetter(after);
  Str2.splice(IndexBef,1,NewWord);
  return Str2.join(" ");
  }
  if(startsWithCapital(before) == false){
  function decapitalizeFirstLetter(after) {
    return after[0].toLowerCase() + after.slice(1);
  }
  var NewWord = decapitalizeFirstLetter(after);
  Str2.splice(IndexBef,1,NewWord);
  return Str2.join(" ");
  }
  }  
console.log(myReplace("I think we should look up there", "up", "Down"));


//Sorted Union (FreeCodeCamp.org):
function uniteUnique(arr) {
    var concatArr = [];
    var i = 0;
    while (arguments[i]) {
      concatArr = concatArr.concat(arguments[i]);
      i++;
    }
    function flatten(concatArr) {
      return concatArr.reduce(
          function(memo, el) {
              var items = Array.isArray(el) ? flatten(el) : [el];
              return memo.concat(items);
          },
          []);
  }
  var NewArr2 = flatten(concatArr);
  var Deduped = NewArr2.filter(function (el, i, NewArr2) {
  return NewArr2.indexOf(el) === i;});
  return Deduped;
  }
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));


//Arguments Optional (FreeCodeCamp.org):
function addTogether() {
    var total = 0;
    const [first, second] = arguments;
    if (typeof(first) !== "number"){
    return undefined;
    }
    if(second === undefined){
    return (second) => addTogether(first, second);
    }
    if (typeof(second) !== "number"){
    return undefined;
    }
    else{
    for(var i=0;i<arguments.length;i++){
    total += arguments[i];
    }
    return total;
    }
    }
    console.log(addTogether(2,5));


//Remove Element from an Array (Formal Definition):
var val = 3;
var nums = [3,2,2,3];
function ValNums(nums, val) {
    var NewRR = new Array();
    for(i=0;i<nums.length;i++){
       if(nums[i]>val){
       NewRR.push(nums[i]);
       }
       if(nums[i]<val){
       NewRR.push(nums[i]);
       }
    }
    return NewRR;
};
console.log(ValNums(nums, val));


//Everything Be True (FreeCodeCamp.org):
function truthCheck(collection, pre){
    var NewRR = new Array();
    function Array1(){
    for(var i=0; i<collection.length; i++){
    NewRR.push(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre]));
    }
    return NewRR;
    }
    var NewRR = Array1();
    if(NewRR.includes(false)){
    return false;
    }
    else{
      return true;
    }
    }

//Shorcut:
function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
  }


//Missing Letters (FreeCodeCamp.org):
function fearNotLetter(str) {
    var Str2 = str.split("");
    function genCharArray(charA, charZ) {
        var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i));
        }
        return a;
    }
    var NewRR = genCharArray(Str2[0], Str2[Str2.length-1]);
    var LastVal = NewRR.filter(x=>!Str2.includes(x));
    return LastVal[0];
    }
    console.log(fearNotLetter("abce"));


//SteamRoller (FreeCodeCamp.org):
function steamrollArray(arr) {
    var concatArr = arr;
      function flatten(concatArr) {
        return concatArr.reduce(
            function(memo, el) {
  //Ternary Operator statement combined with recursive flattening implementation.
                var items = Array.isArray(el) ? flatten(el) : [el];
  //Gets the items in the array that are in separate arrays, and concatenates them into a new Array.
                return memo.concat(items);
            },
            []);
    }
    return flatten(concatArr);
  }
  steamrollArray([1, [2], [3, [[4]]]]);


//Replace All Values in a String with Another:
//Replacing all "_" with "-".
var Str1 = "asds_asdsasdnnf_asdh_n_n";
var elements = Str1.split("");
var NewRR = new Array();
function Test1(){
for(var i=0; i<elements.length;i++){
if(elements[i] == "_"){
NewRR.push(i);
}
}
return NewRR;
}
var NewRR = Test1();
function Test2(){
for(var i=0; i<NewRR.length;i++){
elements.splice(NewRR[i], 1, "-");
}
return elements.join("");
}
console.log(Test2());


//Replace All Values in a Number with Another:
//Replacing "4" with "5", using String Lietrals.
var Str1 = 1245;
var Str1 = `${Str1}`;	
var elements = Str1.split("");
var NewRR = new Array();
function Test1(){
for(var i=0; i<elements.length;i++){
if(elements[i] == "4"){
NewRR.push(i);
}
}
return NewRR;
}
var NewRR = Test1();
function Test2(){
for(var i=0; i<NewRR.length;i++){
elements.splice(NewRR[i], 1, "5");
}
return [elements.join("")].map((i)=>Number(i))[0];
}
console.log(Test2());
