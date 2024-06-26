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
                <div className="pt-2 pb-2 bg-white dark:bg-gray-900 flex items-center justify-center">                
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none ">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="block ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={searchTerm} onChange={handleInputChange} placeholder="Nombre del jugador" />
                    </div>
                </div>
            </form>
        </div>
    )
}
