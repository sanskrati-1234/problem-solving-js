// number + number= number so  a=4
var a = 1 + 3;

// string + anything = string so b="13"
var b = "1" + 3;

// srtring + string =string so c= "StrongEngineer"
var c = "Strong" + "Engineer";

// string + anything =string  so d= "Strongtrue"
var d = "Strong" + true;

// string + anything =string  so d= "falsefalse"
var d1 = "false" + false;

// string + anything is okay but when we perform - so left and right side of operator should parsable in  number
//if not  it will give NaN (not a number) so e =NaN becuase "1" + true = "1true" and then "1true" -true =NaNso e = NaN
var e = "1" + true - true;

// "10" -false , it will treat false as zero so 10 then - false again 10 then - true (1) so 9 then +2 so
// f=11 in number
var f = "10" - false - false - true + 2;

// "n" +10.1 = "Arun10.1" 
// "Arun10.1" +20 ="Arun10.120"
// "Arun10.120"-98 =NaN
// e= NaN
var e = "Arun" + 10.1 + 20 - 98 + true;

// string  + anything is string
// "-1"
var f = "-" + 1;

// number+ number = number
// g= 34
var g = Number("32") + 2;

// parseint it try to parse value give in parameter if that value not parsable the give NaN
// and type of NaN is number 
// s0 h=  2 + NaN
//h= NaN
var h = 2 + parseInt("ankit");


//  i = "ankit2233.98"
var i = "ankit" + 2 + parseInt(2) + parseFloat(33.98);

// string - number = number
// j = 8
var j = "10" - 2;

// k= "100-20"
var k = "100" + -20;

// l = 1001001
var l = "100" + 10 + "20" - "20" + true + true + false + -true;

// Print 1 to 10
for (let i=1; i<=10 ;i++){
    console.log(i);
}
// Print 4 to 30
for(let i=4 ;i<=30;i++){
    console.log(i);
}

// Print 5 to 1
for (let i=5 ; i>=1;i--){
    console.log(i);
}
// Print even number from 1 to 100
for(let i=1; i<100;i++){
    if(i%2==0){
        console.log(i);
    }
}

// Print odd numbers from 1 to 100
for(let i=1;i<100;i++){
    if(i%2 == 1){
        console.log(i);
    }
}

// Write factorial of 10
var fact=1;
for(let i=1;i<=10;i++){
    fact= fact*i;
}
console.log(fact);