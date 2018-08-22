class Preloader extends Phaser.State {

  preload() {
    var loadingLabel = game.add.text(game.width/2, game.height/2, 'LOADING...', {font: '24px Tahoma', fill: 'white'});
    loadingLabel.anchor.setTo(0.5);
    game.load.bitmapFont('avenir','assets/fonts/avenir.png', 'assets/fonts/avenir.xml');
    game.load.audio('powersaw', ['assets/audio/powersaw.mp3']);
    game.load.audio('correct', ['assets/audio/correct.mp3']);
    this.load.image('loadScreen', 'assets/startScreen/start.jpg');
    this.load.image('logo', 'assets/startScreen/logo.png');
    this.load.image('button', 'assets/startScreen/startButton.png');
    this.load.image('addToCreature', 'assets/buttons/addToCreature.png');
    this.load.image('continueButton', 'assets/buttons/continue-button.png');
    this.load.image('legbone', 'assets/startScreen/theDoctor.png');
    this.load.image('heart', 'assets/sprites/heart.png');
    this.load.image('screwdriver', 'assets/sprites/screwdriver.png');
    this.load.image('stomach', 'assets/sprites/stomach.png');
    this.load.image('tongue', 'assets/sprites/tongue.png');
    this.load.image('teeth', 'assets/sprites/teeth.png');
    this.load.image('skull', 'assets/sprites/skull.png');
    this.load.image('paint', 'assets/sprites/paint.png');
    this.load.image('pelvis', 'assets/sprites/pelvis.png');
    this.load.image('brainjar', 'assets/sprites/brain-jar.png');
    this.load.image('brain', 'assets/sprites/brain.png');
    this.load.image('kidney', 'assets/sprites/kidneys.png');
    this.load.image('vertebrae', 'assets/sprites/vertebrae.png');
    this.load.image('hammer', 'assets/sprites/hammer.png');
    this.load.image('intestine', 'assets/sprites/intestine.png');
    this.load.image('ribs', 'assets/sprites/ribs.png');
    this.load.image('ears', 'assets/sprites/ears.png');
    this.load.image('bone', 'assets/sprites/bone.png');
    this.load.image('esophagus', 'assets/sprites/esophagus.png');
    this.load.image('lungs', 'assets/sprites/lungs.png');
    this.load.image('eyes', 'assets/sprites/eyes.png');
    this.load.image('nose', 'assets/sprites/nose.png');
    this.load.image('nosejar', 'assets/sprites/nose-jar.png');
    this.load.image('lab', 'assets/lab.png');
    this.load.image('shelf', 'assets/shelf.png');
    this.load.image('monster', 'assets/monster.png');
    this.load.image('drWaiting', 'assets/sprites/doctorHint.png');
    this.load.image('drClue', 'assets/sprites/dr-clue.png');
    this.load.image('drHover', 'assets/sprites/dr-hover.png');
    this.load.image('goodJobDr', 'assets/sprites/goodJobDr.png');
    this.load.image('swish', 'assets/sprites/swish.png');
    this.load.image('letsGetStarted', 'assets/lets-get-started.png');
    this.load.image('speechBubble', 'assets/speech-bubble.png');
    this.load.image('mute', 'assets/buttons/mute.png');
    this.load.spritesheet('muteButton', 'assets/buttons/mute.png','assets/buttons/mute.json', 37, 31, 1);
    this.load.image('help', 'assets/sprites/help-icon.png');
    this.load.image('drag-to', 'assets/sprites/drag-to-arrow.png');
    this.load.image('drag-text', 'assets/drag-text.png');
    this.load.image('help-screen', 'assets/help-screen.png');
    this.load.image('items-needed', 'assets/buttons/items_needed.png');
    game.load.spritesheet('blood', 'assets/sprites/anims/dr-anim.png', 156, 349, 40);
    game.load.audio('sawSound', ['assets/audio/powersaw.mp3']);
    game.load.audio('swishFX', ['assets/audio/swish.mp3']);
    game.load.audio('wrong', ['assets/audio/wrong.mp3']);
    game.load.audio('ding', ['assets/audio/ding.mp3']);


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
