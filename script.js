//Generar las siguientes series, para ello Utilizar Formularios y Javascript
//1.- Fibonacci
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
}
function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
}

// Generar las siguientes series, para ello tilizar formularios y javascript
//1.- Fibonacci:  0,1,1,2,3,5,8 
function fibo(){
    var numero = document.getElementById("fibonacci"); 
    var num = parseInt(numero.value);
    var num1=1;
    var num2=0;
    var sum;
    var i=0;
    var imprimir;
    for (i = 0; i < num; i++) 
    {
        console.log(num2);
        imprimir = document.createTextNode(num2+",");
        document.getElementById("modal-body").appendChild(imprimir);
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
}

//Binaria: 0,1,10,11,100,101...
function bin(){
    var numero = document.getElementById("binario");
    var num = parseInt(numero.value);
    for (let index = 0; index < num; index++) {
        imprimir = document.createTextNode(index.toString(2)+",")
        document.getElementById("modal-body2").appendChild(imprimir);
    }
    //imprimir = document.createTextNode(binario+",");
    //document.getElementById("modal-body2").appendChild(imprimir);
}

function factor(){
    var numero = document.getElementById("factorial");
    var num = parseInt(numero.value);
    var sum = 0;
    for (let index = 0; index <= num; index++) {
        const dato =  index// Número del que queremos calcular el factorial
        let r = 1;
        for(let i = dato; i>0; i--){
        r *= i;
        
    }
        sum = sum + r;
        imprimir = document.createTextNode(r+"+");
        document.getElementById("modal-body3").appendChild(imprimir);
    //console.log(r);   
    }
        suma = document.createTextNode("S = "+sum);
        document.getElementById("modal-body3").appendChild(suma);
}

