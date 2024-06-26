import('node-fetch').then(({ default: fetch }) => {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  const PORT = process.env.PORT || 3002;

  app.use(cors())
  app.get('/api/data', async (req, res) => {
    try {
      const url = new URL('http://localhost' + req.url);
      const player = url.searchParams.get('player');
      const playerId = url.searchParams.get('playerId');
      const category = url.searchParams.get('category'); // Obtener el parámetro 'category'

      if (player) { // obtener lista de los 10 primeros personajes y guilds, según el nombre del jugador o guild
        const response = await fetch(`https://gameinfo.albiononline.com/api/gameinfo/search?q=${player}`);
        if (!response.ok) {
          throw new Error(JSON.stringify(response));
        }
        const data = await response.json();
        res.json(data);
      } else if (playerId) { // obtener información del personaje según su ID
        const response = await fetch(`https://gameinfo.albiononline.com/api/gameinfo/players/${playerId}`);
        if (!response.ok) {
          throw new Error(JSON.stringify(response));
        }
        const data = await response.json();
        res.json(data);
      } else if (category) { // obtener todas las categorías
        const response = await fetch(`https://api.openalbion.com/api/v3/categories`);
        if (!response.ok) {
          throw new Error(JSON.stringify(response));
        }
        const data = await response.json();
        res.json(data);
      } else {
        res.status(400).json({ error: 'No se ha enviado el parámetro player, playerId o categorie' });
      }
    } catch (error) {
      console.error('Error al obtener los datos de la API de terceros:', error);
      res.status(500).json({ error: 'Error al obtener los datos de la API de terceros' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error al importar node-fetch:', error);
});
