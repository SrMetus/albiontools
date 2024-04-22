import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Sidebar = () => {
    const { store, actions } = useContext(Context);
    const [groupedCategories, setGroupedCategories] = useState({});
    const [expandedCategories, setExpandedCategories] = useState({});

    useEffect(() => {
        actions.getCategories();
    }, []);

    useEffect(() => {
        const grouped = store.categories.reduce((acc, category) => {
            if (!acc[category.type]) {
                acc[category.type] = [];
            }
            acc[category.type].push(category);
            return acc;
        }, {});
        setGroupedCategories(grouped);
        // Inicializa el estado de cada categoría como no expandida
        setExpandedCategories(Object.fromEntries(Object.keys(grouped).map(type => [type, false])));
    }, [store.categories]);

    const toggleCategory = type => {
        setExpandedCategories({
            ...expandedCategories,
            [type]: !expandedCategories[type]
        });
    };

    return (
        <div className="bg-gray-800 w-48 flex flex-col h-full">
            <div className="py-1 px-2 bg-gray-900 text-white text-lg font-semibold">Mercado</div>
            {Object.entries(groupedCategories).map(([type, categories]) => (
                <div key={type}>
                    <h2
                        className="px-2 py-2 text-gray-300 hover:text-white cursor-pointer"
                        onClick={() => toggleCategory(type)}>
                        {expandedCategories[type] ? "- " : "+ "}
                        {type}
                    </h2>
                    <ul className={expandedCategories[type] ? "block" : "hidden"}>
                        {categories.map(category => (
                            <li key={category.id} className="px-2 py-2 text-gray-300 hover:text-white cursor-pointer">
                                {category.name}
                                {category.subcategories.length > 0 && (
                                    <ul className="ml-4">
                                        {category.subcategories.map(subcategory => (
                                            <li key={subcategory.id} className="py-2 text-gray-300 hover:text-white cursor-pointer">
                                                {subcategory.name}
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
    );
};
