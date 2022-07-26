let maximo = 10;
var numero = prompt("introducir un numero del 1 al " +  maximo,1);

if(numero <= maximo){
    for (let index = 1; index < (maximo + 1); index++) {
        if(numero == index){
          console.log('Tu variable es igual que el index',numero,index);
        }
        if(numero < index){
          console.log('Tu variable (' + numero + ')' + ' es menor que el index: ' +  index);
        }
        
      }
} else {
    while (numero > maximo){
        numero = prompt("introducir un numero del 1 al " +  maximo,1);
    }
    for (let index = 1; index < (maximo + 1); index++) {
        if(numero == index){
          console.log('Tu variable es igual que el index',numero,index);
        }
        if(numero < index){
          console.log('Tu variable (' + numero + ')' + ' es menor que el index: ' +  index);
        }
        
      }
}
