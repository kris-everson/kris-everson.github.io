var lungsQuery = new Object();
lungsQuery.hint = 'He needs some help breathing.';
lungsQuery.hint2 = 'no, try again';
lungsQuery.answer = "That's right! Lungs help him breathe.";
lungsQuery.keyName = 'lungs';

var kidneyQuery =  new Object();
kidneyQuery.hint = "Can you find the kidneys?";
kidneyQuery.hint2 = 'Sorry, try again';
kidneyQuery.answer = "Good job! Did you know that your kidneys filter around 200 quarts (200 L) of blood?";
kidneyQuery.keyName = 'kidney';

var skullQuery = new Object();
skullQuery.hint = 'We need something to protect the brain.';
skullQuery.hint2 = 'no, try again';
skullQuery.answer = "Nice! Add it to the creature."
skullQuery.keyName = 'skull';

var brainQuery = new Object();
brainQuery.hint = 'We need a brain!';
brainQuery.hint2 = 'no, try again';
brainQuery.answer = 'nice! you found the brain.';
brainQuery.keyName = 'brain';

var pelvisQuery =  new Object();
pelvisQuery.hint = 'We need some skeletal support.';
pelvisQuery.hint2 = 'try again.';
pelvisQuery.answer = 'good job, you found the pelvis! ';
pelvisQuery.keyName = 'pelvis';

var heartQuery = new Object();
heartQuery.hint = 'Get the blood pumping.';
heartQuery.hint2 = 'no, try again';
heartQuery.answer = 'cool! add the heart to the creature.';
heartQuery.keyName = 'heart';

// var stomachQuery = new Object();
// stomachQuery.hint = 'We need help with digestion!';
// stomachQuery.hint2 = 'nope, try again';
// stomachQuery.keyName = 'stomach';

var questions = [lungsQuery, kidneyQuery, skullQuery, brainQuery, pelvisQuery, heartQuery];
var randomHint = questions[Math.floor(Math.random()*questions.length)];

