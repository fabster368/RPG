import {Player,Enemy,Item} from  "./classes.js";


const maverick = new Player("Maverick","🧙", 30, 15,5,[]);
const zombie = new Enemy("Zombie","🧟",10,10,5);
const wand = new Item("Magic Wand","🪄",0,3,1);
let gameOn = true;

class Grid {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.grid = this.createEmptyGrid();
    this.placePlayer();
    this.placePrincess();
  }

  createEmptyGrid() {
    return Array.from({ length: this.rows }, () => Array(this.columns).fill('🌳'));
  }

  placePlayer(y = this.rows -1 ,x = 0) {
    this.grid[y][x] = '🧙';
    
    // Bottom left corner
  }

  removePlayer(){
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (this.grid[i][j] === "🧙") {
          this.grid[i][j] = '👣'
          playerX.pop();
          playerY.pop();
        }
       
      }
    }
  }


  placePrincess() {
    this.grid[0][this.columns - 1] = '👸'; // Top right corner
  }

  displayGrid() {
    for (let row = 0; row < this.rows; row++) {
      console.log(this.grid[row].join(' '));
    }
  }
}

const map = new Grid(6,6);

const rows = map.grid.length;
const columns = map.grid.length;
let playerX = [];
let playerY = [];

const playerCoordinates = () => {
for (let i = 0; i < rows; i++) {

  for (let j = 0; j < columns; j++) {
    if (map.grid[i][j] === "🧙") {
      playerX.unshift(j);
      playerY.unshift(i);
    }
   
  }
}
}

playerCoordinates(); //initialise coordinates !!!IMPORTANT

console.log("-----------------")
map.displayGrid(); // Visualize initial map

// Move Player token on the grid + call an encounter 
// + updates coordinates.

const movePlayer = (y,x) => {
  if (y < 0 || x < 0){
    console.log("-----------------")
    console.log("Sorry, you can't go there!");
    console.log("-----------------")
  } else if (y >= rows || x >= columns){
    console.log("-----------------")
    console.log("Sorry, you can't go there!");
    console.log("-----------------")
  } else {
  map.removePlayer();  // removes previous player position from grid and replaces it "T"
  if (map.grid[y][x] === "👸"){
    console.log("You saved the princess!")
  return gameOn = false // Game ends here.
 } if (map.grid[y][x] === "🌳"){
  encounter();
 }
  // needs an encounter generator + stats update right here. 
  map.placePlayer(y,x)  // places the player on the grid with Y and X coodinates.
  playerCoordinates();
}

}

// Use user input to move the player
const userInput = (input) =>  {
  switch(input) {
    case "up":
    
        movePlayer(playerY[0]-1, playerX[0]);
        break;
        
    case "down":
       movePlayer(playerY[0]+1, playerX[0]);
        break;
      
    case "right":
        movePlayer(playerY[0], playerX[0]+1);
         break;
      
    case "left":
        movePlayer(playerY[0], playerX[0]-1);
         break;
       
  }
}

// Random Encounter Function
const encounter = () => {
  const chance = Math.random()
  if (chance <= 0.4) {
    console.log("-----------------")
    console.log("It's all quiet here... \nDon't worry my princess, I'm coming for you!") //console.log (all quiet here) 
    console.log("-----------------")
  } 
  else if (chance > 0.4 && chance < 0.9) {
    console.log("-----------------")
    console.log(`Oh no! A Zombie ${zombie.sprite} bites you!\nYou lose ${zombie.att-maverick.def} hp!`)
    maverick.damage(zombie);
    zombie.damage(maverick);
    console.log("-----------------")
    console.log(`Your stats are:\nhp ${maverick.hp} \natt ${maverick.att} \ndef ${maverick.def}`)
    console.log("-----------------")
    if(maverick.hp <= 0) {
      console.log("-----------------")
      console.log("You perished in the dark forest! GAME OVER"); // while loop to close game???
      console.log("-----------------")
      return gameOn = false;    
    }  }
 else if (chance >= 0.9) {
  console.log("-----------------")
  console.log("You found a magic wand!\nIt's increases your power!")
  maverick.equip(wand)
  console.log("-----------------")
  console.log(`Your stats are: \n hp ${maverick.hp} \n att ${maverick.att} \n def ${maverick.def}`)
  console.log("-----------------")
  /// item
}
}



export {userInput, gameOn, maverick, map};


