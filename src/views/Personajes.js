import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const Personaje = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPersonajes("pelotuda");
    }, []);
    console.log(store, "personajes.js");
    if (!store.personajes.players) {
        return <p>Cargando...</p>;
    } else {

        return (
            <div>
                {store.personajes.players.map((r) => (
                    <div key={r.Id}>
                        <p>Nombre: {r.Name}</p>
                        <p>ID: {r.Id}</p>
                        <p>Guild ID: {r.GuildId}</p>
                        <p>Guild Name: {r.GuildName}</p>
                    </div>
                ))}
            </div>
        );
    }
};
