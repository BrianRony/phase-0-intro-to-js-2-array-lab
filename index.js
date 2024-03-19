const cats = (["Milo","Otis","Garfield"]);

function destructivelyAppendCat (name){
    cats.push("Ralph");
    return (cats);
}
function destructivelyPrependCat (name){
    cats.unshift("Bob");
    return(cats);
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return(cats);
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return (cats);
}
function appendCat(name){
    const cat = [...cats];
    cat.push("Broom");
    return (cat);
}
function prependCat(name){
    const cat =[...cats];
    cat.unshift("Arnold");
    return (cat);
}
function removeLastCat(){
    const cat2 =[...cats];
    cat2.pop();
    return (cat2);
}
function removeFirstCat(){
    const cat1 =[...cats];
    cat1.shift();
    return (cat1);
}
