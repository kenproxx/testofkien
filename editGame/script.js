/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveLeft = function(){
    this.left -= 10;
    };

  this.moveRight = function(){
    this.left += 10;
    };

  this.moveTop = function(){
    this.top += 10;
  };

  this.moveBot = function(){
    this.top -= 10;
  };
}

let hero = new Hero('pikachu.png', 10, 10, 50);

function start(){

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode == 37){
    hero.getHeroElement().style.left = parseInt(hero.getHeroElement().style.left) + 10 + 'px';
  }
  if (evt.keyCode == 38){
    hero.getHeroElement().style.bottom = hero.moveBot();

  }
  if (evt.keyCode == 39){
    hero.getHeroElement().style.right = hero.moveRight();

  }
  if (evt.keyCode == 40){
    hero.getHeroElement().style.top = hero.moveTop();

  }
})
}
requestAnimationFrame(start)
start()