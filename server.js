const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/consulta-github/", serveStatic(path.join(__dirname, "public"),{
    maxAge: '1d',
    setHeaders: setCustomCacheControl
  }));
  
function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

app.listen(3333, () => {
    console.log('levantou porta 3333 ');
})