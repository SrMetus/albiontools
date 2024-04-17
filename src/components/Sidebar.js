import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Sidebar = () => {
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        // Llama a getCategories sin argumentos adicionales
        actions.getCategories();
    }, []);

    // Verifica si store.categories es un array antes de intentar mapearlo
    const categoriesData = Array.isArray(store.categories) ? store.categories : [];

    return (
        <div>
            {/* Itera sobre cada categoría */}
            {categoriesData.map(category => (
                <div key={category.id}>
                    {/* Muestra el nombre de la categoría */}
                    <h2>Categoría: {category.name}</h2>
                    {/* Itera sobre cada subcategoría */}
                    <ul>
                        {category.subcategories.map(subcategory => (
                            <li key={subcategory.id}>
                                {/* Muestra el nombre de la subcategoría */}
                                {subcategory.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}