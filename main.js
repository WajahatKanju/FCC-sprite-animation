const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;
const spriteSheetWidth = 6876;
const spriteSheetHeight = 5230;
const rows = 12;
const columns = 10;
const spriteWidth = spriteSheetWidth / rows;
const spriteHeight = spriteSheetHeight / columns;

const playeImage = new Image();
playeImage.src = "./images/shadow_dog.png";

const animate = (_) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // ctx.fillRect(100, 50, 100, 100);
  ctx.drawImage(
    playeImage,
    spriteWidth * 0,
    spriteHeight * 0,
    spriteWidth,
    spriteHeight,
    0,
    0,
    ctx.canvas.width,
    ctx.canvas.height
  );
  requestAnimationFrame(animate);
};

animate();
