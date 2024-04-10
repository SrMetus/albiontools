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
                <h1>{playerInfo.Name}</h1>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );

}