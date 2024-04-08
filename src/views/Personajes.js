import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Personaje = () => {
    const { store, actions } = useContext(Context);
    const [ personaje, setPersonaje ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState(""); // valores de input

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSearch();
        }
    };

    useEffect(() => {
        actions.getPersonajes("");
    }, [actions]);

    return (
        <>
            <div>
                <h1>Personajes</h1>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Buscar personaje..."
                />
            </div>
            <div>
                {store.personajes.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    store.personajes.map((player) => (
                        <div key={player.Id}>
                            <p>Nombre: {player.Name}</p>
                            <p>ID: {player.Id}</p>
                            <p>ID del gremio: {player.GuildId}</p>
                            <p>Nombre del gremio: {player.GuildName}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};
