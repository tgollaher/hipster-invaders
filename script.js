/* eslint-disable */
let cartman = {
    top: 650,
    left: 625,

};

let hotdogs = [];

let hipsters = [

    {left: 300, top: 110},
    {left: 400, top: 110},
    {left: 500, top: 110},
    {left: 600, top: 110},
    {left: 700, top: 110},
    {left: 800, top: 110},
    {left: 400, top: 200},
    {left: 500, top: 200},
    {left: 600, top: 200},
    {left: 700, top: 200},
    {left: 550, top: 300},


];



function isCartmanInDiv() { 
    if(cartman.left < 10 || cartman.left > 1335) {
        alert("Don't runaway from South Park!")
        location.reload();
        return false 
    }
    return true

}

function areHipstersInDiv() { 
    for(let hipster = 0; hipster < hipsters.length; hipster++) {
        if(hipsters[hipster].top > 600){
            alert("You lose! The hipsters have invaded!")
            location.reload();
            
        }

    }
    

    }

document.onkeydown = function(e) {
    // e.preventDefault();
    if (e.keyCode === 37){
        if (isCartmanInDiv(cartman.left - 1)) {
        cartman.left -= 10;
            moveCartman();
            
        }
        
    }

    else if (e.keyCode === 39) {
        if (isCartmanInDiv(cartman.left + 1)) {
            cartman.left +=  10;
            moveCartman(); 
            
        }
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
    document.querySelector('.cartman').style.left = cartman.left + "px"
}

function createHotDogs() {
    document.querySelector('.hotdogs').innerHTML = "";
    for(let hotdog = 0; hotdog < hotdogs.length; hotdog++) {
    document.querySelector('.hotdogs').innerHTML += `<div class='hotdog' style='left:${hotdogs[hotdog].left}px;
    top:${hotdogs[hotdog].top}px;'></div>`;
    }
}
function moveHotDogs() { 
    for(let hotdog = 0; hotdog < hotdogs.length; hotdog++) {
        hotdogs[hotdog].top -= 5;

    }

}

function createHipsters() {
     document.querySelector('.hipsters').innerHTML = "";
    for(let hipster = 0; hipster < hipsters.length; hipster++) {
    document.querySelector('.hipsters').innerHTML += `<div class='hipster' style='left:${hipsters[hipster].left}px;
    top:${hipsters[hipster].top}px;'></div>`;
    }


}

function moveHipsters() { 
    for(let hipster = 0; hipster < hipsters.length; hipster++) {
        hipsters[hipster].top += 1;

    }

}



function hipsterCollisionDetection() {

    for(let hipster = 0; hipster < hipsters.length; hipster++) {
        for(let hotdog = 0; hotdog < hotdogs.length; hotdog++) {
            if(
                (hotdogs[hotdog].top <= hipsters[hipster].top + 90) &&
                (hotdogs[hotdog].top >= hipsters[hipster].top) &&
                (hotdogs[hotdog].left >= hipsters[hipster].left) &&
                (hotdogs[hotdog].left <= hipsters[hipster].left + 90) === true
            ){
                hipsters.splice(hipster, 1);
                hotdogs.splice(hotdog, 1);
                
                
                setTimeout(function(){ url(); }, 3000);
                if(hipsters.length === 0){
                    return setTimeout(function(){ alert('You win and have saved South Park from invasion!'); }, 1000);

                }
                
                
                
                
                
            }
            
        }

    }
    

}











// function blowUpHipsters() {
//     //if(hipsterCollisionDetection === true){
//         return 
//     }
// }




function gameLoop() {
    setTimeout(gameLoop, 70)
    moveHotDogs();
    createHotDogs();
    moveHipsters();
    createHipsters();
    hipsterCollisionDetection();
    areHipstersInDiv() 
}
gameLoop();



//alert if you destory all hipsters you win! setinterval



//make characters explode
//make if characters hit cartman alert you lose!
//bonus score

//write readme