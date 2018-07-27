var game = new Phaser.Game(650, 450, Phaser.AUTO, 'game-container', window.devicePixelRatio);

  game.state.add('Boot', bootState);
  game.state.add('Preloader', Preloader);
  game.state.add('Title', Title);
  game.state.add('PrePlay', PrePlay);
  game.state.add('Play', Play);
  game.state.add('Win', Win);
  game.state.start('Boot');

var textStyle = { font: '10pt Arial', boundsAlignH: 'center', boundsAlignV: 'top', wordWrap: true, wordWrapWidth: 350 };
