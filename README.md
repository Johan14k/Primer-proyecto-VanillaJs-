# Primer-proyecto-VanillaJs-
En este proyecto realizaremos el primer proyecto que nos dejo el profesor rivalcoba. En el cual podremos utilizar IA De manera modera para detallar algunos detalles de la practica en cuestión.
# Pokédex Web (VanillaJS)

Este proyecto es una Pokédex web en VanillaJS creada para la clase del profesor Rivalcoba.

## 📂 Estructura del Proyecto

### `api.js`
Se encarga exclusivamente de descargar la información de los Pokémon desde internet usando la [PokéAPI](https://pokeapi.co/).  
No modifica la interfaz gráfica, solo maneja la recolección de datos y los posibles errores de conexión.

### `app.js`
Funciona como el archivo central que une la descarga de datos con el diseño visual.  
Controla los clics en los botones para cambiar entre la pantalla de bienvenida, la vista del catálogo y la cámara.

### `index.html`
Construye el esqueleto de la aplicación utilizando etiquetas para organizar la lectura de la página.  
Define las diferentes secciones visuales, agrupando los menús y las pantallas que estarán ocultas o visibles.

### `style.css`
Aplica los colores, márgenes y la estructura de cuadrícula a todo el sitio web.  
Agrega animaciones, efectos 3D y sombras interactivas tanto a los botones como a las tarjetas.

### `ui.js`
Toma los datos crudos de los Pokémon y genera las tarjetas visuales en la página.  
Muestra la foto, el nombre y configura un botón para que el usuario pueda reproducir el sonido del Pokémon.
