let numero1 = document.querySelector('#Entrada1'); 
let numero2 = document.querySelector('#Entrada2');
let resultado = document.querySelector("#resultado");
let resultadop = document.querySelector('#resultado-p');

function somar(){
    let final = Number(numero1.value) + Number(numero2.value)
    resultadop.innerHTML = final;
    resultado.value = final;
}
   
 function subtrair(){
    let final = Number(numero1.value) - Number(numero2.value);
    resultadop.innerHTML = final;
    resultado.value = final;
}
function dividir(){
    let final = Number(numero1.value) / Number(numero2.value);
    resultadop.innerHTML = final;
    resultado.value = final;
}
function multiplicar(){
    let final = Number(numero1.value) * Number(numero2.value);
    resultadop.innerHTML = final;
    resultado.value = final;

}


 function imc(){
    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));

    document.querySelector('#imc').value = imc;
   let consideracoes =document.querySelector('#consideracoes')
    if(imc < 18.5){
       consideracoes.textContent = 'Abaixo do peso';
     }else if(imc >= 18.5 && imc <= 24.9){
        consideracoes.textContent = 'Peso Normal';
     }else if(imc >= 25.0 && imc <= 29.9){
        consideracoes.textContent = 'Sobrepeso';
     }else if (imc >= 30 && imc <= 34.9){
        consideracoes.textContent = 'Obesidade grau 1';
     }else if (imc >= 35 && imc <= 39.9){
        consideracoes.textContent = 'Obesidade grau 2'; 
     }else {
        consideracoes.textContent = 'Obesidade grau 3';
     }
     

    }