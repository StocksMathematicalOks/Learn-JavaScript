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
//Real Memory of Computers is decreased 7% than the whole numbers that are usually thought to be the actual memory.
