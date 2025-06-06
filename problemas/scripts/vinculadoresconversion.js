function calcular(){
    const pesos= parseFloat(document.getElementById("pesos").value);
    const dolares = pesos/19.31;
    document.getElementById("dolares").innerText = "Dolares:" + dolares;
};