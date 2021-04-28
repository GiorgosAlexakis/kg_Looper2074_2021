var test = [1278234,39426311,434341,23,423,423];
var phonetics = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
console.time('benchmark1')
var result = "";
for (var i=0;i<test.length;i++) {
    var number = test[i].toString();
    for (var j = 0; j < number.length; j++) result+=phonetics[number[j]];
    if(i<test.length-1) result = result + ",";
}

console.timeEnd('benchmark1');
console.log(result);

console.time('benchmark2')

var result1 = test.reduce(myFunc,[]);
function myFunc(total,number,index)
{
    var sep="";
    if(index < test.length-1) sep=",";
    return total+(""+number).split("").reduce((acc, cur,index) => {
        return acc+phonetics[cur]},"")+sep;
}

console.timeEnd('benchmark2');

console.log(result1);
console.time('benchmark3');

var result2 = test.reduce(myFunc2,[]);
function myFunc2(total,number,index)
{
    var comma='';
    if(index<test.length-1)comma=",";
    return total+getPhonetics(number,[])+comma;
}
function getPhonetics(number,acc){
    while (number > 0) {
        acc = phonetics[number % 10]+acc;
        number = Math.trunc(number / 10);
    }
    return acc;
}

console.timeEnd('benchmark3');
console.log(result2);
