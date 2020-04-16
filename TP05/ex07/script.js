var tab=[4,1,-5];

function additionne(x) {
    return (x+2);
}
function soustrait(x) {
    if(x>0 || x===0){
        return (x-2)}
    return("Nombre négatif!!")
}
function affiche() {
    alert(additionne(tab[0]));
    alert(additionne(tab[tab.length-1]));
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length-1]));
    
}