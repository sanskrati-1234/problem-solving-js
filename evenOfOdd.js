function evenAndOdd(n){
    if(n==0){
        console.log(n);
    }else if(!Boolean(n)|| isNaN(n)){
        console.log("its falsy value");
    }else if(n%2==0){
            console.log("even number");
    }else{
          console.log("Odd number");
    }
    
}