function obtenerDatos(){
    const edad= parseFloat(document.getElementById("edad").value);
    let resultado=""
    if (edad>=18) {
        resultado="Puedes votar";
    } else{
        resultado="No puedes votar";
    }
    document.getElementById("resultado").innerText =resultado;
};

function calcularHoras(){
    const horas= parseFloat(document.getElementById("horas").value);
    let resultado=""
    if (horas>=40) {
        resultado=Math.pow(Math.pow(horas*100,2));
    } else{
        resultado=horas*100;
    }
    document.getElementById("resultado").innerText =resultado;
};

function determinarRegalo(){
    const presupuesto= parseFloat(document.getElementById("presupuesto").value);
    let resultado=""
    if (presupuesto<=10) {
        resultado="Tarjeta";
    } else if(presupuesto>11 && presupuesto<=100){
        resultado="Chocolates";
    } else if(presupuesto>101 && presupuesto<=250){
        resultado="Flores";
    } else 
        resultado="Anillo";

    document.getElementById("resultado").innerText =resultado;
};

function determinarCobro(){
    const horas= parseFloat(document.getElementById("horas").value);
    let resultado=""
    if (horas<=2) {
        resultado=horas*5;
    } else if(horas>2 && horas<=5){
        resultado=horas*4;
    } else if(presupuesto>5 && horas<=10){
        resultado=horas*3;
    } else 
        resultado=horas*2;

    document.getElementById("resultado").innerText =resultado + ' pesos';
};

function obtenerEdad() {
    const nombrep1 = document.getElementById("nombrep1").value;
    const edadp1 = parseFloat(document.getElementById("edadp1").value);

    const nombrep2 = document.getElementById("nombrep2").value;
    const edadp2 = parseFloat(document.getElementById("edadp2").value);

    const nombrep3 = document.getElementById("nombrep3").value;
    const edadp3 = parseFloat(document.getElementById("edadp3").value);

    let menorEdad = Math.min(edadp1, edadp2, edadp3);
    let resultado;

    if (menorEdad === edadp1) {
        resultado = nombrep1;
    } else if (menorEdad === edadp2) {
        resultado = nombrep2;
    } else {
        resultado = nombrep3;
    }

    document.getElementById("resultado").innerText = 'La persona que es menor de edad es: ' + resultado + ' con ' + menorEdad + ' años';
}

function determinarCosto() {
    const costo = parseFloat(document.getElementById("costo").value);
    let descuento = 0;
    let resultado = "";

    if (costo >= 200) {
        descuento = costo * 0.15;
        resultado = costo - descuento;
    } else if (costo > 100 && costo < 200) {
        descuento = costo * 0.12;
        resultado = costo - descuento;
    } else {
        descuento = costo * 0.10;
        resultado = costo - descuento;
    }

    document.getElementById("resultado").innerText = resultado.toFixed(2) + ' pesos';
}

function determinarResultado(){
    const edad= parseFloat(document.getElementById("edad").value);
    const promedio= parseFloat(document.getElementById("promedio").value);
    let resultado=""
    
    if (edad>18 && promedio>=9){
        resultado="Tu beca será de 2,000 pesos";
    } else if(edad>=18 && promedio<9 && promedio>=7.5 ){
        resultado="Tu beca será de 1,000 pesos";
    } else if(edad>=18 && promedio<7.5 && promedio>=6 ){
        resultado="Tu beca será de 500 pesos";
    } else if(edad>=18 && promedio<6)
        resultado="Te invitamos a estudiar para el siguiente ciclo escolar. ¡Ánimo!";

        if (edad<=18 && promedio>=9){
        resultado="Tu beca será de 3,000 pesos";
    } else if(edad<=18 && promedio<9 && promedio>=8 ){
        resultado="Tu beca será de 2,000 pesos";
    } else if(edad<=18 && promedio<8 && promedio>=6 ){
        resultado="Tu beca será de 100 pesos";
    } else if(edad<=18 && promedio<6)
        resultado="Te invitamos a estudiar para el siguiente ciclo escolar. ¡Ánimo!";

    document.getElementById("resultado").innerText =resultado;


};

