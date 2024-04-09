import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { InputPlayer } from "./InputPlayer";

export const Player = () => {
    const { store, actions } = useContext(Context);
    const [search, setSearch] = useState("");

    const searcher = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        if (search.trim() !== "") {
            actions.getPersonajes(search);
        }
    }, [actions, search]);

    let results = store.personajes.players;
    if (!store.personajes.players) {
        return (
           <InputPlayer search={search} searcher={searcher} />
        );
    } else {
        if (search.trim() !== "") {
            results = results.filter((player) =>
                player.Name.toLowerCase().includes(search.toLowerCase())
            );
        }
    
        return (
            <div>
                <InputPlayer search={search} searcher={searcher} />
                <div>
                    {results.length > 0 ? (
                        results.map((player) => (
                            <div key={player.Id}>
                                <p>Nombre: {player.Name}</p>
                                <p>ID: {player.Id}</p>
                                <p>Guild ID: {player.GuildId}</p>
                                <p>Guild Name: {player.GuildName}</p>
                            </div>
                        ))
                    ) : (

                        <p>{search ? "Cargando datos." : "Resultado no encontrado." } </p>
                    )}
                </div>
            </div>
        );
    }
};
