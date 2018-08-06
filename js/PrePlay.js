
class PrePlay extends Phaser.State {

      preload() {
        // this.load.image('shelf', 'assets/shelf.png');


      }

      create() {

        var itemsNeeded = 6;
        this.add.image(0, 0, 'lab');
        // create "items" group to tween simultaneously
        var itemsGroup = game.add.group();
            var skullPre = itemsGroup.create(310, 50, 'skull');
            var lungsPre = itemsGroup.create(235, 50, 'lungs');
            var kidneyPre = itemsGroup.create(165, 50, 'kidney');
            var pelvisPre = itemsGroup.create(75, 40, 'pelvis');
            var heartPre = itemsGroup.create(20, 50, 'heart');
            var brainPre = itemsGroup.create(20, 140, 'brain');
            // var stomachPre = itemsGroup.create(20, 210, 'stomach');

        // other lab things
        var labShelf = this.add.image(-500, 10, 'shelf');
        var monsterIn = this.add.image(736, 35, 'monster');

        // var skullY = game.add.sprite(300, 50, 'skull');
        // var lungz = game.add.sprite(230, 50, 'lungs');

        // tweens
        var shelfTween = game.add.tween(labShelf);
        var monsterTween = game.add.tween(monsterIn);
        var itemsTween = game.add.tween(itemsGroup);

        itemsGroup.alpha = 0;

        shelfTween.start(shelfTween.to({x:0, y:10}, 1600, Phaser.Easing.Elastic.InOut, true, 0));
        monsterTween.start(monsterTween.to({x:536, y:30}, 1500, Phaser.Easing.Elastic.InOut, true, 0));
        monsterTween.onComplete.add(drInstruction, this);

    // item counter
        // this.add.text(566, 300, itemsNeeded);
        // var itText = this.add.text(536, 330, 'items needed', {font: '10pt Arial', boundsAlignH: 'left', boundsAlignV: 'top', wordWrap: true, wordWrapWidth: 350});
        itemsTween.start(itemsTween.to({ alpha: 1 }, 1500, "Linear", true));

      }

      update() {
        // var itemsNeeded = 6;
        // this.add.text(566, 300, itemsNeeded);
        // var itText = this.add.text(536, 330, 'items needed', textStyle);

      }
}


    function drInstruction() {

      var introMSG = game.add.group();
      // var msgTween = game.add.tween(introMSG);
      // introMSG.start(introMSG.to({alpha:1}));

      msgBG = introMSG.create(game.width/6, game.height/6, 'speechBubble');
      welcome = game.add.text(140, 90, "Welcome to my lab! You'll be helping me assemble my newest creation. Hand me the items when I ask for them.", textStyle, introMSG);
      startedBtn = game.add.button(220, 160, 'letsGetStarted', getStarted, introMSG);
      // var drLegbone = game.add.image(game.width-230, game.height-275, 'drClue');

      // fade in dr
          var drIn = game.add.image(game.width-230, game.height-275, 'drClue');
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
