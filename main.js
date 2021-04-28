var array = process.argv.slice(2, process.argv.length);
var phonetics = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
var result = array.reduce(FindSolution,[]);
function FindSolution(total,number,index)
{
    var comma='';
    if(index<array.length-1)comma=",";
    return total+getPhonetics(number,[])+comma;
}
function getPhonetics(number,acc){
    while (number > 0) {
        acc = phonetics[number % 10]+acc;
        number = Math.trunc(number / 10);
    }
    return acc;
}
process.stdout.write(result+'\n');
