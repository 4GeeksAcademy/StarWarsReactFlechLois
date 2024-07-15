//El componente Single es responsable de mostrar los properties de un elemento específico (como personaje, planeta o vehículo)
import React, { useContext, useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Single = () => {
    const { id, type } = useParams(); //permite acceder a los parámetros de la URL. En este caso, type y id especificados en Route.
    const { store, actions } = useContext(Context); //para acceder a los datos almacenados de los personajes, planetas y vehiculos, que quiero mostrar en detalle aqui en single.

	useEffect(() => { //Promesa
		const fetchDetails = async () => { 
		console.log(type); 
		await actions.obtenerDetalles(type, id); 
	 };
		 fetchDetails(); }, [id, type]);
   
   

   if (!store.detalles) {
	return <div>Loading...</div>;
}
	
	return (
		<div className="contenedorDetalles">
			{type === "people" && (
				<div className="detallesCardSingle">
					<div className="imagenDetalles"> 
						<img
							src={`https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type }/${id}.jpg`}
							className="detalleImagen"
							alt={store.detalles.name}
						/>
					</div>
					<div className="infoDetallada">
						<h2>{store.detalles.name}</h2>
						<p>Año de nacimiento: {store.detalles.birth_year}</p>
						<p>Género: {store.detalles.gender}</p>
						<p>Altura: {store.detalles.height}</p>
						<p>Peso: {store.detalles.mass}</p>
						<p>Color de Piel: {store.detalles.skin_color}</p>
						<p>Color de Ojos: {store.detalles.eye_color}</p>
						<p>Color de Pelo: {store.detalles.hair_color}</p>
						<p>Descripción: {store.detalles.description}</p>
					</div>
					<Link to="/" className="btn btn-primary">Vista principal</Link>
				</div>
			)}

			{type === "planets" && (
				<div className="detallesCardSingle">
					<div className="imagenDetalles"> 
						<img
							src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
							className="detalleImagen"
							alt={store.detalles.name}
						/>
					</div>
					<div className="infoDetallada">
						<h2>{store.detalles.name}</h2>
						<p>Población: {store.detalles.population}</p>
						<p>Clima: {store.detalles.climate}</p>
						<p>Terreno: {store.detalles.terrain}</p>
						<p>Gravedad: {store.detalles.gravity}</p>
						<p>Superficie con Agua: {store.detalles.surface_water}</p>
						<p>Diámetro: {store.detalles.diameter}</p>
						<p>Período Rotacional: {store.detalles.rotation_period}</p>
						<p>Período Orbital: {store.detalles.orbital_period}</p>
					</div>
					<Link to="/" className="btn btn-primary">Vista principal</Link>
				</div>
			)}

			{type === "vehicles" && (
				<div className="detallesCardSingle">
					<div className="imagenDetalles"> 
						<img
							src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
							className="detalleImagen"
							alt={store.detalles.name}
						/>
					</div>
					<div className="infoDetallada">
						<h2>{store.detalles.name}</h2>
						<p>Clase: {store.detalles.vehicle_class}</p>
						<p>Modelo: {store.detalles.model}</p>
						<p>Fabricante: {store.detalles.manufacturer}</p>
						<p>Longitud: {store.detalles.length}</p>
						<p>Capacidad de Carga: {store.detalles.cargo_capacity}</p>
						<p>Velocidad: {store.detalles.max_atmosphering_speed}</p>
						<p>Tripulación: {store.detalles.crew}</p>
						<p>Pasajeros (Sin Tripulación): {store.detalles.passengers}</p>
						<p>Pilotos: {store.detalles.pilots}</p>
						<p>Consumibles: {store.detalles.consumables}</p>
						<p>Precio: {store.detalles.cost_in_credits}</p>
					</div>
					<Link to="/" className="btn btn-primary">Vista principal</Link>
				</div>
			)}
		</div>
	);
};



export default Single;
