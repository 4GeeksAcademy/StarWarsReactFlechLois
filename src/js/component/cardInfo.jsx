import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 


//Este componente representará cada entidad (personaje, vehículo o planeta).
export const Card = ({ id, type , name}) => {
    const { store, actions } = useContext(Context);
   
    const handleClick = () => {
        if (!store.favoritos.find(favorito => favorito.id === id)) {
            actions.agregarFavorito(id, name);
        } else {
            actions.eliminarFavorito(id, name);
        }
    };


    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${type == "people"? "characters": type }/${id}.jpg`}
                className="card-img-top"
                alt={name}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/${type}/${id}`} className="btn btn-info"> {/*  utiliza id porque es un identificador único para cada entidad en la API de Star Wars. Al hacer clic en este enlace, se navega a la vista de detalles del elemento con el identificador correspondiente. */}
                        <i className="bi bi-info-circle-fill"></i>
                    </Link>
                    <button className="btn btn-warning ml-2" onClick={handleClick}> {/* Cuando se hace clic en el botón, se llama a la función handleClick. Esta función determina si el id del elemento ya está en la lista de favoritos o no. */}
                        {store.favoritos.find(favorito => favorito.id === id) ? ( //Verifica si el id del elemento actual (Card) está presente en la lista de favoritos
                            <i className="bi bi-bookmark-heart-fill text-danger"></i> //Si es así, muestra un corazón lleno (bi-bookmark-heart-fill) de color rojo (text-danger), lo que indica que este elemento ya está marcado como favorito.
                        ) : (
                            <i className="bi bi-bookmark-heart-fill"></i>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};