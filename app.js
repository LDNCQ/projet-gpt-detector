import express from 'express'
import cors from 'cors'
import { getTableData, addTableData } from './assets/scripts/supabase.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, './')
console.log({publicPath})
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(publicPath))
// app.get('/data', async (req, res) => {
//    const {data, error} = await getTableData()
//    console.log({data})
//    res.json({data})
// })

// app.post('',async (req, res) => {
//      const {data, error} = await addTableData(req.body)
//      res.json({ data})
// })

app.get('', (req, res) => {
  res.redirect('../../index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


