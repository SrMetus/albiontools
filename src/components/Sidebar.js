import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Sidebar = () => {
    const { store, actions } = useContext(Context);
    const [groupedCategories, setGroupedCategories] = useState({});

    useEffect(() => {
        // Llama a getCategories sin argumentos adicionales
        actions.getCategories();
    }, []);

    useEffect(() => {
        // Agrupar las categorías por tipo
        const grouped = store.categories.reduce((acc, category) => {
            if (!acc[category.type]) {
                acc[category.type] = [];
            }
            acc[category.type].push(category);
            return acc;
        }, {});
        setGroupedCategories(grouped);
    }, [store.categories]);
    console.log(store.categories);
    return (
        <div>
            {/* Itera sobre cada tipo de categoría */}
            {Object.entries(groupedCategories).map(([type, categories]) => (
                <div key={type}>
                    {/* Muestra el nombre del tipo de categoría */}
                    <h2>Categoría: {type}</h2>
                    {/* Itera sobre cada categoría del tipo */}
                    <ul>
                        {categories.map(category => (
                            <li key={category.id}>
                                {/* Muestra el nombre de la categoría */}
                                {/*<h3>{category.name}</h3>*/}
                                {/* Verifica si hay subcategorías y muéstralas */}
                                {category.subcategories.length > 0 && (
                                    <ul>
                                        {category.subcategories.map(subcategory => (
                                            <li key={subcategory.id}>
                                                {/* Muestra el nombre de la subcategoría */}
                                                <h4>{subcategory.name}</h4>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
