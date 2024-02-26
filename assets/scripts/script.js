document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    console.log("Changement de fenetre/onglet detecté");
  }
});

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
        console.log("Ctrl+C pressed");
    }
    if (e.ctrlKey && (e.key === "v" || e.key === "V")) {
        console.log("Ctrl+V pressed");
    }
    if (e.key === "F12") {
        console.log("F12 pressed");
        // e.preventDefault();
    }
});     

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    console.log("Right click disabled");
});

