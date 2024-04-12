import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const InfoPlayer = () => {
    const { store, actions } = useContext(Context);
    const { playerId } = useParams();

    useEffect(() => {
        actions.getPersonajesId(playerId);
    }, [actions, playerId]);

    const playerInfo = store.personajesInfo;

    return (
        <div className="bg-gray-900 min-h-screen">
            {playerInfo && playerInfo.LifetimeStatistics && playerInfo.LifetimeStatistics.PvE && playerInfo.LifetimeStatistics.Gathering ? (
                <div>
                    <div className="p-4">
                        <h1 className="text-red-500 text-2xl font-semibold">{playerInfo.Name}</h1>
                        <h4 className="text-gray-400">Player ID: {playerInfo.Id}</h4>
                        <h4 className="text-gray-400">Total Fame: {playerInfo.LifetimeStatistics.Gathering.All.Total}</h4>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">PVE Fame</h1>
                            <h4 className="text-gray-400">{playerInfo.LifetimeStatistics.PvE.Total}</h4>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">KILL FAME</h1>
                            <h4 className="text-gray-400">{playerInfo.KillFame}</h4>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">DEATH FAME</h1>
                            <h4 className="text-gray-400">{playerInfo.DeathFame}</h4>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">RATIO FAME</h1>
                            <h4 className="text-gray-400">{playerInfo.FameRatio}</h4>
                        </div>
                    </div>
                    <hr className="border-gray-600 my-2" />
                    <h1 className="text-orange-600 text-lg font-semibold p-4">PVE FAME SPECIFIED</h1>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">ROYALS</h1>
                            <h4 className="text-gray-400">{playerInfo.LifetimeStatistics.PvE.Royal}</h4>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">OUTLANDS</h1>
                            <h4 className="text-gray-400">{playerInfo.LifetimeStatistics.PvE.Outlands}</h4>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">AVALON</h1>
                            <h4 className="text-gray-400">{playerInfo.LifetimeStatistics.PvE.Avalon}</h4>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">HELLGATE</h1>
                            <h4 className="text-gray-400">{playerInfo.LifetimeStatistics.PvE.Hellgate}</h4>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">CARRUPTED DUNGEON</h1>
                            <h4 className="text-gray-400">{playerInfo.LifetimeStatistics.PvE.CorruptedDungeon}</h4>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                            <h1 className="text-white text-lg font-semibold">MISTS</h1>
                            <h4 className="text-gray-400">{playerInfo.LifetimeStatistics.PvE.Mists}</h4>
                        </div>
                    </div>
                    <hr className="border-gray-600 my-2" />
                </div>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );
}
