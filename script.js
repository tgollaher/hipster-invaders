
const cartman = {
  top: 650,
  left: 625,

};

const hotdogs = [];

const hipsters = [

  { left: 300, top: 110 },
  { left: 400, top: 110 },
  { left: 500, top: 110 },
  { left: 600, top: 110 },
  { left: 700, top: 110 },
  { left: 800, top: 110 },
  { left: 400, top: 200 },
  { left: 500, top: 200 },
  { left: 600, top: 200 },
  { left: 700, top: 200 },
  { left: 550, top: 300 },


];




function isCartmanInDiv() {
  if (cartman.left < 10 || cartman.left > 1335) {
    alert("Don't runaway from South Park!");
    location.reload();
    return false;
  }
  return true;
}

function areHipstersInDiv() {
  for (let hipster = 0; hipster < hipsters.length; hipster++) {
    if (hipsters[hipster].top > 600) {
      confirm('You lose! The hipsters have invaded!')? window.location.href = "index.html": false
      
      
    
  }
 }
}

document.onkeydown = function (e) {
  e.preventDefault();
  if (e.keyCode === 37) {
    if (isCartmanInDiv(cartman.left - 1)) {
      cartman.left -= 10;
      moveCartman();
    }
  } else if (e.keyCode === 39) {
    if (isCartmanInDiv(cartman.left + 1)) {
      cartman.left += 10;
      moveCartman();
    }
  } else if (e.keyCode === 32) {
    hotdogs.push({
      left: cartman.left + 15,
      top: cartman.top,
    });
    createHotDogs();
  }
};


function moveCartman() {
  document.querySelector('.cartman').style.left = `${cartman.left}px`;
}

function createHotDogs() {
  document.querySelector('.hotdogs').innerHTML = '';
  for (let hotdog = 0; hotdog < hotdogs.length; hotdog++) {
    document.querySelector('.hotdogs').innerHTML += `<div class='hotdog' style='left:${hotdogs[hotdog].left}px;
    top:${hotdogs[hotdog].top}px;'></div>`;
  }
}

function moveHotDogs() {
  for (let hotdog = 0; hotdog < hotdogs.length; hotdog++) {
    hotdogs[hotdog].top -= 5;
  }
}

function createHipsters() {
  document.querySelector('.hipsters').innerHTML = '';
  for (let i = 0; i < hipsters.length; i++) {
    document.querySelector('.hipsters').innerHTML += `<div class='hipster' style='left:${hipsters[i].left}px;
        top:${hipsters[i].top}px;'></div>`;
  }
}

function moveHipsters() {
  for (let hipster = 0; hipster < hipsters.length; hipster++) {
    hipsters[hipster].top += 1;
  }
}

function hipsterCollisionDetection() {
  for (let i = 0; i < hipsters.length; i++) {
    for (let j = 0; j < hotdogs.length; j++) {
      if (
        (hotdogs[j].top <= hipsters[i].top + 90)
                && (hotdogs[j].top >= hipsters[i].top)
                && (hotdogs[j].left >= hipsters[i].left)
                && (hotdogs[j].left <= hipsters[i].left + 90)
      ) {
        hipsters.splice(i, 1);
        hotdogs.splice(j, 1);

        if (hipsters.length === 0) {
          return setTimeout(() => { alert('You win and have saved South Park from invasion!'); }, 1000);
        }
      }
    }
  }
}

function gameLoop() {
  setTimeout(gameLoop, 70);
  moveHotDogs();
  createHotDogs();
  moveHipsters();
  createHipsters();
  hipsterCollisionDetection();
  areHipstersInDiv();
}
 gameLoop();
 
