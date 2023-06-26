// Modules used for Backend
const express = require('express')
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;
const cors = require('cors');

// Use Cors for Requests to resources
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/checkurl', (req, res) => {
  const query = req.query.URL; // Retrieve the URL query parameter

  ytdl.getInfo(query)
    .then(info => {
      // Get the Video Details with the ytdl-core Module
      var response = info.videoDetails.title;
      // Send response to client
      response = response.toString();
      res.status(200).send(response);
    })
    .catch(error => {
      // Throw exception on error
      console.error(error);
      res.status(500).send('An error occurred while checking the URL.');
    });
});



app.get('/downloadmp4', (req,res) => {
  var URL = req.query.URL; // Retrieve the URL query parameter
  
  // Set Header for Download
  res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
  // Download Video for MP4 and send it directly to client
  ytdl(URL, { format: 'mp4' }).pipe(res);
});
  
app.get('/downloadmp3', (req,res) => {
  var URL = req.query.URL; // Retrieve the URL query parameter
  
  // Set Header for Download
  res.setHeader('Content-Type', 'audio/mpeg', 'attachment; filename="video.mp3"');

  // Download Video for MP3 and send it directly to client
  ytdl(URL, { filter: 'audioonly'}).pipe(res);
});
  
