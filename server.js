import('node-fetch').then(({ default: fetch }) => {
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;
  
    app.get('/api/data', async (req, res) => {
      try {
        const response = await fetch('https://gameinfo.albiononline.com/api/gameinfo/search?q=pelotuda');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API de terceros');
        }
        const data = await response.json();
        res.json(data);
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
  