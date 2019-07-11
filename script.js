/* eslint-disable */
let cartman = {
    top: 650,
    left: 625,

};

let hotdogs = [];

let hipsters = [
    {}
];

document.onkeydown = function(e) {
    if (e.keyCode === 37){
        cartman.left = cartman.left - 10;
        moveCartman();

    }
    else if (e.keyCode === 39) {
        cartman.left = cartman.left + 10;
        moveCartman(); 
    }
    else if (e.keyCode === 32) {
        hotdogs.push({
            left: cartman.left + 15,
            top: cartman.top
        })
        createHotDogs()
    }

   };


function moveCartman() {
    document.getElementById('cartman').style.left = cartman.left + "px"
}

function createHotDogs() {
    document.getElementById('hotdogs').innerHTML = "";
    for(let hotdog = 0; hotdog < hotdogs.length; hotdog++) {
    document.getElementById('hotdogs').innerHTML += `<div class='hotdog' style='left:${hotdogs[hotdog].left}px;
    top:${hotdogs[hotdog].top}px;'></div>`;
    }
}
function moveHotDogs() { 
    for(let hotdog = 0; hotdog < hotdogs.length; hotdog++) {
        hotdogs[hotdog].top -= 5;

    }

}

function hotdogLoop() {
    setTimeout(hotdogLoop, 40)
    moveHotDogs()
    createHotDogs()
}
hotdogLoop();

//if cartman is at the border do not allow to move left of 1440 px 