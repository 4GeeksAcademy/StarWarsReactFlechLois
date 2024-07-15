

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Variables donde están los arrays vacíos que almacenarán los datos obtenidos de la API.
			vehiculos: [], 
			planetas: [], 
			personajes: [], 
			favoritos: [],
			detalles: {},// siempre va a ser uno, por eso ponemos {}
			
			
		},

		actions: {
			// Funciones para obtener datos de la API
			obtenerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people", {
					method: "GET" // Obtener la lista de personajes
				})
				.then(response => response.json()) //Convierte la respuesta a formato JSON, formato texto
				.then(data => setStore({ personajes: data.results })) // Actualizar el estado del store personajes
				.catch(error => console.error("Error al recibir los datos de los personajes:", error));
			},

			obtenerVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles", {
					method: "GET" // Obtener la lista de vehículos
				})
				.then(response => response.json())
				.then(data => setStore({ vehiculos: data.results })) // Actualizar el estado del store vehículos
				.catch(error => console.error("Error al recibir los datos de los vehículos:", error));
			},

			obtenerPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets", {
					method: "GET" // Obtener la lista de planetas
				})
				.then(response => response.json())
				.then(data => setStore({ planetas: data.results })) // Actualizar el estado del store planetas
				.catch(error => console.error("Error al recibir los datos de los planetas:", error));
			},


			obtenerDetalles: (type,id) => { 
				fetch(`https://www.swapi.tech/api/${type}/${id}`, { // por ejemplo https://www.swapi.tech/api/people/1
					method: "GET" // Obtener la lista de personajes, vehiculos o planetas de forma individual
				}) 
				
				.then(response => response.json()) //Convierte la respuesta a formato JSON, formato texto
				.then(data => { //pedimos que nos devuelva properties y la description en el data.results
					const { properties, description } = data.result;
                    setStore({ detalles: { ...properties, description } }); //Actualiza el estado del store del objeto detalles, que contiene todas las propiedades de properties más una nueva propiedad description.
                }) // Actualizar el estado del store detalles
				.catch(error => console.error("Error al recibir los datos de los personajes:", error));
			},


			agregarFavorito: (id, name, type) => {
                const {favoritos} = getStore(); // Obtener el array de favoritos del estado actual

				const favoritoExistente = favoritos.find(favorito => favorito.id === id);

				// Verifica si el favorito ya existe en la lista
				if (!favoritoExistente) {
					setStore({ favoritos: [...favoritos, { id, name, type }] });
				} else {
					console.warn(`El favorito con ID ${id} ya está en la lista.`); //Esta es una función de la consola del navegador que muestra un mensaje de advertencia. 
				}


		

				// // Ejemplo de envío al backend  (es necesario?)
				// fetch("https://ejemplo-api.com/favoritos", { // Hacer una solicitud fetch al backend utilizando el método POST
				// 	method: "POST",
				// 	body: JSON.stringify(id, name, type), // Convertir el objeto a JSON
				// 	headers: {
				// 		"Content-Type": "application/json"
				// 	}
				// })
				// .then(response => response.json())
				// .then(data => {
				// 	console.log("Favorito agregado correctamente al backend:", data);
					
				// })
				// .catch(error => {
				// 	console.error("Error al agregar el favorito al backend:", error);
				// 	// Manejar el error si la solicitud falla
				// });
			},

			eliminarFavorito: (id) => {
                const store  = getStore(); // Obtener el array de favoritos del estado actual

				// Filtra el ID del favorito a eliminar del array de favoritos
				const nuevosFavoritos = store.favoritos.filter(favId => favId.id !== id);//filter se usa para crear un nuevo array (nuevosFavoritos) que excluye el ID que se quiere eliminar (id).
				setStore({ favoritos: nuevosFavoritos });//actualiza el estado global favoritos con el nuevo array nuevosFavoritos, eliminando así el favorito localmente de la lista.
				console.log (store.favoritos)


				// // Ejemplo de eliminar en el backend (si es necesario)
				// fetch(`https://ejemplo-api.com/favoritos/${id}`, {
				// 	method: 'DELETE',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	}
				// })
				// .then(response => {
				// 	if (!response.ok) {
				// 		throw new Error('Error al eliminar el favorito en el backend');
				// 	}
				// 	return response.json();
				// })
				// .then(data => {
				// 	console.log('Favorito eliminado correctamente del backend:', data);
				// })
				// .catch(error => {
				// 	console.error('Error al eliminar el favorito en el backend:', error);
				// });
			}

			
		}
	};
};

export default getState;
