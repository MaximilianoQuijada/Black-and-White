const Jimp = require('jimp')
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.listen(3000)

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/cargar', async (req, res) => {
  const { imagen } = req.query
  const nombreDeLaImagen = `${uuidv4().slice(30)}.jpeg`
  const IMG = await Jimp.read(imagen)
  await IMG
    .resize(350, Jimp.AUTO)
    .greyscale()
    .writeAsync(nombreDeLaImagen)
  res.sendFile(__dirname + "/" + nombreDeLaImagen)
})

app.get('/estilos', (req, res) => {
  res.sendFile(__dirname + "/estilos.css")
})


console.log(process.pid)
