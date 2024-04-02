//const url = process.env.REACT_APP_API_URL;
const url_personaje = 'https://gameinfo.albiononline.com/api/gameinfo/search?q=Pelotuda'

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
            const response = await fetch(url_personaje);
            if (!response.ok) {
                throw new Error('Error al obtener los personajes');
            }
            const data = await response.json();
            setStore({ personajes: data });
        } catch (error) {
            console.error('Error al obtener los personajes:', error);
        }
      }
    }
  }

}

export default getState;
