const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajes: [],
      personaje: "",
      personajesInfo: [],
      personajeInfo: "",
      categories: [],
      categorie: "",
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
        fetch(`http://localhost:3002/api/data?playerId=${playerId}`)
          .then(data => {
            if (!data.ok) {
              throw new Error(`Error ${data.status} al obtener los datos`);
            }
            return data.json();
          })
          .then(data => {
            setStore({ personajesInfo: data });
          })
      },
      getCategories: (category) => {
        //fetch(`http://localhost:3002/api/data?category=${category}`)
        fetch(`https://api.openalbion.com/api/v3/categories`)
          .then(data => {
            if (!data.ok) {
              throw new Error(`Error ${data.status} al obtener los datos`);
            }
            return data.json();
          })
          .then(data => {
            setStore({ categories: data.data});
            console.log(data);
          })
      }
    },
  };
};

export default getState;