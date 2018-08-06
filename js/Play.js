class Play extends Phaser.State {

preload() {

}



create() {

var itemsNeeded = 6;
function itemsCount() {text: game.add.text(566, 300, itemsNeeded)}
itemsCount();
var itText = this.add.text(536, 330, 'ITEMS NEEDED', textStyle);
var spriteSelected;
////////////////////////


var lungsQuery = new Object();
lungsQuery.hint = 'Quick! The creature needs a way to get some oxygen into his body.';
lungsQuery.hint2 = 'Sorry. Take a deep breath and try again!';
lungsQuery.answer = "Correct! The lungs are the major organ of the respiratory system. They work with the heart to bring fresh oxygen into the body and push out waste carbon dioxide.";
lungsQuery.keyName = 'lungs';

var kidneyQuery =  new Object();
kidneyQuery.hint = "Help me find the pair of organs that filter waste from the blood.";
kidneyQuery.hint2 = "I'll give you a hint: they're shaped like a pair of large beans.";
kidneyQuery.answer = "Good job! Did you know that your kidneys filter around 200 quarts (200 L) of blood?";
kidneyQuery.keyName = 'kidney';

var skullQuery = new Object();
skullQuery.hint = 'Our creature requires a cranium. Quickly!';
skullQuery.hint2 = 'Everyone should have a good head on their shoulders. This creature is no exception.';
skullQuery.answer = 'Correct! Our creature needs a strong skull to protext its brain and sense organs. (And "cranium" is another word for "skull").'
skullQuery.keyName = 'skull';

var brainQuery = new Object();
brainQuery.hint = 'Brains! I need brains!';
brainQuery.hint2 = 'Oops! I think my assistant needs some brains as well. Try again.';
brainQuery.answer = "Yes! Now that's using your head. The brain controls movement, writing, reading, speech, and memory.";
brainQuery.keyName = 'brain';

var pelvisQuery =  new Object();
pelvisQuery.hint = "Find me a bony structure to connect the creature's legs to the base of the spine";
pelvisQuery.hint2 = 'No, I need a ring of bones to give this creature some hips.';
pelvisQuery.answer = "That's right!";
pelvisQuery.keyName = 'pelvis';

var heartQuery = new Object();
heartQuery.hint = 'Get the blood pumping.';
heartQuery.hint2 = 'no, try again';
heartQuery.answer = 'cool! add the heart to the creature.';
heartQuery.keyName = 'heart';

// var stomachQuery = new Object();
// stomachQuery.hint = 'We need to give our creation a way to digest his food.';
// stomachQuery.hint2 = "That's not it. I'm looking for the main organ of the digestive tract.";
// stomachQuery.answer = "That's right.""
// stomachQuery.keyName = 'stomach';

var originX;
var originY;
var questionSelected;

var questions = [lungsQuery, kidneyQuery, skullQuery, brainQuery, pelvisQuery, heartQuery];

questions.sort(function(){return Math.round(Math.random());});
console.log(questions);

// original method
// var randomIndex = questions[Math.floor(Math.random()*questions.length)];

popQuestion();

function popQuestion(){
  questionSelected = questions.pop();
  console.log(questionSelected);
  console.log("line 148 -----> " + questionSelected.hint);
  return questionSelected;

}

////////////////////

    var textStyle = { font: '10pt Tahoma', boundsAlignH: 'left', boundsAlignV: 'center', wordWrap: true, wordWrapWidth: 300 };
// splices the question out

    // console.log(newQuestion);

    this.add.image(0, 0, 'lab');

    // create "items" group to tween simultaneously

    var skull = game.add.sprite(320, 50, 'skull');
      skull.inputEnabled = true;
      skull.input.useHandCursor = true;
      skull.input.enableDrag(true, true, true, 0, {width:70, height: 70});
      skull.events.onInputDown.add(onInputDown, this);
      skull.events.onDragStop.add(onDragStop, this);
      // skull.events.pointerOver.add(pointerOver, this);
    var lungs = game.add.sprite(245, 50, 'lungs');
      lungs.inputEnabled = true;
      lungs.input.useHandCursor = true;
      lungs.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      lungs.events.onInputDown.add(onInputDown, this);
      lungs.events.onDragStop.add(onDragStop, this);
    var kidney = game.add.sprite(165, 50, 'kidney');
      kidney.inputEnabled = true;
      kidney.input.useHandCursor = true;
      kidney.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      kidney.events.onInputDown.add(onInputDown, this);
      kidney.events.onDragStop.add(onDragStop, this);
    var pelvis = game.add.sprite(75, 40, 'pelvis');
      pelvis.inputEnabled = true;
      pelvis.input.useHandCursor = true;
      pelvis.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      pelvis.events.onInputDown.add(onInputDown, this);
      pelvis.events.onDragStop.add(onDragStop, this);
    var brain = game.add.sprite(20, 140, 'brain');
      brain.inputEnabled = true;
      brain.input.useHandCursor = true;
      brain.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      brain.events.onInputDown.add(onInputDown, this);
      brain.events.onDragStop.add(onDragStop, this);
    var stomach = game.add.sprite(90, 140, 'stomach');
      stomach.inputEnabled = true;
      stomach.input.enableDrag(true, false, true, 255, {width: 60, height: 60});
      stomach.events.onInputDown.add(onInputDown, this);
      stomach.events.onDragStop.add(onDragStop, this);
    var heart = game.add.sprite(20, 50, 'heart');
      heart.inputEnabled = true;
      heart.input.useHandCursor = true;
      heart.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      heart.events.onInputDown.add(onInputDown, this);
      heart.events.onDragStop.add(onDragStop, this);
    var screwdriver = game.add.sprite(165, 185, 'screwdriver');
      screwdriver.inputEnabled = true;
      screwdriver.input.useHandCursor = true;
      screwdriver.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      screwdriver.events.onInputDown.add(onInputDown, this);
      screwdriver.events.onDragStop.add(onDragStop, this);
    var paint = game.add.sprite(245, 150, 'paint');
      paint.inputEnabled = true;
      paint.input.useHandCursor = true;
      paint.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      paint.events.onInputDown.add(onInputDown, this);
      paint.events.onDragStop.add(onDragStop, this);






    var labShelf = this.add.image(0, 10, 'shelf');

    var monster = this.add.image(536, 57, 'monster');
    var muteBtn = this.add.image(565, 5, 'mute');
    var helpBtn = this.add.image(604, 5, 'help');


// // enableDrag parameters = (lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)

    // updateItemsNumber();

    //start the main game loop!

    firstHint();


    var drLegbone = game.add.sprite(game.width-230, game.height-275, 'drClue');
    drLegbone.scale.setTo(0.5, 0.5);

    function returnToOrigin(spriteSelected, originX, originY) {
        console.log('returnToOrigin is running');
        // console.log(originX.position.x + " " + originY.position.y);
        // spriteSelected.sendToBack();
        game.add.tween(spriteSelected).to( { x: originX, y: originY }, 600, Phaser.Easing.Elastic.Out, true);

        // spriteSelected.position.x = originX;
        // spriteSelected.position.y = originY;
        // console.log(spriteSelected.position.x + " " + spriteSelected.position.y + "originX: " + originX + "originY: " + originY);
        // spriteSelected.position.y = originY.position.y;
        // spriteSelected.position.x = originX;
        // spriteSelected.position.y = originY;

    }

        function onInputDown(sprite, pointer) {
            console.log(sprite.key);
            spriteSelected = sprite;
            sprite.bringToTop();
            console.log(spriteSelected.position.x, spriteSelected.position.y);
            originX = spriteSelected.position.x;
            originY = spriteSelected.position.y;
            console.log(originX + ' ' + originY);
            console.log(spriteSelected.key);
            return {
                spriteSelected: spriteSelected,
                originX: originX,
                originY: originY
            }


            // return originY;
            // onDragStop(sprite, pointer);
          }

        function onDragStop(sprite, pointer) {

                if (pointer.x >= 420 && pointer.x <= 530 && pointer.y >= 165 ) {
                  evalItem(sprite, pointer);
                  console.log('onDragStop sprite= ' + sprite.key);

                  // game.world.remove(drLegbone); // hacky solution to swap out the dr sprite
                  // reloaded in the evalItem function
                } else {
                  console.log(originX, originY);
                  returnToOrigin(spriteSelected, originX, originY);

                  // console.log(spriteSelected.position.x, spriteSelected.position.y);

                }

            }

        function firstHint() {

            var msgGroup = game.add.group();
            var bubbleBG = msgGroup.create(game.width/6, game.height/6, 'speechBubble');
            var hintText = game.add.text(140,90, questionSelected.hint, textStyle, msgGroup);
            var contBtn = game.add.button(220, 160, 'continueButton', startPlay, msgGroup);

            function startPlay() {
              var tweenOut = game.add.tween(msgGroup.scale).to({x:3000, y:3000}, 900, Phaser.Easing.Elastic.Out, true);
              game.add.tween(contBtn.position).to({x:900, y: 160}, 1000, Phaser.Easing.Elastic.InOut, true);
              drLegbone.loadTexture('drWaiting');

              follow();
              function follow(pointer){

                // var eyeball1 = new Phaser.Circle(465, 230, 16);
                // var pupil1 = new Phaser.Circle(465, 230, 4);
                // pupil1.inputEnabled = true;
                // var pupil2 = new Phaser.Circle(490,230, 4);
                //
                // game.debug.geom(pupil1, "#313131");
                // game.debug.geom(pupil2, "#313131");

              }
            }

        }

        function loadNext(){
      // load the next hint (used after firstHint)
          popQuestion();
          console.log(questionSelected.hint);
          drLegbone.loadTexture('drClue');
          var msgGroup = game.add.group();
          var bubbleBG = msgGroup.create(game.width/6, game.height/6, 'speechBubble');
          var hintText = game.add.text(140,90, questionSelected.hint, textStyle, msgGroup);
          var contBtn = game.add.button(220, 160, 'continueButton', startPlay, msgGroup);
          drLegbone.bringToTop();
          function startPlay() {
            var tweenOut = game.add.tween(msgGroup.scale).to({x:3000, y:3000}, 900, Phaser.Easing.Elastic.Out, true);
            game.add.tween(contBtn.position).to({x:900, y: 160}, 1000, Phaser.Easing.Elastic.InOut, true);
            drLegbone.loadTexture('drWaiting');
        }
      }


        function successAlert(sprite, pointer) {
          drLegbone.loadTexture('goodJobDr');
          var messageGroup = game.add.group();
          var bubble = messageGroup.create(game.width/6, game.height/6, 'speechBubble');
          drLegbone.bringToTop();
          game.world.remove(sprite);
          // game.world.remove(sprite);
          // bubble.moveBack();
          messageGroup.scale.x = 0;
          messageGroup.scale.y = 0;

          var successTween = game.add.tween(messageGroup.scale).to( {x:1, y:1}, 500, Phaser.Easing.Elastic.In, true);
          var addToBtn = game.add.button(220, 160, 'addToCreature', minimizeMessage, messageGroup);
          var successText = game.add.text(140,90, questionSelected.answer, textStyle, messageGroup);

          addToBtn.scale.x = 0;
          addToBtn.scale.y = 0;
          game.add.tween(addToBtn.scale).to({x:1, y:1}, 500, Phaser.Easing.Elastic.In, true);

            function minimizeMessage(){
            console.log("success: " + questions);
            game.world.remove(addToBtn);
            messageGroup.scale.x = 0;
            updateItemsNumber();
            loadNext();

            }

          }

          function updateItemsNumber(){

            itemsNeeded--;
            console.log(itemsNeeded);
            console.log(itemsCount);
            // itemsCount.text.setText(itemsNeeded); Update text!
            if (itemsNeeded === 0) {
              game.state.start('Win');
            }


          }

        function evalItem(sprite, queryKey) {
          var queryKey = questionSelected.keyName;
          var spriteKey = sprite.key;

              if (spriteKey === queryKey) {
                game.world.remove(sprite);
                successAlert();
                }  else { //run the second hint
                returnToOrigin(spriteSelected);
                console.log(queryKey);
                var msgGroup = game.add.group();
                let drMsg = msgGroup.create(game.width/6, game.height/6, 'speechBubble');
                  // start group scaled to 0, tween up
                msgGroup.scale.x = 0;
                msgGroup.scale.y = 0;

                // load second hint and continue button
                var loadRequest = game.add.tween(msgGroup.scale).to( {x:1, y:1}, 600, Phaser.Easing.Elastic.InOut, true);
                var contBtn = game.add.button(220, 160, 'continueButton', tryAgain, msgGroup);
                var hintText = game.add.text(140,90, questionSelected.hint2, textStyle, msgGroup);
                // let drLegbone = game.add.sprite(game.width-230, game.height-275, 'drClue');

                contBtn.scale.x = 0;
                contBtn.scale.y = 0;
                game.add.tween(contBtn.scale).to({x:1, y:1}, 600, Phaser.Easing.Elastic.In, true);

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


          // test whether item lands in dropzone

        // function onDragStop(sprite, pointer) {
        //
        //     if (pointer.x >= 420 && pointer.x <= 530 && pointer.y >= 165 ) {
        //       evalItem(sprite, pointer);
        //       // game.world.remove(drLegbone); // hacky solution to swap out the dr sprite
        //       // reloaded in the evalItem function
        //     } else {
        //       console.log('return to origin');
        //       returnToOrigin();
        //     }
        // }


// delete this if it works befire successAlert
        // function onInputDown(sprite, pointer) {
        //   console.log(sprite.key);
        //   // return sprite.key;
        // }




        }
        // end create

update() {




}
  // end update
}
