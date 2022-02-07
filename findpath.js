/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
/*
Algorithm:
step1: take two parameters
step2: 
    2.1 check for falsy value for path , if its a falsy value it will return path falsy values it self
    2.2 if value is valid if will try to check path in object
       2.2.1 if object contain falsy value break the loop
       2.2.2 if object it valid object find the path and return
step3: stop       
       
   
*/
var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    if(!Boolean(path)){
        return path;
    }
    var a =path.split(".");
    for(var i=0;i<a.length;i++){
        if(object===undefined || object === null){
            break;
        }
         else {
            object=object[a[i]];
         }        
    }    
    return object;
};


console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
