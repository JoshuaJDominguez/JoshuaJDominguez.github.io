$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
    */
   
   // Loop to create vertical grid lines
   // for (let i = 100; i < canvas.width; i += 100) {
     //   createPlatform(i, 0, 1, canvas.height);
     // }
     
     // Loop to create horizontal gride lines
     // for (let i = 100; i < canvas.height; i += 100) {
       //   createPlatform(0, i, canvas.width, 1);
       // }
       
       /////////////////////////////////////////////////
       //////////ONLY CHANGE BELOW THIS POINT///////////
       /////////////////////////////////////////////////
       
       // TODO 1
       // Create platforms
       // You must decide the x position, y position, width, and height of the platforms
       // example usage: createPlatform(x,y,width,height)
       createPlatform(0, 540, 90, 5);

       createPlatform(200, 480, 80, 5);
       
       createPlatform(380, 420, 80, 5);

       createPlatform(680, 400, 5, 200);

       createPlatform(680, 600, 80, 5);

       createPlatform(680, 195, 5, 100 );

       createPlatform(670, 400, 30, 5);

       createPlatform(890, 600, 150, 5);

       createPlatform(960, 400, 5, 200);

       createPlatform(1200, 680, 60, 5);

       createPlatform(680, 600, 5, 200);

       createPlatform(1100, 480, 60, 5);

       createPlatform(1100, 300, 500, 5);

       createPlatform(500, 190, 800, 5);
       
       // TODO 2
       // Create collectables
       // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
       // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
       // example usage: createCollectable(type, x, y, gravity, bounce)
       
       createCollectable('database', 665, 350, 0, 10)
       createCollectable('database', 1300, 500, 0, 10)
       createCollectable('database', 1360, 20, 0, 10)
  
       
       

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("bottom", 50, 5000)
    createCannon("bottom", 100, 5000 )
    createCannon("bottom", 200 , 5000 )
    createCannon("bottom", 400 , 5000 )
    createCannon("left", 270 , 5000 )
    createCannon("bottom", 600 , 5000)
    createCannon("bottom", 700 , 5000)
    createCannon("bottom",  800, 5000)
    createCannon("bottom",  900, 5000)
    createCannon("bottom",  1000, 5000)
    createCannon("bottom",  1100, 5000)
    createCannon("bottom", 1200 , 5000)
   
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
