canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

mars_images= ["mars1.jpeg", "mars2.jpeg", "mars3.jpeg", "mars4.jpeg"];
random_number= Math.floor(Math.random()*4);
console.log(random_number);

rover_width= 100;
rover_height= 90;
rover_y= 10;
rover_x= 10;

background_image= mars_images[random_number] ;
console.log("Background Image = " + background_image);
rover_image= "rover.png";

function add()
{
    background_img_tag= new Image();
    background_img_tag.onload= uploadBackground;
    background_img_tag.src= background_image;
    rover_img_tag= new Image();
    rover_img_tag.onload= uploadRover;
    rover_img_tag.src= rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height)
}

function uploadRover() {
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38' ) 
    {
        up();
        console.log("up");
    }

    if (keyPressed == '40' ) 
    {
        down();
        console.log("down");
    }

    if (keyPressed == '39' ) 
    {
        right();
        console.log("right");
    }

    if (keyPressed == '37' ) 
    {
        left();
        console.log("left");
    }

}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y <= 600) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rover_x <= 800) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}