# ⚡ Pokédex Web (VanillaJS)

Este proyecto es una **Pokédex web** construida con **VanillaJS**, desarrollada como parte de la clase de Desarrollo Web de SSC impartida por el profesor Rivalcoba. 

Como parte de nuestra metodología de trabajo y diseño:
- 🤖 Se empleó el uso moderado de **Inteligencia Artificial** como herramienta de asistencia en el desarrollo.
- 🎨 Se integraron recursos de **[Uiverse.io](https://uiverse.io/)** para implementar componentes visuales interactivos y brindarle a la interfaz una presentación mucho más moderna y atractiva.
- 📝 La documentación se mantiene estrictamente en **Markdown** para asegurar una lectura limpia, estructurada y a nivel profesional.

---

## 📂 Arquitectura del Proyecto

A continuación, se detalla la función y responsabilidad de cada uno de los archivos principales que componen la aplicación:

### 🌐 `api.js`
Se encarga exclusivamente de descargar la información de los Pokémon desde internet consumiendo la **[PokéAPI](https://pokeapi.co/)**.  
> **Nota:** Este archivo no modifica la interfaz gráfica; su única responsabilidad es la recolección de datos y el manejo de posibles errores de red o conexión.

### 🧠 `app.js`
Funciona como el **controlador central** de la aplicación, uniendo la lógica de descarga de datos con el diseño visual.  
Gestiona los eventos del usuario (como los clics en los botones) para alternar fluidamente entre la pantalla de bienvenida, la vista del catálogo interactivo y la cámara.

### 🏗️ `index.html`
Construye el **esqueleto semántico** de la aplicación utilizando etiquetas HTML.  
Define las diferentes secciones visuales de la Pokédex, agrupando los menús y estructurando los contenedores que estarán ocultos o visibles según el estado de la aplicación.

### 🎨 `style.css`
Aplica la paleta de colores, márgenes y la estructura (cuadrículas/flexbox) a todo el sitio web.  
Es el responsable de la presentación visual: agrega animaciones fluidas, efectos 3D y sombras interactivas tanto a los botones (apoyado en Uiverse) como a las tarjetas de los Pokémon.

### 🖼️ `ui.js`
Es el encargado de la **manipulación del DOM**. Toma los datos crudos obtenidos de la API y genera dinámicamente las tarjetas visuales en la página.  
Se encarga de inyectar la fotografía, el nombre y de configurar el botón interactivo para que el usuario pueda escuchar el grito/sonido del Pokémon.
