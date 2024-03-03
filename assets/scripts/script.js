let tr = document.getElementById("therock")
let crewmate = document.getElementById("crewmate");
let boom = document.getElementById("boom-vine-sf");
let amogus = document.getElementById("amogus-sf");

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
      console.log("Changement de fenêtre/onglet détecté");
    }
  });
  

document.addEventListener("keydown", function(e) {
    navigator.clipboard.writeText("You shall not paste")
    if ((e.ctrlKey || e.metaKey) && (e.key === "v" || e.key === "V")) {
        console.log("Ctrl+V pressed");
        boom.volume = 0.1;
        boom.play();
        setTimeout(() => {
            tr.style.display = "block";
            setTimeout(() => {
                tr.style.display = "none";
            },700);
        }, 1000);

    } else if (e.key === "F12") {
        e.preventDefault();
        console.log("F12 pressed");
        amogus.volume = 0.1;
        amogus.play();
        setTimeout(() => {
            crewmate.style.display = "block";
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
  
  