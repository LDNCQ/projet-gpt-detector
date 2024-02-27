// let tr = document.getElementById("therock")
// let tr2 = document.getElementById("therock2")
// let tr3 = document.getElementById("therock3")
// let createClient = require('@supabase/supabase-js').createClient;
// import { createClient } from './config';

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    console.log("Changement de fenetre/onglet detecté");
  }
});

document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "C")) {
        console.log("Ctrl+C pressed");
        // tr.style.display = "block";
        // setTimeout(() => {
        //     tr.style.display = "none";
        // }, 200);

    } else if ((e.ctrlKey || e.metaKey) && (e.key === "v" || e.key === "V")) {
        console.log("Ctrl+V pressed");
        navigator.clipboard.writeText("You shall not paste");

        // tr3.style.display = "block";
        // setTimeout(() => {
        //     tr3.style.display = "none";
        // }, 200);

    } else if (e.key === "F12") {
        console.log("F12 pressed");

        e.preventDefault();

        // tr2.style.display = "block";
        // setTimeout(() => {
        //     tr2.style.display = "none";
        // }, 200);
        // e.preventDefault();

    }
});     


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    console.log("Right click disabled");
});

//     const inputs = []
// document.addEventListener("keydown", function(e) {

//     inputs.push(e.key);
//     console.log(inputs);
// }
// )

