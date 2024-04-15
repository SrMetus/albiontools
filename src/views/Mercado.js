import React from "react";

export const Mercado = () => {
    return (
        <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 px-1 cursor-pointer" htmlFor="caerleon-checkbox">
                <input type="checkbox" className="peer hidden" id="caerleon-checkbox" />
                <span className="appearance-none w-15 h-5 p-1 bg-gray-900 flex items-center justify-center text-white font-medium text-sm peer-checked:bg-blue-gray-500 peer-checked:text-gray-900 rounded-md">Caerleon</span>
            </label>
            <label className="relative flex items-center p-3 px-1 cursor-pointer" htmlFor="bridgewatch-checkbox" >
                <input type="checkbox" className="peer hidden" id="bridgewatch-checkbox" />
                <span className="appearance-none w-15 h-5 p-1 bg-gray-900 flex items-center justify-center text-white font-medium text-sm peer-checked:bg-blue-gray-500 peer-checked:text-gray-900 rounded-md">Bridgewatch</span>
            </label>
            <label className="relative flex items-center p-3 px-1 cursor-pointer" htmlFor="fortsterling-checkbox">
                <input type="checkbox" className="peer hidden" id="fortsterling-checkbox" />
                <span className="appearance-none w-15 h-5 p-1 bg-blue-500 flex items-center justify-center text-white font-sm peer-checked:bg-blue-gray-500 peer-checked:text-gray-900 rounded-md">Fort Sterling</span>
            </label>
            <label className="relative flex items-center p-3 px-1 cursor-pointer" htmlFor="lymhurst-checkbox">
                <input type="checkbox" className="peer hidden" id="lymhurst-checkbox" />
                <span className="appearance-none w-15 h-5 p-1 bg-gray-900 flex items-center justify-center text-white font-medium text-sm peer-checked:bg-blue-gray-500 peer-checked:text-gray-900 rounded-md">Lymhurst</span>
            </label>
            <label className="relative flex items-center p-3 px-1 cursor-pointer" htmlFor="martlock-checkbox">
                <input type="checkbox" className="peer hidden" id="martlock-checkbox" />
                <span className="appearance-none w-15 h-5 p-1 bg-gray-900 flex items-center justify-center text-white font-medium text-sm peer-checked:bg-blue-gray-500 peer-checked:text-gray-900 rounded-md">Martlock</span>
            </label>
        </div>
    );
}
