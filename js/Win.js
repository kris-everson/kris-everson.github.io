class Win extends Phaser.State {

  preload() {

  }

  create() {
    game.add.text(game.width/4, game.height/2, "The creation is complete!", {font: "15px Arial", fill: "#ffffff", align: "center"});
    var button = game.add.button(340, 320, 'button', actionOnClick, this);

    // button.onInputOver.add(over, this);
    // button.onInputOut.add(out, this);
    function actionOnClick(){
      game.state.start('Title');
    }

  }

  update() {

  }


}
