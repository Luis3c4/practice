import express from 'express'; // Importa Express
import cors from 'cors';       // Importa CORS
import fetch from 'node-fetch'; // Importa fetch para solicitudes HTTP

const app = express();
const PORT = 3000;

// Habilita CORS para todas las rutas
app.use(cors());

// Ruta para obtener datos desde la API externa
app.get('/api/sound', async (req, res) => {
    const artistName=req.query.artist;
    const songTitle=req.query.song;
    if (!artistName || !songTitle) {
        return res.status(400).json({ error: 'El nombre del artista es requerido.' });
    }
    try {
        const apiUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(artistName)}`;
        const lyricsUrl = `https://api.lyrics.ovh/v1/${encodeURIComponent(artistName)}/${encodeURIComponent(songTitle)}`;

        const [artistResponse, lyricsResponse]= await Promise.all([
            fetch(apiUrl),
            fetch(lyricsUrl)
        ])
        
        const[artistData, lyricsData] = await Promise.all([
            artistResponse.json(),
            lyricsResponse.json()
        ])

        res.json({
            artistInfo: artistData.artists ? artistData.artists[0]: null,
            songLyrics: lyricsData.lyrics || null 
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
