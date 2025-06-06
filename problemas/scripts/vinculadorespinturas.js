function calcular(){
    const metros= parseFloat(document.getElementById("metros").value);
    const cobrototal= metros*100;
    document.getElementById("cobrototal").innerText="Cobro total:" + cobrototal;
};