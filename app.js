/*
 Codificando el archivo central que actúa como director de orquesta.
 Aquí unimos la recolección de datos (api.js) con la visualización (ui.js).
*/

// import nos permite traer código de otros archivos.
// Nota: En Vanilla JS puro en el navegador, es obligatorio poner la extensión ".js"
import { fetchPokemons } from './api.js';
import { renderCard } from './ui.js';

// getElementById guarda referencias estáticas a elementos del HTML en variables constantes
const welcomeScreen = document.getElementById('welcome-screen');
const mainApp = document.getElementById('main-app');
const btnStart = document.getElementById('btn-start');

const btnCatalog = document.getElementById('btn-catalog');
const btnCamera = document.getElementById('btn-camera');
const catalogView = document.getElementById('catalog-view');
const cameraView = document.getElementById('camera-view');

const pokemonGrid = document.getElementById('pokemon-grid');
const statusMessage = document.getElementById('status-message');

// --- 1. Lógica de la Antesala ---
// Escuchando el clic del botón "Bienvenido profesor"
btnStart.addEventListener('click', async () => {
    // style.display manipula el CSS en línea para hacer transición entre pantallas
    welcomeScreen.style.display = 'none';
    mainApp.style.display = 'block';
    
    // Iniciamos la carga asíncrona dentro de un bloque try para manejar caídas de red
    try {
        // Ejecutamos la petición modular al API pidiendo los primeros 20
        const pokemons = await fetchPokemons(20);
        
        // Si todo sale bien, escondemos el letrero de "Cargando..."
        statusMessage.style.display = 'none';
        
        // for...of itera directamente sobre cada objeto Pokémon del arreglo
        for (const poke of pokemons) {
            // Mandamos los datos al módulo UI para que arme y pegue la tarjeta
            renderCard(poke, pokemonGrid);
        }
    } catch (error) {
        // En caso de que fetchPokemons dispare un error, lo atrapamos aquí
        statusMessage.textContent = 'Hubo un error al cargar la información.';
        statusMessage.style.display = 'block';
    }
});

// --- 2. Lógica de Navegación del Menú ---
btnCatalog.addEventListener('click', () => {
    // Modificando las clases para el resaltado del botón activo
    btnCatalog.classList.add('active');
    btnCamera.classList.remove('active');
    
    catalogView.style.display = 'block';
    cameraView.style.display = 'none';
});

btnCamera.addEventListener('click', () => {
    btnCamera.classList.add('active');
    btnCatalog.classList.remove('active');
    
    cameraView.style.display = 'block';
    catalogView.style.display = 'none';
});