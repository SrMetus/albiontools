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
      getPersonajes: async () => {
        try {
          const response = await fetch('http://localhost:3001/api/data'); // Ruta de tu servidor en el lado del servidor
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          const data = await response.json();
          setStore({ personajes: data });
          console.log(data);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
        
    }
    },
  };
};

export default getState;
