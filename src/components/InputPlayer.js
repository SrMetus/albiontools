import React from "react";

export const InputPlayer = ({ search, searcher }) => {
    return (
        <div>
            <form onSubmit={""} >
                <h1>Personajes</h1>
                <input
                    type="text"
                    value={search}
                    onChange={searcher}
                    placeholder="Nombre del jugador"
                />
            </form>
        </div>
    )
}