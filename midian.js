let arr1=[1,3,5,7,9];
let arr2=[2,4,6,8,10];

let left=arr1.length-1;
let right=0;
while(arr1[left]>arr2[right] && left>-1 && right<arr2.length){
    temp=arr1[left];
    arr1[left]=arr2[right];
    a[right]=temp;
    left--;
    right++;

}
arr1.sort(function(a,b){
    return a-b;
})
arr2.sort(function(a,b){
    return a-b;
})
console.log((arr1[arr1.length-1]+arr2[0])/2)