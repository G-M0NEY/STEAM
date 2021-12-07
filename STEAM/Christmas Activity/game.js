
 
kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  // clearColor: [0, 0, 0, 1],
});

loadSprite("santa", "./media/santa1.png");
loadSprite("ground", "./media/ground1.png");
loadSprite("coin", "./media/mistletoe.png");
loadSprite("prize", "./media/present.png");
loadSprite("spike", "./media/spike1.png");

screen("game", ({ level, score }) => {
  layers(["bg", "obj", "ui"], "obj");

  const LEVELS = [
    [
      '=================================================',
      '                                                 ',
      '                                                 ',
      '                                                 ',
      '                                                 ',
      '                                                 ',
      '                                                 ',
      '                                                 ',
      '=================================================',
    ],
  ];

  const levelCfg = {
    width: 20,
    height: 20,

    "=": () => [sprite("ground"), area(), solid()],
  };

  const level = addLevel(LEVELS[ levelId ?? 0], levelCfg);

});

start("game");
