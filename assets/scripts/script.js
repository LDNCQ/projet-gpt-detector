let crewmate = document.getElementById("crewmate");
let amogus = document.getElementById("amogus-sf");

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
      console.log("Changement de fenêtre/onglet détecté");
    }
  });
  

document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === "v" || e.key === "V")) {
        amogus.volume = 0.1;
        amogus.play();
        setTimeout(() => {
            crewmate.style.display = "flex";
            setTimeout(() => {
                crewmate.style.display = "none";
            },2000);
        },300);

    } else if (e.key === "F12") {
        e.preventDefault();
        console.log("F12 pressed");
        amogus.volume = 0.1;
        amogus.play();
        setTimeout(() => {
            crewmate.style.display = "flex";
            setTimeout(() => {
                crewmate.style.display = "none";
            },2000);
        },300);
        malus()
        
    } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J")) {
        console.log("Ctrl+Shift+I pressed");
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
  


