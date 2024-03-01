import express from 'express'
import cors from 'cors'
import { getTableData, addTableData } from './supabase.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
   const {data, error} = await getTableData()
   console.log({data})
   res.json({data})
})

app.post('/',async (req, res) => {
     const {data, error} = await addTableData(req.body)
     res.json({ data})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


