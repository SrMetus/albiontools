import React, { useContext, useEffect } from "react";
import { Sidebar } from "../components/Sidebar"; // Importa el componente Sidebar

export const Home = () => {

    return (
        <div>
            <p>Home</p>
            <Sidebar /> {/* Pasa las categorías como prop al componente Sidebar */}
        </div>
    );
};
