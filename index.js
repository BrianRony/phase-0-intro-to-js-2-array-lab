const cats = [];
cats.push ('Milo','Otis','Garfield');

function destructivelyAppendCat (){
    return cats.push('Ralph');
}
function destructivelyPrependCat(){
    return cats.unshift ('Bob');
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(){
    let nCats = [...cats];
    nCats.push('Broom');
    return nCats;
}function prependCat(){
    let pCats = [...cats];
    pCats.unshift('Arnold');
    return pCats;
}
function removeLastCat(){
    return cats.slice(0,-1);
}
function removeFirstCat(){
    return cats.slice(1);
}