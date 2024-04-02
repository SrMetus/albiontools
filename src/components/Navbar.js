import React, { useState } from "react";
//import "../styles/navbar.css";
//import { Link } from "react-router-dom";

export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }
    return (
        <nav className="bg-gray-800 font-semibold">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-center">
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:bg-gray-600 rounded-md p-1">Inicio</a>
                        <a href="/personaje" className="text-white hover:bg-gray-600 rounded-md p-1">Personajes</a>
                        <a href="#" className="text-white hover:bg-gray-600 rounded-md p-1">Mercado</a>
                        <div className="relative" onClick={toggleDropdown}>
                            <button className="text-white hover:bg-gray-600 rounded-md p-1">Calculadora</button>
                            <div className={`absolute bg-gray-700 mt-1 p-3 rounded-md ${dropdownOpen ? '' : 'hidden'}`}>
                                <a href="#" className="block text-white hover:bg-gray-600 rounded-md p-1">Pesca</a>
                                <a href="#" className="block text-white hover:bg-gray-600 rounded-md p-1">Peleteria</a>
                                <a href="#" className="block text-white hover:bg-gray-600 rounded-md p-1">Mineria</a>
                                <a href="#" className="block text-white hover:bg-gray-600 rounded-md p-1">Cocina</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};