import React from "react";

export const Mercado = () => {
    return (
        <div className="bg-gray-900 flex">
            <div className="flex items-center me-4">
                <input id="caerleon-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="caerleon-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Caerleon</label>
            </div>
            <div className="flex items-center me-4">
                <input id="bridgewatch-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="bridgewatch-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bridgewatch</label>
            </div>
            <div className="flex items-center me-4">
                <input id="FortSterling-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="FortSterling-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fort Sterling</label>
            </div>
            <div className="flex items-center me-4">
                <input id="lymhurst-checkbox" type="checkbox" value="" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="lymhurst-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lymhurst</label>
            </div>
            <div className="flex items-center me-4">
                <input id="martlock-checkbox" type="checkbox" value="" className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="martlock-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Martlock</label>
            </div>
            <div className="flex items-center me-4">
                <input id="thetford-checkbox" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="thetford-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thetford</label>
            </div>
        </div>
    );
}
