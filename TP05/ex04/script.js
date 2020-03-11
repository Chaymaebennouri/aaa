let nbr=Math.floor(Math.random()*100);
console.log(nbr);
let x=prompt("donnez un nbr:");
x=parseInt(x);
trou=false;
con=0
while(trou===false && con!=5){

    if(x>nbr){
        alert("ce nbr est grand !!!!!");
     x=prompt("donnez un nbr:");
     x=parseInt(x);
    con ++}
    else if(x<nbr){
            alert("ce nbr est petit !!!!!");
            x=prompt("donnez un nbr:");
         x=parseInt(x);con ++}
        else{
            alert("GOOOOOD ANSWER!!!")
            trou=true
            con ++}
   
}