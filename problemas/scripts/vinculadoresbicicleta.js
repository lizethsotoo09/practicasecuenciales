function calcular(){
    const km= parseFloat(document.getElementById("km").value);
    const velocidad= parseFloat(document.getElementById("velocidad").value);
    const tiempototal= km/velocidad;
    document.getElementById("tiempototal").innerText="Tiempo total:" + tiempototal +"horas";
};