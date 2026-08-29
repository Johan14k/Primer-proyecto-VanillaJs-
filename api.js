/*
 Codificando las funciones encargadas de interactuar
 con la PokéAPI utilizando el protocolo HTTP.
 Este archivo se dedica 100% a traer datos, sin tocar la interfaz.
*/

// export permite que esta función asíncrona se pueda importar en otros archivos
export async function fetchPokemons(limit = 20) {
    // try/catch encapsula el código propenso a fallar (como conexiones de red)
    try {
        // fetch hace la petición GET por defecto a la URL (uniform resource locator)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        
        // response.ok verifica si el código HTTP de respuesta fue exitoso (200 OK)
        if (!response.ok) {
            // throw interrumpe la función de golpe y detona el catch
            throw new Error('Error de red al contactar la PokéAPI');
        }
        
        // .json() decodifica el texto plano que manda la API a un objeto JavaScript
        const data = await response.json();
        
        // map transforma el arreglo original devolviendo un nuevo arreglo lleno de promesas
        const detailedPromises = data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            return res.json();
        });
        
        // Promise.all obliga a JavaScript a esperar que TODAS las peticiones en paralelo terminen
        return await Promise.all(detailedPromises);
        
    } catch (error) {
        console.error("Error en la consulta API:", error);
        // Volvemos a lanzar el error para que app.js sepa que algo falló y actualice la pantalla
        throw error; 
    }
}