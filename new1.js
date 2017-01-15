var s = "Revathi S"   /// update your name here.

var first_name = s.split(' ')[0]
var last_name = s.substring(first_name.length).trim()

console.log(s);
console.log(s[6],s[7],s[8],s[9],s[10],s[0],s[1],s[2],s[3],s[4]);
console.log(s[0],s[6],s[7],s[8],s[9],s[10]);
console.log(s[6],s[0],s[1],s[2],s[3],s[4]);
console.log(s[6],s[7],s[8],s[9],s[10],s[0]);
console.log(s[0],s[1],s[2],s[3],s[4],s[6]);
console.log(first_name);
console.log(last_name);

var k = new Date(1994, 2-1, 20);   // update your DOB Here
var an= new Date(new Date(k).setMonth(k.getMonth()+1));
var a= new Date(new Date(k).setMonth(k.getMonth()-1));
var b= new Date(new Date(k).setDate(k.getDate()-1));
var c= new Date(new Date(k).setDate(k.getDate()+1));
var d= new Date(new Date(k).setYear(k.getYear()-1));
var e= new Date(new Date(k).setYear(k.getYear()+1));
console.log("DOB:");
console.log(an);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
