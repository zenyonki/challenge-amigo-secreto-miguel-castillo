// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');

    // Obtener el valor del campo de texto
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, escribe un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Crear un elemento de lista y añadirlo al DOM
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

    // Obtener un índice aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en la sección de resultados
    resultado.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
}
