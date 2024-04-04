//const url = process.env.REACT_APP_API_URL;
//const url_personaje = "https://api.openalbion.com/api/v3/weapons";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajes: [],
      personaje: "",
    },
    actions: {
      // GETS personajes
     /* getPersonajes: async () => {
        try {
          const response = await fetch('http://localhost:3002/api/data'); // Ruta del servidor
          if (!response.ok) {
            throw new Error(`Error ${response.status} al obtener los datos`);
            console.log(response);
          }
          return await response.json();
          setStore({ personajes: data });
          console.log(store.personajes, "personajes");
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      }*/
      getPersonajes: (player) => {
        fetch(`http://localhost:3002/api/data?player=${player}`).then(data => {
         if (!data.ok) {
           throw new Error(`Error ${data.status} al obtener los datos`);
         }
         return data.json();
        }).then(data => {
          setStore({ personajes: data });
        })
      }
    },
  };
};

export default getState;
