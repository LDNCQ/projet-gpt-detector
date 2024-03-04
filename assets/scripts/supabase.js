// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://tknqsoufdrwetvloclqo.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbnFzb3VmZHJ3ZXR2bG9jbHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNDAzNjYsImV4cCI6MjAyNDYxNjM2Nn0.CP40RI-Co5YYTgEGXOjaG-leRl_Qv1OH9TMe8d1NqIA"
// const supabase = createClient(supabaseUrl, supabaseKey)




// async function getTableData() {
//     const {data, error} = await supabase
//     .from('table-test')
//     .select()
//     return {data, error}
// }

// async function addTableData(data) {
//     const {date, error} = await supabase
//     .from('table-test')
//     .insert([data])
//     return {data, error}
// }



// export {getTableData, addTableData}



import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tknqsoufdrwetvloclqo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbnFzb3VmZHJ3ZXR2bG9jbHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNDAzNjYsImV4cCI6MjAyNDYxNjM2Nn0.CP40RI-Co5YYTgEGXOjaG-leRl_Qv1OH9TMe8d1NqIA"
const supabase = createClient(supabaseUrl, supabaseKey)

async function addDataIdentity(info) {

    const { data, error } = await supabase
    .from('etudiant')
    .insert(info)
    .select()
    return { data, error }
    

        
}

async function ajoutReponses(rep) {
    const { data, error } = await supabase
    .from('reponses')
    .insert(rep)
async function addDataEvenements(info) {

    const { data, error } = await supabase
    .from('evenements')
    .insert(info)
    .select()
    return { data, error }
}

export {addDataIdentity, ajoutReponses}
// async function giveId() {


//     const { data, error } = await supabase
//     .from('etudiant')
//     .select()
//     .in('nom', [nom])
//     .then(result => {
//         const id = result.data[0].id;
//         console.log(id)
//     })
//     return { data, error }
// }





export {addDataIdentity, addDataEvenements}
