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