function determinarBono() {
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const años = parseFloat(document.getElementById("años").value);
    let bono = 0;

    if (años>2 && años<5) {
        bono = sueldo * 0.20;
    } else if (años>=5) {
        bono = sueldo * 0.30;
    } else if (sueldo<1000) {
        bono = sueldo * 0.25;
    } else if (sueldo>=1000 && sueldo<=3500) {
        bono = sueldo * 0.15;
    } else if (sueldo>3500) {
        bono = sueldo * 0.10;
    }

    document.getElementById("resultado").innerText = 'El bono es: ' + bono + ' pesos';
}

 function calcularPoliza() {
      const tipo = document.getElementById("poliza").value;
      const alcohol = document.getElementById("alcohol").checked;
      const lentes = document.getElementById("lentes").checked;
      const enfermedad = document.getElementById("enfermedad").checked;
      const edad = parseInt(document.getElementById("edad").value);

      if (isNaN(edad) || edad <=0) {
        document.getElementById("resultado").innerText = "Por favor ingrese una edad válida.";
        return;
      }

      let base = tipo === "A" ? 1200 : 950;
      let cargos = 0;

     if (alcohol) cargos += base * 0.10;
      if (lentes) cargos += base * 0.05;
      if (enfermedad) cargos += base * 0.05;
      if (edad>40) {
        cargos += base * 0.20;
      } else {
        cargos += base * 0.10;
      }

      let total = base + cargos;

      document.getElementById("resultado").innerText =
        "El costo total de la póliza es: " + total + ' pesos';
    }
function determinarDestino() {
      const dinero = parseFloat(document.getElementById("dinero").value);
      const costoKm = parseFloat(document.getElementById("costoKm").value);

      if (isNaN(dinero) || isNaN(costoKm) || dinero <= 0 || costoKm <= 0) {
        document.getElementById("resultado").innerText = "Ingresa valores válidos.";
        return;
      }

      const destinos = [
        { nombre: "México", distancia: 750 },
        { nombre: "Puerto Vallarta", distancia: 800 },
        { nombre: "Acapulco", distancia: 1200 },
        { nombre: "Cancún", distancia: 1800 }
      ];

      let destinoElegible = "Debes quedarte en casa";

      for (let i = destinos.length - 1; i >= 0; i--) {
        const viajeTotal = destinos[i].distancia * 2 * costoKm;
        if (dinero >= viajeTotal) {
          destinoElegible = "Puedes ir a: " + destinos[i].nombre + " (Costo total: $" + viajeTotal.toFixed(2) + ")";
          break;
        }
      }

      document.getElementById("resultado").innerText = destinoElegible;
    }

    function calcularBono() {
    const años = parseFloat(document.getElementById("años").value);
    let bono = 0;

    if (años===1) {
        bono = "100";
    } else if (años===2) {
        bono = "200";
    } else if (años===3) {
        bono = "300";
    } else if (años==4) {
        bono = "400";
    } else if (años===5) {
        bono = "500";
    } else if (años>5) {
        bono = "1000";
    }

    document.getElementById("resultado").innerText = 'El bono es: ' + bono + ' pesos';
}

function determinarSueldo() {
    const horas= parseFloat(document.getElementById("horas").value);
    let pago = 500;

    if (horas<=40) {
        resultado=pago
    } else if (horas>40 && horas<=45) {
        resultado=pago*2;
    } else if (horas>45 && horas<=50) {
        resultado=pago*3;
    } else if (horas>50) {
        resultado="Trabajar mas de 50 horas no esta permitido.";
   
    }

    document.getElementById("resultado").innerText = 'El sueldo es: ' + resultado;
}

function determinarPasaje() {
    const alumnos= parseFloat(document.getElementById("alumnos").value);
    let  resultado=0;

    if (alumnos>100) {
        resultado="20 pesos"
    } else if (alumnos>50 && alumnos<100) {
        resultado="35 pesos";
    } else if (alumnos>=20 && horas<50) {
        resultado="40 pesos";
    } else if (alumnos<20) {
        resultado="70 pesos";
   
    }

    document.getElementById("resultado").innerText = resultado;
}




