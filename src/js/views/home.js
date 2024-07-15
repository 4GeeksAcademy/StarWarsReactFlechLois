import React, { useContext } from "react";
import { Context } from "../store/appContext"; //acceder al estado global y las acciones.
import { Card } from "../component/cardInfo.jsx"; //responsable de mostrar la información de cada personaje, vehículo y planeta en forma de card


export const Home = () => {
    const { store, actions } = useContext(Context);


    return (
        <div>
            <h1>Personajes</h1>
            <div className="scroll-container">
                {store.personajes.map((personaje) => ( //Buscamos, mapeamos cada personaje denntro del array. Para cada personaje, renderizo la card y como prop "personaje"
                    <Card key={personaje.uid} id={personaje.uid} name={personaje.name} type="people" /> //uid porque lo pone asi en la API
                ))}
            </div>

            <h1>Vehículos</h1>
            <div className="scroll-container">
                {store.vehiculos.map((vehiculo) => (
                    <Card key={vehiculo.uid} id={vehiculo.uid} name={vehiculo.name} type="vehicles" />
                ))}
            </div>

            <h1>Planetas</h1>
            <div className="scroll-container">
                {store.planetas.map((planeta) => (
                    <Card key={planeta.uid} id={planeta.uid} name={planeta.name} type="planets" />
                ))}
            </div>
        </div>
    );
};
