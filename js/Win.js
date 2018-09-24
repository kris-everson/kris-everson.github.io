class Win extends Phaser.State {

  preload() {}

  create() {
    var monsterWalks;
    this.add.image(0, 0, 'lab');
    var thunderclap = game.add.sound('thunder');
    thunderclap.play();
    game.camera.flash(0xffffff, 2500);
    var monsterGroan =  game.add.sound('monsterGroan');
    monsterGroan.play();
    // it's alive text
    var itsAliveText = this.add.image(game.width/2, 100, 'itsAlive');
    itsAliveText.anchor.setTo(0.5, 0.5);
    // doctor

    // animation
    var monsterAlive = game.add.sprite(1000, game.height/2, 'monsterAlive');
    // monsterAlive.anchor.setTo(0.5, 0.5);
    var drLegbone = this.add.image(game.width-230, game.height-275, 'completed');
    // drLegbone.anchor.setTo(0.5, 0.5);

    thunderclap.play();
    game.camera.flash(0xffffff, 1000);
    var monsterAlive = game.add.sprite(1000, game.height/2, 'monsterAlive');
    monsterWalks = game.add.tween(monsterAlive).to( {x: [650, 520, 390, 260, 130, 0, -130, -260, -390], y: [225, 175, 225, 175, 225, 174, 225, 175, 225, 175] }, 7000, "Linear", true, false);
    // monsterWalks.interpolation(Phaser.Math.bezierInterpolation);
    monsterWalks.onComplete.add(returnToMenuScreen, this);


    function returnToMenuScreen(){
      game.camera.flash(0xffffff, 1000);
      game.world.remove(itsAliveText);

      var bubble = game.add.image(game.width/2, game.height/2-40, 'speechBubble');
      bubble.anchor.setTo(0.5, 0.5);
      var text = game.add.bitmapText(game.width/2, game.height/2-80, 'avenir', "Great job! You've been a wonderful assistant. Stop by any time.", 15);
      text.maxWidth = 350;
      text.anchor.setTo(0.5, 0.5);
      var button = game.add.button(game.width/2, 200, 'menuButton', startOver, this);
      button.anchor.setTo(0.5, 0.5);
      drLegbone.bringToTop();

    }



    // button.onInputOver.add(over, this);
    // button.onInputOut.add(out, this);
    function startOver(){
      game.state.start('Title');
    }

  }

  update() {}
}


///
