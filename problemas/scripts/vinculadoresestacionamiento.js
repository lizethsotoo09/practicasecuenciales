function calcular(){
    const horas= parseFloat(document.getElementById("horas").value);
    const cobrototal= 20*horas;
    document.getElementById("cobrototal").innerText="Cobro total:" + cobrototal;
};