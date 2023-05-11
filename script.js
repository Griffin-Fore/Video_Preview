console.log("page loaded...");

function overVideo(element) {
    console.log("hovered over");
    element.play();
}

function outVideo(element) {
    console.log("hovered out");
    if(element.play){
        element.pause();
    }
}
