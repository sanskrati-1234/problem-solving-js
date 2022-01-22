// Print 1 to 10

function printNumber( i, n){
	if(i>n){
		return;
	}
    console.log(i);
	printNumber(++i,n);
} 

// Print 4 to 30
function printNumber(i,n){
	if(i>n){
		return;
	}
    console.log(i);
	printNumber(++i,n);
} 


// Print 5 to 1
function printNumber(i,n){
	if(i>n){
		return
	}
    console.log(n);
    printNumber(i,--n);
} 

// Print even number from 1 to 100
function printEvenNumber(i,n){
	if(i>n){
      return;  
		
	}
    if(i%2==0){
        console.log(i);
        printEvenNumber(i+2,n);
    }else{
        printEvenNumber(i+1,n);
    }
    
} 


// Print odd numbers from 1 to 100
function printOddNumber(i,n){
	if(i>n){
      return;  
	}
    if(i%2==1){
        console.log(i);
        printOddNumber(i+2,n);
    }else{
        printOddNumber(i+1,n);
    }
    
} 


// Write factorial of 10
function fact(n){
    if(n<=1)
        return 1;
    else
        return n*fact(n-1);
}