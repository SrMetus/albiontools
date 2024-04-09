import React from "react";

export const CardPlayer = ({ players }) => {
    return (
        <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Player Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Guild Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            KillFame
                        </th>
                        <th scope="col" className="px-6 py-3">
                            DeathFame
                        </th>
                        <th scope="col" className="px-6 py-3">
                            FameRatio
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.Id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {player.Name}
                            </th>
                            <td className="px-6 py-4">
                                {player.GuildName}
                            </td>
                            <td className="px-6 py-4">
                                {player.KillFame}
                            </td>
                            <td className="px-6 py-4">
                                {player.DeathFame}
                            </td>
                            <td className="px-6 py-4">
                                {player.FameRatio}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
