let src={
    age:20,
    weight:50,
    name:"deepti",
};
let obj={...src};
src.age=90;
console.log("dest:" ,obj);
console.log("src:",src);
let mme = Object.assign({},src);
console.log("me:",mme);
for(let key in src){
    console.log(key);
}