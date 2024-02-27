let tr = document.getElementById("therock")
// let tr2 = document.getElementById("therock2")
// let tr3 = document.getElementById("therock3")
let boom = document.getElementById("boom-vine-sf");
let amogus = document.getElementById("amogus-sf");

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
      console.log("Changement de fenetre/onglet detecté");
    }
  });
  
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey) {
        navigator.clipboard.writeText("You shall not paste");
        console.log("Ctrl pressed");
    } else if ((e.ctrlKey || e.metaKey) && (e.key === "v" || e.key === "V")) {
        console.log("Ctrl+V pressed");
        boom.play();

        tr.style.display = "block";
        setTimeout(() => {
            tr.style.display = "none";
        }, 200);

    } else if (e.key === "F12") {
        console.log("F12 pressed");
        // tr2.style.display = "block";
        // setTimeout(() => {
        //     tr2.style.display = "none";
        // }, 200);
        e.preventDefault();
    } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J")) {
        console.log("Ctrl+Shift+I pressed");
        e.preventDefault();
    } 
    console.log(e.key);
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
  
  