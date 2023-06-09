const boton = document.getElementById("boton")

let rutinas = ['Sentadillas', 'Bancos', 'Peso muerto', 'Prensas'];

const iterarEjercicios = () => {
    const semanas = document.getElementById("semanasEjercicio").value
    const dias = document.getElementById("diasEjercicio").value
    const diasRutina = (semanas * dias) * 2;
    console.log(`Semanas: ${semanas}`);
    console.log(`Días: ${dias}`);

    let gen1 = generador()
    for (let i = 1; i <= diasRutina; i += 2) {
        let genResultado = gen1.next();
        // Aquí le damos una vuelta a la función generador, el resto de los ejercicios posteriores a esta primer vuelta quedan undefined
        if(genResultado.done) {
        // Aquí afirmamos que, si eventualmente el valor de done llega a ser true (al final de la iteración de todo rutinas) comience a iterar
        // Nuevamente, esta vez hasta que los díasRutina indicados cesen.
            gen1 = generador()
            genResultado = gen1.next()
        }
        console.log(`Día ${i}: ${genResultado.value}`);
    }
}

boton.addEventListener("click", iterarEjercicios)


function* generador() {
    let i = 0
    yield rutinas[i]
    i++
    yield rutinas[i]
    i++
    yield rutinas[i]
    i++
    yield rutinas[i]
    i++
    return 'Fin Rutinas'
} 