let crewmate = document.getElementById("crewmate");
let amogus = document.getElementById("amogus-sf");


let Colle = 0;
let F12 = 0;
let inspection = 0;
let ChangementFenetre = 0;
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
      console.log("Changement de fenêtre/onglet détecté");
      ChangementFenetre++;
    }
  });
  

document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === "v" || e.key === "V")) {
        e.preventDefault();
        amogus.volume = 0.1;
        amogus.play();
        setTimeout(() => {
            crewmate.style.display = "flex";
            setTimeout(() => {
                crewmate.style.display = "none";
            },2000);
        },300);
        Colle++;
        
    } else if (e.key === "F12") {
        e.preventDefault();
        amogus.volume = 0.1;
        amogus.play();
        F12++;
        setTimeout(() => {
            crewmate.style.display = "flex";
            setTimeout(() => {
                crewmate.style.display = "none";
            },2000);
        },300);
        malus()
        
    } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J")) {
        amogus.volume = 0.1;
        amogus.play();
        Inspection++;
        setTimeout(() => {
            crewmate.style.display = "flex";
            setTimeout(() => {
                crewmate.style.display = "none";
            },2000);
        },300);
        e.preventDefault();
    } 

});     
  
  
//   document.addEventListener("contextmenu", function(e) {
//       e.preventDefault();
//       console.log("Right click disabled");
//   });
  
  //     const inputs = []
  // document.addEventListener("keydown", function(e) {
  //     inputs.push(e.key);
  //     console.log(inputs);
  // })
  //        Pour debug
  





function envoyerDonneesEvent() {

    const postData = 
    {
        // "id": id,
        "Colle" : Colle,
        "F12" : F12,
        "Inspection" : inspection,
        "ChangementFenetre" : ChangementFenetre
    };

    fetch('http://localhost:3000/api/v1/evenements', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
}

