var game = new Phaser.Game(650, 450, Phaser.AUTO, 'game-container', window.devicePixelRatio);

  game.state.add('Boot', bootState);
  game.state.add('Preloader', Preloader);
  game.state.add('Title', Title);
  game.state.add('PrePlay', PrePlay);
  game.state.add('Play', Play);
  game.state.add('Win', Win);
  game.state.start('Boot');

var textStyle = { font: '11pt Tahoma', boundsAlignH: 'center', boundsAlignV: 'middle', wordWrap: true, wordWrapWidth: 350 };
var muteButton;
var helpScreen;
var itemsNeeded = 6;

function muteOnClick(){
  if (!game.sound.mute) {
  game.sound.mute = true;

} else {
  game.sound.mute = false;

}
}

function helpPopup(){

  console.log('helpPopup is firing away');
  helpScreen = game.add.image(game.world.centerX, game.world.centerY, 'help-screen');
  helpScreen.anchor.setTo(0.5, 0.5);
  var cont = game.add.sprite(game.world.centerX-400, game.world.centerY-100, 'continueButton');
  cont.anchor.setTo(0.5, 0.5);
  cont.inputEnabled = true;
  // cont.input.priorityID = 1;
  cont.input.useHandCursor =true;
  cont.events.onInputDown.add(closeWindow, this);
  helpScreen.addChild(cont);

  // helpScreen.scale.set(0.1);
}

function closeWindow(){
  helpScreen.scale.set(0);
}



// function openWindow(){
//   helpScreen.scale.set(1);
// }
