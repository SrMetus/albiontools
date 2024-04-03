import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const Personaje = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPersonajes();
    }, [actions]);

    if (store.personajes.length === 0) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            {store.personajes.map((personaje) => (
                <div key={personaje.Id}>
                    <p>Nombre: {personaje.Name}</p>
                    <p>ID: {personaje.Id}</p>
                    <p>Guild ID: {personaje.GuildId}</p>
                    <p>Guild Name: {personaje.GuildName}</p>
                </div>
            ))}
        </div>
    );
};
