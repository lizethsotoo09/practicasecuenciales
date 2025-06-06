function calcular(){
    const basetriangulo= parseFloat(document.getElementById("basetriangulo").value);
    const alturatriangulo= parseFloat(document.getElementById("alturatriangulo").value);
    const resultado= (basetriangulo*alturatriangulo)/2;
    document.getElementById("resultado").innerText="Resultado:" + resultado;
};