let elem = document.querySelector('h1').innerHTML;
//let value = 5;
try{
    value = value + 3;    
    if (!value){
        throw 'Ошибка, переменная неопределена';
    }
    console.log('value = '+ value);
}
catch(e){
    console.log('Ошибка ' + e);
}