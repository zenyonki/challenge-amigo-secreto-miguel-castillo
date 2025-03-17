// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');

    // Leer documentación sobre value.trim
    const nombre = inputAmigo.value.trim();

    // Esto se lo vi a otra persona en un repositorio en GitHub
    //Pensana que al poner el "if" tendría que poner el "else" del push
    if (nombre === '') {
        alert('Por favor, escribe un nombre válido.');
        return;
    }

    // Aquí se agregan los nombre a la lista (array)
    amigos.push(nombre);

    // Esto me lo explicó ChatGPT para poder crear una lista, en relación a modificar el DOM
    //Esto no vino en el curso, pero lo que aprendí sobre ChatGPT me ayudó
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función para sortear un nombre aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Verificar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    // Obtener un nombre aleatorio del array
    const nombreAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[nombreAleatorio];

    // Mostrar el nombre sorteado en la sección de resultados
    //Esto tampoco se vio en el curso
    resultado.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
}
//Estos se agregan sólo para verificar que se agregan bien (y para ver si aprendí a usar el console.log)
console.log (amigos);