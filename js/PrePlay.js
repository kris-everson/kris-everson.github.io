
class PrePlay extends Phaser.State {

      preload() {
        // this.load.image('shelf', 'assets/shelf.png');

      }

      create() {

        this.add.image(0, 0, 'lab');
        // create "items" group to tween simultaneously
        var itemsGroup = game.add.group();
            var heartPre = itemsGroup.create(15, 50, 'heart');
            var screwdriver = itemsGroup.create(65, 67, 'screwdriver');
            var stomachPre = itemsGroup.create(158, 65, 'stomach');
            var tonguePre = itemsGroup.create(240, 180, 'tongue');
            var teethPre = itemsGroup.create(279, 79, 'teeth');
            var skullPre = itemsGroup.create(323, 50, 'skull');
            var paintPre = itemsGroup.create(10, 156, 'paint');
            var pelvisPre = itemsGroup.create(76, 129, 'pelvis');
            var brainJarPre = itemsGroup.create(165, 140, 'brainjar');
            var brainPre = itemsGroup.create(168, 140, 'brain');
            var kidneyPre = itemsGroup.create(291, 150, 'kidney');
            var vertebraePre = itemsGroup.create(0, 216, 'vertebrae');
            var hammerPre = itemsGroup.create(45, 288, 'hammer');
            var intestinePre = itemsGroup.create(126, 260, 'intestine');
            var ribsPre = itemsGroup.create(188, 246, 'ribs');
            var earsPre = itemsGroup.create(278, 296, 'ears');
            var femurPre = itemsGroup.create(324, 233, 'femur');
            var esophagusPre = itemsGroup.create(10, 388, 'esophagus');
            var lungsPre = itemsGroup.create(117, 346, 'lungs');
            var eyesPre = itemsGroup.create(199, 386, 'eyes');
            var nosejarPre =itemsGroup.create(264, 349, 'nosejar');
            var nosePre = itemsGroup.create(278, 369, 'nose');


        // other lab things
        var labShelf = this.add.image(-500, 10, 'shelf');
        var monsterIn = this.add.image(936, 57, 'monster');

        // controls

        var muteBtn = game.add.button(565, 5, 'mute', muteOnClick, this);
        var helpBtn = game.add.button(604, 5, 'help', helpPopup, this);
        muteBtn.inputEnabled = true;
        helpBtn.inputEnabled = true;
        // this.muteBtn.events.onInputUp.add(function) = ;

        // var skullY = game.add.sprite(300, 50, 'skull');
        // var lungz = game.add.sprite(230, 50, 'lungs');

        // tweens
        var shelfTween = game.add.tween(labShelf);
        var monsterTween = game.add.tween(monsterIn);
        var itemsTween = game.add.tween(itemsGroup);


        itemsGroup.alpha = 0;

        shelfTween.start(shelfTween.to({x:0, y:10}, 1600, Phaser.Easing.Elastic.InOut, true, 0));
        monsterTween.start(monsterTween.to({x:536, y:57}, 1500, Phaser.Easing.Elastic.InOut, true, 0));
        monsterTween.onComplete.add(drInstruction, this);

    // item counter
        // this.add.text(566, 300, itemsNeeded);
        // var itText = this.add.text(536, 330, 'items needed', {font: '10pt Arial', boundsAlignH: 'left', boundsAlignV: 'top', wordWrap: true, wordWrapWidth: 350});
        itemsTween.start(itemsTween.to({ alpha: 1 }, 1500, "Linear", true));


        function helpPopup(){}


      }

      update() {

      }
}


    function drInstruction() {

      var introMSG = game.add.group();
      // var msgTween = game.add.tween(introMSG);
      // introMSG.start(introMSG.to({alpha:1}));

      msgBG = introMSG.create(game.width/6, game.height/6, 'speechBubble');
      // welcome = game.add.text(140, 90, "Welcome to my lab! You'll be helping me assemble my newest creation. Hand me the items when I ask for them.", textStyle, introMSG);
      welcome = game.add.bitmapText(game.width/2,game.height/2-95, 'avenir', "Welcome to my lab! You'll be helping me assemble my newest creation. Hand me the items when I ask for them.", 15);
      welcome.anchor.setTo(0.5, 0.5);
      welcome.maxWidth = 350;
      startedBtn = game.add.button(220, 160, 'letsGetStarted', getStarted, introMSG);
      // var drLegbone = game.add.image(game.width-230, game.height-275, 'drClue');

      // fade in dr
          var drIn = game.add.image(game.width-230, game.height-275, 'drClue');
          // drIn.scale.setTo(0.5, 0.5);
          drIn.alpha = 0;
          var drTween = game.add.tween(drIn);
          drTween.start(drTween.to({alpha:1}, 500, Phaser.Easing.Linear.In, true, 0));


      function getStarted() {
        // game.add.tween(introMSG.position).to( {x: game.width, y: game.height}, 900, Phaser.Easing.Linear.None, true, 0);
        game.world.remove(startedBtn);
        var tween = game.add.tween(introMSG.scale).to( {x:650, y:450}, 900, Phaser.Easing.Linear.In, true, 0);
        game.state.start('Play');


        // add an event listener here, once the tween has finished, run the Play stage
        // tween.onComplete.add(playStart, this);
        // game.state.start('Play');

      }

      // function playStart() {
      //   game.state.start('Play');
      // }


    }
