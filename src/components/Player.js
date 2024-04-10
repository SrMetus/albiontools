import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { InputPlayer } from "./InputPlayer";
import { CardPlayer } from "./CardPlayer";

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
                {results && results.length > 0 && (
                    <CardPlayer players={results} />
                )}
                {!results && <p className="text-white">Cargando datos...</p>}
                {results && results.length === 0 && <p className="text-white">Resultado no encontrado.</p>}
            </div>
        </div>
    );
};
