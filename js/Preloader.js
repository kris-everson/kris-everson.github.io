class Preloader extends Phaser.State {

  preload() {
    var loadingLable = game.add.text(game.width/2, game.height/2, 'Loading...', {font: '16px Arial', fill: 'white'});
    this.load.image('loadScreen', 'assets/startScreen/start.jpg');
    this.load.image('logo', 'assets/startScreen/logo.png');
    this.load.image('button', 'assets/startScreen/startButton.png');
    this.load.image('addToCreature', 'assets/buttons/addToCreature.png');
    this.load.image('continueButton', 'assets/buttons/continue-button.png');
    this.load.image('legbone', 'assets/startScreen/theDoctor.png');
    this.load.image('pelvis', 'assets/sprites/pelvis.png');
    this.load.image('heart', 'assets/sprites/heart.png');
    this.load.image('kidney', 'assets/sprites/kidneys.png');
    this.load.image('brain', 'assets/sprites/brain.png');
    this.load.image('lab', 'assets/lab.png');
    this.load.image('shelf', 'assets/shelf.png');
    this.load.image('monster', 'assets/monster.png');
    this.load.image('lungs', 'assets/sprites/lungs.png');
    this.load.image('skull', 'assets/sprites/skull.png');
    this.load.image('dr', 'assets/sprites/doctorHint.png');
    this.load.image('drClue', 'assets/sprites/dr-clue.png');
    this.load.image('letsGetStarted', 'assets/lets-get-started.png');
    this.load.image('speechBubble', 'assets/speech-bubble.png');

  }

  create() {

    game.state.start('Title');

  }

  update() {

  }

}








// class Boot extends Phaser.State {
//
//   preload() {
//     this.load.image('loadScreen', 'assets/startScreen/start.jpg');
//     this.load.image('logo', 'assets/startScreen/logo.png');
//     this.load.image('button', 'assets/startScreen/startButton.png');
//
//   }
//
//
//   create() {
//     this.add.image(0,0, 'loadScreen');
//     button = game.add.button(340, 340, 'button', actionOnClick);
//
//
//   }
//
//
//
//
//
//   update() {
//
//   }
//
//
// }
//
// var button;
//
// function actionOnClick () {
//   // load the game!
//   game.state.start(Play);
// }
