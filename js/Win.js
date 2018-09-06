class Win extends Phaser.State {

  preload() {

  }

  create() {
    this.add.image(0, 0, 'lab');
    var thunderclap = game.add.sound('thunder');
    thunderclap.play();
    game.camera.flash(0xffffff, 2000);


    var text = game.add.bitmapText(game.width/4, game.height/2, 'avenir', "Great job! You've been a wonderful assistant. Stop by any time.", 15);
    text.maxWidth = 350;
    var button = game.add.button(340, 320, 'mainMenu', startOver, this);

    // button.onInputOver.add(over, this);
    // button.onInputOut.add(out, this);
    function startOver(){
      game.state.start('Title');
    }

  }

  update() {

  }


}
