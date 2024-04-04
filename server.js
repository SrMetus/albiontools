import('node-fetch').then(({ default: fetch }) => {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  const PORT = process.env.PORT || 3002;

  app.use(cors())
  app.get('/api/data', async (req, res) => {
    try {
      const url = new URL('http://localhost' + req.url)
      //console.log(url);
      let player = url.searchParams.get('player');
      if (player) {
        const response = await fetch(`https://gameinfo.albiononline.com/api/gameinfo/search?q=${player}`); // Ruta del servidor
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API de terceros');
        }
        const data = await response.json();
        res.json(data);
      } else {
        res.status(400).json({ error: 'No se ha enviado el parámetro player' });
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
