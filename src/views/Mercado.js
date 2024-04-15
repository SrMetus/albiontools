import React from "react";

const tier = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"];
const nivel = ["0", "1", "2", "3", "4"]

export const Mercado = () => {
    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="inline-flex items-center">
                <span className="text-white pl-3 px-0.5">Seleccionar Ciudad:</span>
                <label className="relative flex items-center p-3 px-0.5 cursor-pointer" htmlFor="caerleon-checkbox">
                    <input type="checkbox" className="peer hidden" id="caerleon-checkbox" />
                    <span className="appearance-none w-15 h-5 p-1 bg-zinc-700 flex items-center justify-center text-white text-xs peer-checked:bg-zinc-400 peer-checked:text-white rounded-md">Caerleon</span>
                </label>
                <label className="relative flex items-center p-3 px-0.5 cursor-pointer" htmlFor="bridgewatch-checkbox">
                    <input type="checkbox" className="peer hidden" id="bridgewatch-checkbox" />
                    <span className="appearance-none w-15 h-5 p-1 bg-red-700 flex items-center justify-center text-white text-xs peer-checked:bg-red-400 peer-checked:text-gray-900 rounded-md">Bridgewatch</span>
                </label>
                <label className="relative flex items-center p-3 px-0.5 cursor-pointer" htmlFor="fortsterling-checkbox">
                    <input type="checkbox" className="peer hidden" id="fortsterling-checkbox" />
                    <span className="appearance-none w-15 h-5 p-1 bg-teal-800 flex items-center justify-center text-white text-xs peer-checked:bg-teal-600 peer-checked:text-gray-900 rounded-md">Fort Sterling</span>
                </label>
                <label className="relative flex items-center p-3 px-0.5 cursor-pointer" htmlFor="lymhurst-checkbox">
                    <input type="checkbox" className="peer hidden" id="lymhurst-checkbox" />
                    <span className="appearance-none w-15 h-5 p-1 bg-amber-700 flex items-center justify-center text-white text-xs peer-checked:bg-amber-600 peer-checked:text-gray-900 rounded-md">Lymhurst</span>
                </label>
                <label className="relative flex items-center p-3 px-0.5 cursor-pointer" htmlFor="martlock-checkbox">
                    <input type="checkbox" className="peer hidden" id="martlock-checkbox" />
                    <span className="appearance-none w-15 h-5 p-1 bg-green-600 flex items-center justify-center text-white text-xs peer-checked:bg-green-500 peer-checked:text-gray-900 rounded-md">Martlock</span>
                </label>
                <label className="relative flex items-center p-3 px-0.5 cursor-pointer" htmlFor="thetfort-checkbox">
                    <input type="checkbox" className="peer hidden" id="thetfort-checkbox" />
                    <span className="appearance-none w-15 h-5 p-1 bg-sky-700 flex items-center justify-center text-white text-xs peer-checked:bg-sky-500 peer-checked:text-gray-900 rounded-md">Thetfort</span>
                </label>
            </div>
            <div className="flex items-center">
                <span className="text-white pl-3 px-0.5">Seleccionar Tier:</span>
                {tier.map((item, index) => (
                    <label className="relative flex items-center p-[1px] cursor-pointer" key={index}>
                        <input type="checkbox" className="peer hidden" id={`tier-${item}`} />
                        <span className="appearance-none w-5 h-5 bg-zinc-700 flex items-center justify-center text-white text-xs peer-checked:bg-zinc-400 peer-checked:text-white rounded-sm">{item}</span>
                    </label>
                ))}
            </div>
            <div className="flex items-center">
                <span className="text-white pl-3 px0.5">Seleccionar Nivel:</span>
                {nivel.map((item, index) => (
                    <label className="relative flex items-center p-[1px] cursor-pointer" htmlFor={`${item}-checkbox`} key={index}>
                        <input type="checkbox" className="peer hidden" id={`nivel-${item}`} />
                        <span className="appearance-none w-5 h-5 bg-zinc-700 flex items-center justify-center text-white text-xs peer-checked:bg-zinc-400 peer-checked:text-white rounded-sm">{item}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
