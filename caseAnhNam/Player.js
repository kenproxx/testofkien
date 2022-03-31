let speedX = 10
let speedY = 10
let element = document.getElementById('')
class Car {
    constructor(image, x, y, width, height, src) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
        this.dir = "";
    }

    drawImage(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    moveRight() {
        this.x += 5;
    }

    moveLeft() {
        // car1.style.left = parseInt(img.style.left) + 10 + 'px'

        this.x -= 5;
    }

    moveUp() {
        this.y -= 5;
    }

    moveDown() {
        this.y += 10;
    }

    setSrc(src) {
        this.src = src;
    }

    getSrc() {
        return this.src;
    }

    control() {
        switch (this.dir) {
            case "left":
                if (this.x > 100)
                    // car1.style.left = parseInt(img.style.left) + 10 + 'px'

                    this.moveLeft();
                break;
            case "right":
                if (this.x < 440)
                    this.moveRight();
                break;
            case "up":
                if (this.y > 0)
                    this.moveUp();
                break;
            case "down":
                if (this.y < 870)
                    this.moveDown();
                break;

            default:

        }
    }
}
class Background {
    constructor(image,x,y,width,height,src) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
    }
    drawImage(ctx){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    moveDownB(){
        this.y += 5;
    }
}



function upArrowPressed() {
    let element = document.getElementById("a");
    if (parseInt(img.style.top) > 20) {
        element.style.top = parseInt(element.style.top) - 20 + 'px';
    }
}

function downArrowPressed() {
    let element = document.getElementById("a");
    if (parseInt(img.style.top) < 1550) {
        element.style.top = parseInt(element.style.top) + 20 + 'px';
    }
}
function  leftArrowPressed() {
    let element = document.getElementById("a");
    if (parseInt(img.style.left) > 20) {
        element.style.left = parseInt(element.style.left) - 20 + 'px';
    }
}
function  rightArrowPressed () {
    let element = document.getElementById("a");
    if (parseInt(img.style.left) < 1080) {
        element.style.left = parseInt(element.style.left) + 20 + 'px';
    }
}



function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37 :
            leftArrowPressed()
            break;
        case 39 :
            rightArrowPressed()
            break;
        case 38 :
            upArrowPressed()
            break;
        case 40 :
            downArrowPressed()
            break;
    }
}
window.addEventListener('keydown',moveSelection);

function di() {
    car1.style.left = parseInt(img.style.left) + speedX + 'px'
    car1.style.top = parseInt(img.style.top) + speedY + 'px'}
di()