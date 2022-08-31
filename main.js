const canvas = document.getElementsByTagName("canvas")[0];
const selection = document.getElementById("animations");
const ctx = canvas.getContext("2d");


canvas.width = 600;
canvas.height = 600;
const spriteSheetWidth = 6876;
const spriteSheetHeight = 5230;
const rows = 12;
const columns = 10;
const spriteWidth = 2 + spriteSheetWidth / rows;
const spriteHeight = spriteSheetHeight / columns;
const staggerFrames = 5;

const spriteAnimation = [];
const animationStates = [
  {
    name: "idle",
    frames: "7",
  },
  {
    name: "jump",
    frames: "7",
  },
  {
    name: "fall",
    frames: "7",
  },
  {
    name: "run",
    frames: "9",
  },
  {
    name: "dizzy",
    frames: "10",
  },{
    name: "sit",
    frames: "5",
  },
  {
    name: "roll",
    frames: "7",
  },
  {
    name: "bite",
    frames: "7",
  },
  {
    name: "ko",
    frames: "11",
  },
  {
    name: "get hit",
    frames: "4",
  },
];

let animationState = selection.value;


selection.addEventListener('change', event=> {
  animationState = event.target.value;
})

animationStates.forEach((state, i) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = spriteWidth * j;
    let positionY = spriteHeight * i;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimation[state.name] = frames;
});

console.log(spriteAnimation);
let gameFrame = 0;
let frameX = 0;
let frameY = 0;

const playeImage = new Image();
playeImage.src = "./images/shadow_dog.png";

const animate = (_) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // ctx.fillRect(100, 50, 100, 100);

  let position =
    Math.floor(gameFrame / staggerFrames) % spriteAnimation[`${animationState}`].loc.length;

  frameX = spriteAnimation[`${animationState}`].loc[position].x;
  frameY = spriteAnimation[`${animationState}`].loc[position].y;
  ctx.drawImage(
    playeImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    ctx.canvas.width,
    ctx.canvas.height
  );
  gameFrame++;
  requestAnimationFrame(animate);
};

animate();
