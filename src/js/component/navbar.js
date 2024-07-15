// src/js/component/navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";


export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleClickEliminarFavorito = (id) => {
        actions.eliminarFavorito(id); // Llama a la acción para eliminar el favorito
    };

    return (
        <nav className="navbar mb-3">
            <Link to="/" className="navbar-brand">
                <img
                    className="startWars"
                    src="https://icons.iconarchive.com/icons/sensibleworld/starwars/512/Death-Star-icon.png"
                    alt="Star Wars Icon"
                />
            </Link>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos {store.favoritos.length}
                </button>
                <ul className="dropdown-menu dropdown-menu-end"> {/* Alinea el menú desplegable a la derecha */}
                    {store.favoritos && store.favoritos.length > 0 ? ( // Verifica que store.favoritos esté definido y tenga elementos
                        store.favoritos.map((favorito) => ( //Recorrer todos los favoritos almacenados en store. Cada favorito tiene un id y un name, que usamos para mostrar el nombre del favorito en el botón del menú desplegable.
                            <li key={favorito.id}>
                                <button className="dropdown-item" type="button">
                                    {favorito.name} {/* Mostrar el nombre del favorito */}
                                    <i className="bi bi-trash ml-2" onClick={() => handleClickEliminarFavorito(favorito.id)}></i> {/* Ícono de papelera de Bootstrap */}
                                </button> {/* ml-2 para agregar un pequeño margen a la izquierda del ícono para separarlo del texto del favorito */}
                            </li>
                        ))
                    ) : (
                        <li>
                            <span className="dropdown-item">Vacío</span>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

//navbar-brand es una clase específica que se utiliza para identificar el elemento que contiene el logotipo o nombre de la aplicación en una barra de navegación
