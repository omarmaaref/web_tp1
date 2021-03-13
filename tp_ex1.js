

var x=Math.floor(Math.random() * 11);
console.log(x)
let n= prompt ("nombre de tentative ?","10");
if (n!=null && n!=0){
    console.log(x);          
      let d=prompt("guess");
  
    n--;
while(d!=x && n!=-1){
    d=prompt("guess");
    n--;
}
if (n==-1) alert("lose");
else alert("win");
} 