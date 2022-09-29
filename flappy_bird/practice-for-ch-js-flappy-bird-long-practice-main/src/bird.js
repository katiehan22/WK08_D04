export default class Bird {
  constructor(canvas){
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.velocity = 0;
    this.posistion = { x: 160, y: 320 };
  }

  drawBird(ctx){
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.posistion.x, this.posistion.y, 40, 30);
  }

  animate() {
    this.bird.drawBird(this.ctx);
  }

  move() {
    this.posistion.y += this.velocity;
    this.velocity += 0.5;
  }

  flap() {
    this.velocity = -8;
  }

}