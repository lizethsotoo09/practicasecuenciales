function calcular(){
    const año= parseFloat(document.getElementById("año").value);
    const edad= 2025-año;
    document.getElementById("edad").innerText="Resultado:" + edad;
};