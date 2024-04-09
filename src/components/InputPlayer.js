import React, { useState } from "react";

export const InputPlayer = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        onSearch(searchTerm.trim()); // Llamar a la función de búsqueda con el término de búsqueda
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value); // Actualizar el término de búsqueda mientras el usuario escribe
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h1>Personajes</h1>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Nombre del jugador"
                />
            </form>
        </div>
    )
}
