function sumar(){
    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").innerText = "Resultado:" + resultado;

};

function restar(){
    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").innerText = "Resultado:" + resultado;

};

function multiplicar(){
    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").innerText = "Resultado:" + resultado;

};

function raiz(){
    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    const raiz1 = Math.sqrt(num1);
    const raiz2 = Math.sqrt(num2);
    document.getElementById("resultado").innerText = 
    "Raiz cuadrada de num1:" + raiz1 + " | Raiz cuadrada de num2:"+raiz2;


};

