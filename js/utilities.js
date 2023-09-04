/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerca que algunos valores se hace el reset a 0, otros a 1
 */
export function reset(billInput, customPercentageBtn, peopleInput, tipAmountInput, totalInput) {

    billInput.value = 0;
    customPercentageBtn.value = "";
    peopleInput.value = 1;
    tipAmountInput.textContent = "0";
    totalInput.textContent = "0";
}


/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip por persona.
 */
export function calcularTip(tip, bill, people) {

    if ((people >= 1) && (tip >= 1) && (bill >= 1)) {
        
        let totalPersona = parseFloat(bill * tip) / 100;
        let tipPersona = totalPersona / people;

        document.getElementById('tip-amount').innerHTML = "" + tipPersona.toFixed(3);
    }
}

/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(tip, bill, people) {

    if ((bill >= 1) && (tip >= 1) && (people >= 1)) {
       
      let tipAmaunt = parseFloat(tip / 100) + 1;
      let total = (tipAmaunt * bill) / people;
      
    document.getElementById('total').innerHTML = "" + total.toFixed(3);
    }
}

/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero([input, input2]) {

    if (input.value <= 0) {
        error2.style.display = "block";
        setTimeout(function () {
        error2.style.display = "none"
        }, 5000);
    }
    if (input2.value <= 0) {
        error.style.display = "block";
        setTimeout(function () {
        error.style.display = "none"
        }, 5000);
    }
    return 
}


/**
 * Añade la clase "active" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */
export function claseActivo(input) {

console.log("el valor de entrada Custom para Clases es " + input.value);

    if (input.value === "") {
        input.classList.remove("active");
     } else {
        input.classList.add("active")
        setTimeout(function () {
        input.classList.remove("active")}, 1500);
      }

}
