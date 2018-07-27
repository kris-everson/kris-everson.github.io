var button;


class Title extends Phaser.State {

  preload() {
        game.load.atlas('button', 'assets/buttons/button_texture_atlas.png', 'assets/buttons/button_texture_atlas.json');

  }

  create() {
    var text = introText;

    this.add.image(0,0, 'loadScreen');
    // this.add.text(340, 200, 'Help Doctor Legbone find the parts he needs to assemble his creation.');
    var sprite = game.add.sprite(0, 600, 'legbone');
    var button = game.add.button(340, 320, 'button', actionOnClick, this, 'over', 'out');

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);

    var logo = game.add.image(50, -1000, 'logo');
    var introText = game.add.text(20, -1000, 'Help Dr. Legbone find the parts needed to assemble his creation!');

    // introText.align = 'center';
    // introText.font = 'Courier';
    // introText.fontSize = 16;
    // introText.wordWrapWidth = 10;

    function over(){};
    function out(){};

    let drTween = game.add.tween(sprite);
    // let buttonTween = game.add.tween(button);
    let logoTween = game.add.tween(logo);
    // let textTween = game.add.tween(introText);

    drTween.start(drTween.to({y:140}, 900, Phaser.Easing.Elastic.InOut, true, 0));
    // buttonTween.start(buttonTween.to({x:340, y:320}, 900, Phaser.Easing.Elastic.InOut, true, 0));
    logoTween.start(logoTween.to({y:10}, 1000, Phaser.Easing.Elastic.InOut, true, 0));
    // textTween.start(textTween.to({x:300, y: 280}, 900, Phaser.Easing.Elastic.InOut, true, 0));

  }



  update() {

  }


}

function actionOnClick(){
  game.state.start('PrePlay');
}
