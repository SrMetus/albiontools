import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const InfoPlayer = () => {
    const { store, actions } = useContext(Context);
    const { playerId } = useParams();
    const [ playerInfo, setPlayerInfo ] = useState(null);

    useEffect(() => {
        actions.getPersonajesId(playerId);
    }, [actions, playerId]);

    useEffect(() => {
        setPlayerInfo(store.personajesInfo);
    }, [store.personajesInfo]);

    return (
        <div>
            { playerInfo ? (
                <div>
                    <h1>Informacion del juegador: {playerInfo.Name}</h1>
                    <h3>Guild Name: {playerInfo.GuildName}</h3>
                    <h3>Death Fame: {playerInfo.DeathFame}</h3>
                    <h3>Kill Fame: {playerInfo.KillFame}</h3>
                    <h3>Ratio Fame: {playerInfo.FameRatio}</h3>
                    <h1>PvE</h1>
                    {playerInfo.LifetimeStatistics && playerInfo.LifetimeStatistics.PvE ? (
                        <div>
                            <h3>Total: {playerInfo.LifetimeStatistics.PvE.Total}</h3>
                            <h3>Royal: {playerInfo.LifetimeStatistics.PvE.Royal}</h3>
                            <h3>Outlands: {playerInfo.LifetimeStatistics.PvE.Outlands}</h3>
                            <h3>Avalon: {playerInfo.LifetimeStatistics.PvE.Avalon}</h3>
                            <h3>Hellgate: {playerInfo.LifetimeStatistics.PvE.Hellgate}</h3>
                            <h3>CarruptedDungeon: {playerInfo.LifetimeStatistics.PvE.CorruptedDungeon}</h3>
                            <h3>Mists: {playerInfo.LifetimeStatistics.PvE.Mists}</h3>
                        </div>
                    ) : (
                        <h3>No se han cargado datos</h3>
                    )}
                    <h1>Gathering</h1>
                    {playerInfo.LifetimeStatistics && playerInfo.LifetimeStatistics.Gathering ? (
                        <div>
                            <h2>Fiber</h2>
                                <h3>Total: {playerInfo.LifetimeStatistics.Gathering.Fiber.Total}</h3>
                                <h3>Royal: {playerInfo.LifetimeStatistics.Gathering.Fiber.Royal}</h3>
                                <h3>Outlands: {playerInfo.LifetimeStatistics.Gathering.Fiber.Outlands}</h3>
                                <h3>Avalon: {playerInfo.LifetimeStatistics.Gathering.Fiber.Avalon}</h3>
                            <h2>Hide</h2>
                                <h3>Total: {playerInfo.LifetimeStatistics.Gathering.Hide.Total}</h3>
                                <h3>Royal: {playerInfo.LifetimeStatistics.Gathering.Hide.Royal}</h3>
                                <h3>Outlands: {playerInfo.LifetimeStatistics.Gathering.Hide.Outlands}</h3>
                                <h3>Avalon: {playerInfo.LifetimeStatistics.Gathering.Hide.Avalon}</h3>
                            <h2>Ore</h2>
                                <h3>Total: {playerInfo.LifetimeStatistics.Gathering.Ore.Total}</h3>
                                <h3>Royal: {playerInfo.LifetimeStatistics.Gathering.Ore.Royal}</h3>
                                <h3>Outlands: {playerInfo.LifetimeStatistics.Gathering.Ore.Outlands}</h3>
                                <h3>Avalon: {playerInfo.LifetimeStatistics.Gathering.Ore.Avalon}</h3>
                            <h2>Rock</h2>
                                <h3>Total: {playerInfo.LifetimeStatistics.Gathering.Rock.Total}</h3>
                                <h3>Royal: {playerInfo.LifetimeStatistics.Gathering.Rock.Royal}</h3>
                                <h3>Outlands: {playerInfo.LifetimeStatistics.Gathering.Rock.Outlands}</h3>
                                <h3>Avalon: {playerInfo.LifetimeStatistics.Gathering.Rock.Avalon}</h3>
                            <h2>Wood</h2>
                                <h3>Total: {playerInfo.LifetimeStatistics.Gathering.Wood.Total}</h3>
                                <h3>Royal: {playerInfo.LifetimeStatistics.Gathering.Wood.Royal}</h3>
                                <h3>Outlands: {playerInfo.LifetimeStatistics.Gathering.Wood.Outlands}</h3>
                                <h3>Avalon: {playerInfo.LifetimeStatistics.Gathering.Wood.Avalon}</h3>
                            <h2>All</h2>
                                <h3>Total: {playerInfo.LifetimeStatistics.Gathering.All.Total}</h3>
                                <h3>Royal: {playerInfo.LifetimeStatistics.Gathering.All.Royal}</h3>
                                <h3>Outlands: {playerInfo.LifetimeStatistics.Gathering.All.Outlands}</h3>
                                <h3>Avalon: {playerInfo.LifetimeStatistics.Gathering.All.Avalon}</h3>
                        </div>
                    ) : (
                        <h3>No se han cargado datos</h3>
                    )}
                </div>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );

}