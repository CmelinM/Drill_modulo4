
    async function fetchData(idPersonaje) {
        let headersList = {
            Accept: "*/*",
        };

        try {
            let response = await fetch(`https://swapi.dev/api/people/${idPersonaje}`, {
                method: "GET",
                headers: headersList,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            let caracteristicasPersonaje = await response.json();
            return caracteristicasPersonaje;
        } catch (error) {
            console.error("Error al obtener datos:", error);
            return null; // manejo de errores
        }
    }

    export default fetchData;
