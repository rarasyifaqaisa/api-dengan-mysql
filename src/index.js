import express from 'express'
import morgan from 'morgan'
import addFilm from './addfilm.js'
import delFilm from './delfilm.js'
import getAllFilm from './getallfilm.js'
import getFilm from './getfilm.js'
import putFilm from './putfilm.js'

const port = 8091
const app = express()
app.use(morgan('combined'))
app.use(express.json())

app.get("/films", getAllFilm)
app.post("/film", addFilm)
app.get("/film/:id", getFilm)
app.put("/film/:id", putFilm)
app.delete("/film/:id", delFilm)

app.listen(port)
console.log(`API sudah aktif di port ${port}`)