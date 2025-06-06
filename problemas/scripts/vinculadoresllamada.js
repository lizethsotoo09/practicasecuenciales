function calcular(){
    const minutos= parseFloat(document.getElementById("minutos").value);
    const costo= parseFloat(document.getElementById("costo").value);
    const costototal= minutos*costo;
    document.getElementById("costototal").innerText="Cobro total:" + costototal;
};