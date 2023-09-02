const a=[1,2,3,4,5,6,7,8];
const b=a;
const d=['q','w','e','r','t','y'];	
console.log(...b);
const c=[...a , ...d];
console.log(c);

function fun(a,b, ...args){
	console.log(a,b, ...args)
}

fun(45,34,23,23,12,55)


