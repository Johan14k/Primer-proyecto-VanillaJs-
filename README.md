# ⚡ Pokédex Web (VanillaJS)

Este proyecto es una **Pokédex web** construida con **VanillaJS**, desarrollada como parte de la clase de Desarrollo Web de SSC impartida por el profesor Rivalcoba. 

Como parte de nuestra metodología de trabajo y diseño:
- 🤖 Se empleó el uso moderado de **Inteligencia Artificial (Gemini)** como herramienta de asistencia en el desarrollo y redacción.
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
Construye el esqueleto de la aplicación utilizando etiquetas para organizar la lectura de la página.  
Define las diferentes secciones visuales, agrupando los menús y las pantallas que estarán ocultas o visibles.  

### 🎨 `style.css`
Aplica los colores, márgenes y la estructura de cuadrícula a todo el sitio web.  
Agrega animaciones, efectos 3D y sombras interactivas tanto a los botones como a las tarjetas.  

### 🖼️ `ui.js`
Toma los datos crudos de los Pokémon y genera las tarjetas visuales en la página.  
Muestra la foto, el nombre y configura un botón para que el usuario pueda reproducir el sonido del Pokémon.  
Se encarga de inyectar la fotografía, el nombre y de configurar el botón interactivo para que el usuario pueda escuchar el grito/sonido del Pokémon.

---

## 🛠️ Herramientas y Recursos Utilizados

Para el desarrollo, diseño y documentación de este proyecto, nos apoyamos en las siguientes plataformas y tecnologías:

*   **[PokéAPI](https://pokeapi.co/):** Interfaz principal utilizada para consumir y recolectar toda la información, estadísticas y recursos multimedia de los Pokémon.
*   **[Google Gemini](https://gemini.google.com/):** Asistente de Inteligencia Artificial utilizado para apoyar en el desarrollo, optimizar la estructura y redactar documentación profesional.
*   **[Carbon](https://carbon.now.sh/):** Herramienta utilizada para generar y compartir imágenes estilizadas y de alta calidad de nuestros fragmentos de código fuente.
*   **[MDN Web Docs - Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types):** Documentación de referencia oficial de Mozilla empleada para el correcto manejo de los tipos de archivos y respuestas HTTP.
