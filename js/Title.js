var button;
var drLaugh;
var bubbling;

class Title extends Phaser.State {

  preload() {
        game.load.atlas('button', 'assets/buttons/button_texture_atlas.png', 'assets/buttons/button_texture_atlas.json');
        game.load.atlas('mute', 'assets/buttons/mute.json', 'assets/buttons/mute.json');
        game.load.audio('laugh', ['assets/audio/dr-laugh.mp3', 'assets/audio/dr-laugh.ogg']);
        game.load.audio('bubbling', ['assets/audio/lab-noises.mp3']);

  }


  create() {

    bubbling = game.add.audio('bubbling');
    bubbling.loopFull(0.6);



    drLaugh = game.add.audio('laugh');
    drLaugh.play();
    bubbling.play();
    var text = introText;

    this.add.image(0,0, 'loadScreen');
    // this.add.text(340, 200, 'Help Doctor Legbone find the parts he needs to assemble his creation.');
    var sprite = game.add.sprite(0, 600, 'legbone');
    var button = game.add.button(340, 320, 'button', actionOnClick, this, 'over', 'out');

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);

    var logo = game.add.image(50, -1000, 'logo');
    var introText = game.add.text(20, -1000, 'Help Dr. Legbone find the parts needed to assemble his creation!');

    function over(){};
    function out(){};

    let drTween = game.add.tween(sprite);
    // let buttonTween = game.add.tween(button);
    let logoTween = game.add.tween(logo);
    // let textTween = game.add.tween(introText);

    drTween.start(drTween.to({y:140}, 900, Phaser.Easing.Elastic.InOut, true, 0));
    // buttonTween.start(buttonTween.to({x:340, y:320}, 900, Phaser.Easing.Elastic.InOut, true, 0));
    logoTween.start(logoTween.to({y:10}, 1100, Phaser.Easing.Bounce.InOut, true, 0));
    // textTween.start(textTween.to({x:300, y: 280}, 900, Phaser.Easing.Elastic.InOut, true, 0));


    var muteButton = game.add.button(565, 5, 'muteButton', muteOnClick, this, 0, 0, 1);
    var helpBtn = game.add.button(604, 5, 'help', helpPopup, this);
    muteButton.inputEnabled = true;
    helpBtn.inputEnabled = true;



  }



  update() {

  }


}

function actionOnClick(){
  game.state.start('PrePlay');
}
