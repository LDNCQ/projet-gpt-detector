import express from 'express'
import cors from 'cors'
import {addDataIdentity, ajoutReponses} from './assets/scripts/supabase.js'
const app = express()
const port = 3000
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, './')

app.use(cors())
app.use(express.json())
app.use(express.static(publicPath))

app.get('', (req, res) => {
  res.redirect('../../index.html')
})

app.post('/api/v1/identity', async (req, res) => {
  const {data, error} = await addDataIdentity(req.body)
  // res.send(req.body)
  res.json(data)
})

app.post('/api/v1/reponses', async (req, res) => {
  const {data, error} = await ajoutReponses(req.body)
  // res.send(req.body)
  res.json(data)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
