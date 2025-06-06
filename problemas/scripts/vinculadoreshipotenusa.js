function calcular(){
    const a= parseFloat(document.getElementById("a").value);
    const b= parseFloat(document.getElementById("b").value);
    const resultado = Math.pow((Math.pow(a,2) + Math.pow (b,2)),.5);
    document.getElementById("resultado").innerText = "Resultado:" + resultado;

};
