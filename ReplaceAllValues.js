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
