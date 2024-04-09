import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { InputPlayer } from "./InputPlayer";

export const Player = () => {
    const { store, actions } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm); // Actualizar el término de búsqueda
    };

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            actions.getPersonajes(searchTerm); // Realizar la búsqueda cuando el término de búsqueda cambie
        }
    }, [actions, searchTerm]);

    let results = store.personajes.players;

    return (
        <div>
            <InputPlayer onSearch={handleSearch} /> {/* Pasar la función de búsqueda al componente InputPlayer */}
            <div>
                {results && results.length > 0 ? (
                    results.map((player) => (
                        <div key={player.Id}>
                            <p>Nombre: {player.Name}</p>
                            <p>Guild Name: {player.GuildName}</p>
                            <p>ID: {player.Id}</p>
                            <p>Guild ID: {player.GuildId}</p>
                        </div>
                    ))
                ) : (
                    <p>{searchTerm ? "Cargando datos..." : "Resultado no encontrado."}</p>
                )}
            </div>
        </div>
    );
};
