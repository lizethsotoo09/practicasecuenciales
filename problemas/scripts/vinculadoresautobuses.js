function calcular(){
    const km= parseFloat(document.getElementById("km").value);
    const cobrototal= 100*km;
    document.getElementById("cobrototal").innerText="Cobro total:" + cobrototal;
};