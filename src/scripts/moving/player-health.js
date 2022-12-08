import { DIM_X, DIM_Y } from "../game-parameters/map-params";
import { MAP_BORDER } from "../game-parameters/map-params";
import { HEALTH_BAR } from "../game-parameters/health-params";


export default class PlayerHealth {
  constructor(health, color, playerIndex) {
    this.health = health;
    this.maxHealth = health;
    this.color = color;
    this.playerIndex = playerIndex;

    let incrX = playerIndex * (HEALTH_BAR.WIDTH + HEALTH_BAR.PADDING/2);
    this.x = Math.floor(DIM_X - HEALTH_BAR.WIDTH - HEALTH_BAR.PADDING - incrX - 50);
    this.y = Math.floor(DIM_Y * 1 / 160);
  }

  damage(points) {
    this.health = Math.max(0, this.health - points);
  }

  restore(points) {
    this.health = Math.min(this.maxHealth, this.health + points);
  }

  draw (ctx) {
    // Draw Red Bar
    ctx.fillStyle = 'red';
    ctx.shadowBlur = 0;
    ctx.fillRect(this.x, this.y, HEALTH_BAR.WIDTH, HEALTH_BAR.HEIGHT, 5);

    // Draw Player Color Bar
    let healthWidth = Math.floor((this.health / this.maxHealth) * HEALTH_BAR.WIDTH);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, healthWidth, HEALTH_BAR.HEIGHT, 5);

    // Draw 'Player #{playerIndex} Health'
    ctx.font = "bold 18px arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#181818";
    ctx.fillText(`Health P${this.playerIndex}`, this.x + (HEALTH_BAR.WIDTH / 2), this.y + (HEALTH_BAR.HEIGHT / 2));
  }


}
