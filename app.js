// import express from 'express'
// import cors from 'cors'
// import { getTableData, addTableData} from './assets/scripts/model/supabase.js'
// import path from 'path';
// import { fileURLToPath } from 'url';
// import session from 'express-session';
// import pgp from 'pg-promise';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const publicPath = path.join(__dirname, './')
// const app = express()
// const port = 3000

// app.use(cors())
// app.use(express.json())
// app.use(express.static(publicPath))
// // app.get('/data', async (req, res) => {
// //    const {data, error} = await getTableData()
// //    console.log({data})
// //    res.json({data})
// // })

// // app.post('',async (req, res) => {
// //      const {data, error} = await addTableData(req.body)
// //      res.json({ data})
// // })

// // function insertAnwser(data) {
// //   const { error } = await supabase
// //   .from 
// // }

// app.get('', (req, res) => {
//   res.redirect('../../index.html')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// function randomString(length) {
//   let result = '';
//   const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   for (let i = 0; i < length; i++) {
//     const index = Math.floor(Math.random() * char.length);
//     result += char.charAt(index);
//   return result
// }};

// app.use(session({
//   secret: randomString(32),
//   // console.log(secret)
//   resave: false,
//   saveUninitialized: true,
// }));


// app.get('/page1', (req, res) => {
//   // Stockez la donnée dans la session
//   req.session.data = 'VotreDonnee';
//   res.sendFile('chemin_vers_page1.html');
// });

import express from 'express'
import cors from 'cors'
import {addDataIdentity, addDataEvenements} from './assets/scripts/supabase.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


app.post('/api/v1/identity', async (req, res) => {
  const {data, error} = await addDataIdentity(req.body)
  // res.send(req.body)
  res.json(data)
})

app.post('/api/v1/evenements', async (req, res) => {
  const {data, error} = await addDataEvenements(req.body)
  res.json(data)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
