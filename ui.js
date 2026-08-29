console.log('Hello soy Johan! Cargando el módulo de UI (Interfaz de Usuario)...');

/*
 Codificando las funciones que manipulan el DOM (Document Object Model)
 para generar la interfaz visual de las tarjetas a partir de datos crudos.
*/

// Exportamos la función que recibe la data del Pokémon y el contenedor HTML destino
export function renderCard(pokemon, container) {
    // document.createElement fabrica una etiqueta HTML vacía en la memoria RAM
    const card = document.createElement('div');
    // classList.add inyecta la clase CSS para que la tarjeta adquiera el diseño 3D
    card.classList.add('pokemon-card');
    
    // Extrayendo propiedades específicas del objeto JSON del Pokémon
    const name = pokemon.name;
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;
    // Operador lógico OR (||) evalúa de izquierda a derecha buscando el primer valor válido
    const cryUrl = pokemon.cries.latest || pokemon.cries.legacy;

    // Operador ternario ( ? : ) asigna una imagen placeholder genérica si no hay foto oficial
    const finalImage = imageUrl ? imageUrl : 'https://via.placeholder.com/150?text=Sin+Imagen';

    // innerHTML inyecta código HTML literal usando plantillas literales (las comillas invertidas ` `)
    card.innerHTML = `
        <img src="${finalImage}" alt="${name}">
        <h3>${name}</h3>
        <button class="play-cry-btn">Reproducir Sonido</button>
        <audio src="${cryUrl}"></audio>
    `;

    // querySelector busca hacia adentro de la tarjeta el botón y el audio recién creados
    const btn = card.querySelector('.play-cry-btn');
    const audio = card.querySelector('audio');
    
    // addEventListener vincula la acción del clic físico al botón de sonido
    btn.addEventListener('click', () => {
        if (cryUrl) {
            // .play() acciona el audio, .catch evita que crashee si el navegador prohíbe autoplay
            audio.play().catch(e => console.error("Error al reproducir audio", e));
        } else {
            alert("El sonido de este Pokémon no está disponible en la API.");
        }
    });

    // appendChild enchufa nuestra tarjeta ya ensamblada al grid visible de la página
    container.appendChild(card);
}