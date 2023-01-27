let swLocation = "sw.js";
// en primer lugar se identifica si el enavehador trabaja...
if(navigator.serviceWorker){
    if(window.location.href.includes("localhost"))
    swLocation = "sw.js"
    navigator.serviceWorker.register(swLocation);
}
