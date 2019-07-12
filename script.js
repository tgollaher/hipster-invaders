/* eslint-disable */
let cartman = {
    top: 650,
    left: 625,

};

let hotdogs = [];

let hipsters = [

    {left: 200, top: 110},
    {left: 300, top: 110},
    {left: 400, top: 110},
    {left: 500, top: 110},
    {left: 600, top: 110},
    {left: 700, top: 110},
    {left: 800, top: 110},
    {left: 900, top: 110},
    {left: 400, top: 200},
    {left: 500, top: 200},
    {left: 600, top: 200},
    {left: 700, top: 200},
    

];

document.onkeydown = function(e) {
    if (e.keyCode === 37){
        cartman.left -= 10;
        moveCartman();

    }
    else if (e.keyCode === 39) {
        cartman.left +=  10;
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

function createHipsters() {
     document.getElementById('hipsters').innerHTML = "";
    for(let hipster = 0; hipster < hipsters.length; hipster++) {
    document.getElementById('hotdogs').innerHTML += `<div class='hipster' style='left:${hipsters[hipster].left}px;
    top:${hipsters[hipster].top}px;'></div>`;
    }


}

function moveHipsters() { 
    for(let hipster = 0; hipster < hipsters.length; hipster++) {
        hipsters[hipster].top += 1;

    }

}

function collisionDetection() {
    for(let hipster = 0; hipster < hipsters.length; hipster++) {
        for(let hotdog = 0; hotdog < hotdogs.length; hotdog++) {
            if(
                (hotdogs[hotdog].top <= hipsters[hipster].top + 90) &&
                (hotdogs[hotdog].top >= hipsters[hipster].top) &&
                (hotdogs[hotdog].left >= hipsters[hipster].left) &&
                (hotdogs[hotdog].left <= hipsters[hipster].left + 90)
            ){
                hipsters.splice(hipster, 1);
                hotdogs.splice(hotdog, 1)
            }
            
        }

    }
    

}

function gameLoop() {
    setTimeout(gameLoop, 40)
    moveHotDogs();
    createHotDogs();
    moveHipsters();
    createHipsters();
    collisionDetection();
    
}
gameLoop();

//if cartman is at the border do not allow to move left of 1440 px 