class Play extends Phaser.State {

preload() {}

create() {
            var itemsNeeded = 6;

            // choose randomly from the array of questions
            // var randomHint = questions[Math.floor(Math.random()*questions.length)];
            console.log(randomHint.hint);
            // var result;
            var textStyle = { font: '10pt Arial', boundsAlignH: 'left', boundsAlignV: 'center', wordWrap: true, wordWrapWidth: 330 };
            var docHint =  questions.splice(randomHint, 1);
            // console.log(newQuestion);

            this.add.image(0, 0, 'lab');

            // create "items" group to tween simultaneously

            var skull = game.add.sprite(310, 50, 'skull');
              skull.inputEnabled = true;
              skull.input.enableDrag(true, false, true, 255, {width:60, height: 60});
              skull.events.onInputDown.add(onInputDown, this);
              skull.events.onDragStop.add(onDragStop, this);
            var lungs = game.add.sprite(235, 50, 'lungs');
              lungs.inputEnabled = true;
              lungs.input.enableDrag(true, false, true, 255, {width:60, height: 60});
              lungs.events.onInputDown.add(onInputDown, this);
              lungs.events.onDragStop.add(onDragStop, this);
            var kidney = game.add.sprite(165, 50, 'kidney');
              kidney.inputEnabled = true;
              kidney.input.enableDrag(true, false, true, 255, {width:60, height: 60});
              kidney.events.onInputDown.add(onInputDown, this);
              kidney.events.onDragStop
            var pelvis = game.add.sprite(75, 40, 'pelvis');
              pelvis.inputEnabled = true;
              pelvis.input.enableDrag(true, false, true, 255, {width:60, height: 60});
              pelvis.events.onInputDown.add(onInputDown, this);
              pelvis.events.onDragStop.add(onDragStop, this);
            var brain = game.add.sprite(20, 140, 'brain');
              brain.inputEnabled = true;
              brain.input.enableDrag(true, false, true, 255, {width: 60, height: 60});
              brain.events.onInputDown.add(onInputDown, this);
              brain.events.onDragStop.add(onDragStop, this);
            // var stomach = game.add.sprite(20, 140, 'brain');
            //   stomach.inputEnabled = true;
            //   stomach.input.enableDrag(true, false, true, 255, {width: 60, height: 60});
            //   stomach.events.onInputDown.add(onInputDown, this);
            //   stomach.events.onDragStop.add(onDragStop, this);
            var heart = game.add.sprite(20, 50, 'heart');
              heart.inputEnabled = true;
              heart.input.enableDrag(true, false, true, 255, {width: 60, height: 60});
              heart.events.onInputDown.add(onInputDown, this);
              heart.events.onDragStop.add(onDragStop, this);


            var labShelf = this.add.image(0, 10, 'shelf');

            var monster = this.add.image(536, 30, 'monster');

        // // enableDrag parameters = (lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
            // skullY.inputEnabled = true;
            // skullY.input.enableDrag(true, false, true, 255, {width:100, height: 100});
            // skullY.events.onDragStop.add(onDragStop, this);

            this.add.text(566, 300, itemsNeeded);
            var itText = this.add.text(536, 330, 'items needed', textStyle);

        //
            requestItem();

            console.log(game.width, game.height);

        // first req


        function requestItem() {

          var msgGroup = game.add.group();

          let drMsg = msgGroup.create(game.width/6, game.height/6, 'speechBubble');
          // let drMsg = msgGroup.create(bubble);

          // let drMsg = msgGroup.create(0, 0, 'speechBubble');

        // start group scaled to 0, tween up
          msgGroup.scale.x = 0;
          msgGroup.scale.y = 0;

          var loadRequest = game.add.tween(msgGroup.scale).to( {x:1, y:1}, 800, Phaser.Easing.Elastic.In, true);
          var hintText = game.add.text(140,90, randomHint.hint, textStyle, msgGroup);
          var contBtn = game.add.button(900, 160, 'continueButton', playResume, msgGroup);

          game.add.tween(contBtn.position).to({x: 220, y: 160}, 900, Phaser.Easing.Elastic.In, true);
        // reload the dr (hand up) sprite
          var drLegbone = game.add.sprite(game.width-230, game.height-275, 'drClue');

          function playResume() {
            var tweenOut = game.add.tween(msgGroup.scale).to({x:3000, y:3000}, 900, Phaser.Easing.Elastic.Out, true);
            game.world.remove(drLegbone);
            game.add.tween(contBtn.position).to({x:900, y: 160}, 900, Phaser.Easing.Elastic.Out, true);
            game.add.image(game.width-230, game.height-275, 'dr');
          }
        }

      

          // test whether item lands in dropzone
          function onDragStop(sprite, pointer) {

              if (pointer.x >= 420 && pointer.x <= 530 && pointer.y >= 165 ) {
                evalItem(sprite, pointer);
              } else {
                console.log('return to origin');
                returnToOrigin();
              }
          }

          function returnToOrigin() {
          // return this to origin points
            console.log('returnToOrigin is running');

          }

          function onInputDown(sprite, pointer) {
            console.log(sprite.key);
            // return sprite.key;

          }


          function evalItem(sprite, queryKey) {
            console.log('evalItem is functioning');
            var queryKey = randomHint.keyName;
            var spriteKey = sprite.key;

            // console.log(spriteKey);

            if (spriteKey === queryKey) {
              game.world.remove(sprite);
              var successGroup  = game.add.group();
              let success = successGroup.create(game.width/6, game.height/6, 'speechBubble');
              successGroup.scale.x = 0;
              successGroup.scale.y = 0;

              var successTween = game.add.tween(successGroup.scale).to( {x:1, y:1}, 600, Phaser.Easing.Elastic.InOut, true);
              var addToBtn = game.add.button(220, 260, 'addToCreature', creatureAnimate, successGroup);
              var successText = game.add.text(140,90, randomHint.answer, textStyle, successGroup);

              console.log('success! subtract one from items needed');
              itemsNeeded--;

              addToBtn.scale.x = 0;
              addToBtn.scale.y = 0;
              game.add.tween(addToBtn.scale).to({x:1, y:1}, 600, Phaser.Easing.Elastic.In, true);

              function creatureAnimate(){
                // game.add.tween(drLegbone.position).to({x:1000}, 1000, Phaser.Easing.Elastic.Out, true);
                addToBtn.scale.x = 0;
                addToBtn.scale.y = 0;
                successGroup.scale.x = 0;
                successGroup.scale.y = 0;
                drAnimate();
                function drAnimate(){
                  // nothing yet
                  game.add.text(game.width/2, game.height/2, '[monster animation here]', textStyle);
                  requestNewItem();
                }

              }

            } else { //run the second hint
              console.log(queryKey);
              var msgGroup = game.add.group();
              let drMsg = msgGroup.create(game.width/6, game.height/6, 'speechBubble');
                // start group scaled to 0, tween up
              msgGroup.scale.x = 0;
              msgGroup.scale.y = 0;

              // load second hint and continue button
              var loadRequest = game.add.tween(msgGroup.scale).to( {x:1, y:1}, 600, Phaser.Easing.Elastic.InOut, true);
              var contBtn = game.add.button(220, 160, 'continueButton', tryAgain, msgGroup);
              var hintText = game.add.text(140,90, randomHint.hint2, textStyle, msgGroup);
              // let drLegbone = game.add.sprite(game.width-230, game.height-275, 'drClue');

              contBtn.scale.x = 0;
              contBtn.scale.y = 0;
              game.add.tween(contBtn.scale).to({x:1, y:1}, 600, Phaser.Easing.Elastic.In, true);
              }

            function tryAgain(){
              console.log('tryAgain is running');
              var tweenOut = game.add.tween(msgGroup.scale).to({x:300, y:300}, 600, Phaser.Easing.Elastic.Out, true);
              game.add.tween(contBtn.position).to({x:900, y: 160}, 900, Phaser.Easing.Elastic.Out, true);
              // game.add.image(game.width-230, game.height-275, 'dr');
              // game.stage.remove(drLegbone);
              // return item to shelf
              }

          }

        }

update() {}
  // end update
}
