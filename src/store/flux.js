const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajes: [],
      personaje: "",
    },
    actions: {
      getPersonajes: (player) => {
        fetch(`http://localhost:3002/api/data?player=${player}`)
          .then(data => {
            if (!data.ok) {
              throw new Error(`Error ${data.status} al obtener los datos`);
            }
            return data.json();
          })
          .then(data => {
            setStore({ personajes: data });
          })
      },
      getPersonajesId: (playerId) => {
        fetch(`http://localhost:3002/api/data?player=${playerId}`)
          .then(data => {
            if (!data.ok) {
              throw new Error(`Error ${data.status} al obtener los datos`);
            }
            return data.json();
          })
          .then(data => {
            setStore({ personajesId: data });
          })
      }
    },
  };
};

export default getState;