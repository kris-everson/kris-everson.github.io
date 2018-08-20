class Play extends Phaser.State {

preload() {

}


create() {

var spriteSelected;
var messageGroup;
var originX;
var originY;
var questionSelected;
var correct;
var itemsNeeded = 6;

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

var vertebraeQuery =  new Object();
vertebraeQuery.hint = "Someone is looking slouchy! Hand me a piece of the skeletal system.";
vertebraeQuery.hint2 = "Since when is THAT part of the skeletal system, silly? Keep looking!";
vertebraeQuery.answer = "That's right! The vertebral column is part of the skeletal system. The system has 206 bones in all!";
vertebraeQuery.keyName = 'vertebrae';

var skullQuery = new Object();
skullQuery.hint = 'Our creature requires a cranium. Quickly!';
skullQuery.hint2 = 'Everyone should have a good head on their shoulders. This creature is no exception.';
skullQuery.answer = 'Correct! Our creature needs a strong skull to protect its brain and sense organs. (And "cranium" is another word for "skull").';
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
heartQuery.hint = 'How do we get the blood flowing? We need a pump!';
heartQuery.hint2 = "No, I'm looking for the main organ of the circulatory system";
heartQuery.answer = "You got it! The heart's muscles press together about once every second when the body is at rest. This pumps blood through its chambers and into the blood vessels.";
heartQuery.keyName = 'heart';

var teethQuery = new Object();
teethQuery.hint = "He looks hungry! But he can't break down food with an empty mouth. Help!";
teethQuery.hint2 = 'How will he chew his food with that? Try again!';
teethQuery.answer = "That's it! Did you know that a healthy mouth in an adult has 32 teeth?";
teethQuery.keyName = 'teeth';

var earQuery = new Object();
earQuery.hint = 'Our creature will need to be able to hear us! Give me the organs used to sense sound.';
earQuery.hint2 = 'Listen closely and try again: give me the organs used for hearing.';
earQuery.answer = 'Correct! And your ear has another important job besides helping you hear. Its inner section helps you to keep your balance, too.';
earQuery.keyName = 'ears';

var noseQuery = new Object();
noseQuery.hint = 'Hand me the main organ of the olfactory system.';
noseQuery.hint2 = 'You really stink at this! Olfaction is the sense of SMELL.';
noseQuery.answer = 'Good job, you sniffed it out! A person with a very good sense of smell can use their nose to tell the difference between 10,000 different odors!';
noseQuery.keyName = 'nose';

var eyesQuery = new Object();
eyesQuery.hint = 'Find the pair of organs that sense light.';
eyesQuery.hint2 = 'No, look around! He needs something to SEE with!';
eyesQuery.answer = "Right! As part of the body's sensory system, the eyes work with the brain to give you your sense of sight.";
eyesQuery.keyName = 'eyes';

var stomachQuery = new Object();
stomachQuery.hint = 'We need to give our creation a way to digest his food.';
stomachQuery.hint2 = "That's not it. I'm looking for the main organ of the digestive tract.";
stomachQuery.answer = "That's right.";
stomachQuery.keyName = 'stomach';

var intestineQuery = new Object();
intestineQuery.hint = 'I need to complete the digestive system. Give me part of it now.';
intestineQuery.hint2 = "Hurry, I'm late for lunch! Try again.";
intestineQuery.answer = "You found it! The intestine is one part of the digestive system, which turns the food you eat into the power your body needs.";
intestineQuery.keyName = 'intestine';

var tongueQuery = new Object();
tongueQuery.hint = 'One muscle in the body is attached at only one end. Find it for me.';
tongueQuery.hint2 = "No, the name of the muscle is on the tip of my...";
tongueQuery.answer = "That's right! Did you know that your tongue contains about 10,000 taste buds at birth?";
tongueQuery.keyName = 'tongue';

var ribsQuery = new Object();
ribsQuery.hint = 'How can I protect his respiratory system? I need a large and bony structure. Take a deep breath and look around.';
ribsQuery.hint2 = "No, I'm looking for a box, a cage of bones to protect his lungs.";
ribsQuery.answer = "You found it! The rib cage and its muscles form the chest cavity which contains the lungs.";
ribsQuery.keyName = 'ribs';

var esophagusQuery = new Object();
esophagusQuery.hint = 'Look for a pipe to transfer food into his belly.';
esophagusQuery.hint2 = "Not quite. I need the tube that connects the mouth to the stomach.";
esophagusQuery.answer = "That's right!";
esophagusQuery.keyName = 'esophagus';

var earsQuery = new Object();
earsQuery.hint = 'Our creation will need to be able to hear us. Give me the organs used to sense sound.';
earsQuery.hint2 = "Listen closely and try again. Give me the organs used for hearing.";
earsQuery.answer = "Correct! And your ear has another important job besides helping you hear. Its inner section helps you to keep your balance, too!";
earsQuery.keyName = 'ears';



var questions = [lungsQuery, kidneyQuery, skullQuery, brainQuery, pelvisQuery, heartQuery, teethQuery, earQuery, noseQuery, eyesQuery, stomachQuery, intestineQuery, tongueQuery, ribsQuery, esophagusQuery, earsQuery];

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
    var heart = game.add.sprite(15, 50, 'heart');
      heart.inputEnabled = true;
      heart.input.useHandCursor = true;
      heart.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      heart.events.onInputDown.add(onInputDown, this);
      heart.events.onDragStop.add(onDragStop, this);
    var screwdriver = game.add.sprite(65, 67, 'screwdriver');
      screwdriver.inputEnabled = true;
      screwdriver.input.useHandCursor = true;
      screwdriver.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      screwdriver.events.onInputDown.add(onInputDown, this);
      screwdriver.events.onDragStop.add(onDragStop, this);
    var stomach = game.add.sprite(158, 65, 'stomach');
      stomach.inputEnabled = true;
      stomach.input.useHandCursor = true;
      stomach.input.enableDrag(true, false, true, 255, {width: 60, height: 60});
      stomach.events.onInputDown.add(onInputDown, this);
      stomach.events.onDragStop.add(onDragStop, this);
    var tongue = game.add.sprite(240, 180, 'tongue');
      tongue.inputEnabled = true;
      tongue.input.useHandCursor = true;
      tongue.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      tongue.events.onInputDown.add(onInputDown, this);
      tongue.events.onDragStop.add(onDragStop, this);
    var teeth = game.add.sprite(279, 79, 'teeth');
      teeth.inputEnabled = true;
      teeth.input.useHandCursor = true;
      teeth.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      teeth.events.onInputDown.add(onInputDown, this);
      teeth.events.onDragStop.add(onDragStop, this);
    var skull = game.add.sprite(323, 50, 'skull');
      skull.inputEnabled = true;
      skull.input.useHandCursor = true;
      skull.input.enableDrag(true, true, true, 0, {width:70, height: 70});
      // skull.events.onInputOver.add(over, this);
      skull.events.onInputDown.add(onInputDown, this);
      skull.events.onDragStop.add(onDragStop, this);
    var paint = game.add.sprite(10, 156, 'paint');
      paint.inputEnabled = true;
      paint.input.useHandCursor = true;
      paint.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      paint.events.onInputDown.add(onInputDown, this);
      paint.events.onDragStop.add(onDragStop, this);
    var pelvis = game.add.sprite(76, 129, 'pelvis');
      pelvis.inputEnabled = true;
      pelvis.input.useHandCursor = true;
      pelvis.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      pelvis.events.onInputDown.add(onInputDown, this);
      pelvis.events.onDragStop.add(onDragStop, this);
    var brain = game.add.sprite(168, 140, 'brain');
      brain.inputEnabled = true;
      brain.input.useHandCursor = true;
      brain.input.enableDrag(true, true, true, 0, {width: 60, height: 60});
      // brain.events.onInputOver.add(onInputOver, this);
      brain.events.onInputDown.add(onInputDown, this);
      brain.events.onDragStop.add(onDragStop, this);
    var kidney = game.add.sprite(291, 150, 'kidney');
      kidney.inputEnabled = true;
      kidney.input.useHandCursor = true;
      kidney.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      kidney.events.onInputDown.add(onInputDown, this);
      kidney.events.onDragStop.add(onDragStop, this);
    var vertebrae = game.add.sprite(0, 216, 'vertebrae');
      vertebrae.inputEnabled = true;
      vertebrae.input.useHandCursor = true;
      vertebrae.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      vertebrae.events.onInputDown.add(onInputDown, this);
      vertebrae.events.onDragStop.add(onDragStop, this);
    var hammer = game.add.sprite(45, 288, 'hammer');
      hammer.inputEnabled = true;
      hammer.input.useHandCursor = true;
      hammer.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      hammer.events.onInputDown.add(onInputDown, this);
      hammer.events.onDragStop.add(onDragStop, this);
    var intestine = game.add.sprite(126, 260, 'intestine');
      intestine.inputEnabled = true;
      intestine.input.useHandCursor = true;
      intestine.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      intestine.events.onInputDown.add(onInputDown, this);
      intestine.events.onDragStop.add(onDragStop, this);
    var ribs = game.add.sprite(188, 246, 'ribs');
      ribs.inputEnabled = true;
      ribs.input.useHandCursor = true;
      ribs.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      ribs.events.onInputDown.add(onInputDown, this);
      ribs.events.onDragStop.add(onDragStop, this);
    var ears = game.add.sprite(278, 296, 'ears');
      ears.inputEnabled = true;
      ears.input.useHandCursor = true;
      ears.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      ears.events.onInputDown.add(onInputDown, this);
      ears.events.onDragStop.add(onDragStop, this);
    var bone = game.add.sprite(324, 233, 'bone');
      bone.inputEnabled = true;
      bone.input.useHandCursor = true;
      bone.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      bone.events.onInputDown.add(onInputDown, this);
      bone.events.onDragStop.add(onDragStop, this);
    var esophagus = game.add.sprite(10, 388, 'esophagus');
      esophagus.inputEnabled = true;
      esophagus.input.useHandCursor = true;
      esophagus.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      esophagus.events.onInputDown.add(onInputDown, this);
      esophagus.events.onDragStop.add(onDragStop, this);
    var lungs = game.add.sprite(117, 346, 'lungs');
      lungs.inputEnabled = true;
      lungs.input.useHandCursor = true;
      lungs.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      lungs.events.onInputDown.add(onInputDown, this);
      lungs.events.onDragStop.add(onDragStop, this);
    var eyes = game.add.sprite(199, 386, 'eyes');
      eyes.inputEnabled = true;
      eyes.input.useHandCursor = true;
      eyes.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      eyes.events.onInputDown.add(onInputDown, this);
      eyes.events.onDragStop.add(onDragStop, this);
    this.add.image(264, 349, 'nosejar');
    var nose = game.add.sprite(278, 369, 'nose');
      nose.inputEnabled = true;
      nose.input.useHandCursor = true;
      nose.input.enableDrag(true, true, true, 0, {width:60, height: 60});
      nose.events.onInputDown.add(onInputDown, this);
      nose.events.onDragStop.add(onDragStop, this);

    var labShelf = this.add.image(0, 10, 'shelf');

    this.add.image(165, 140, 'brainjar');

    var onInputDown = this.add.image(536, 57, 'monster');
    var muteBtn = game.add.button(565, 5, 'mute', muteOnClick, this);
    muteBtn.inputEnabled = true;
    var helpBtn = game.add.button(604, 5, 'help', helpPopup, this);
    helpBtn.inputEnabled = true;

    var dragToLegboneArrow = this.add.image(485, 120, 'drag-to');
      dragToLegboneArrow.anchor.setTo(0.5, 0.5);
    var dragToLegboneText = this.add.image(480, 75, 'drag-text');
      dragToLegboneText.anchor.setTo(0.5, 0.5);


      var drLegbone = game.add.sprite(game.width-230, game.height-275, 'drClue');
      drLegbone.inputEnabled = true;
      drLegbone.input.useHandCursor = true;
      drLegbone.events.onInputDown.add(openHint, this);
    //start the main game loop!

    openHint();



    // drLegbone.anchor.setTo(0.5, 0.5);

    // function openHint(){
    //   console.log('openHint is running');
    //   var hintText = game.add.text(spriteSelected.hint)
    // }

    function returnToOrigin(spriteSelected, originX, originY) {
        console.log('returnToOrigin is running');
        game.add.tween(spriteSelected.position).to( { x: originX, y: originY }, 600, Phaser.Easing.Elastic.Out, true);
        spriteSelected.alpha = 0;
        spriteSelected.moveDown();
        var spriteFadeIn = game.add.tween(spriteSelected);
        spriteFadeIn.start(spriteFadeIn.to({alpha:1}, 1000, Phaser.Easing.Linear.In, true, 0));

    }
        function over(sprite) {
          sprite.loadTexture(spriteSelected);
          game.add.text(sprite.key, this)
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


          }

          function onInputOver(sprite){
          // do a thing
          }

        function onDragStop(sprite, pointer) {

                if (pointer.x >= 420 && pointer.x <= 530 && pointer.y >= 165 ) {
                  evalItem(sprite, pointer);
                  console.log('onDragStop sprite= ' + sprite.key);

                } else {
                  returnToOrigin(spriteSelected, originX, originY);

                }

            }

        function openHint() {

            var msgGroup = game.add.group();
            var bubbleBG = msgGroup.create(game.width/2, game.height/2-60, 'speechBubble');
            var hintText = game.add.text(game.width/2,game.height/2-95, questionSelected.hint, textStyle, msgGroup);
            hintText.anchor.setTo(0.5, 0.5);
            bubbleBG.anchor.setTo(0.5, 0.5);
            var contBtn = game.add.button(game.width/2, 190, 'continueButton', minHint, msgGroup);
            contBtn.anchor.setTo(0.5, 0.5);
            msgGroup.scale.set(0);
            contBtn.scale.set(0);
            game.add.tween(msgGroup.scale).to({x:1, y:1}, 1100, Phaser.Easing.Elastic.InOut, true);
            game.add.tween(contBtn.scale).to({x:1, y: 1}, 1100, Phaser.Easing.Elastic.InOut, true);

            drLegbone.bringToTop();


            function minHint() {
              // var tweenOut =
                game.add.tween(msgGroup.scale).to({x:0, y:0}, 700, Phaser.Easing.Elastic.Out, true);
                game.add.tween(contBtn.scale).to({x:0, y: 0}, 700, Phaser.Easing.Elastic.Out, true);
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
          game.add.tween(drLegbone.position).to({x:game.width-230}, 1000, Phaser.Easing.Elastic.In, true);
          drLegbone.loadTexture('drClue');
          var swishSound = game.add.sound('swishFX');
          swishSound.play();
          popQuestion();
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
          correct = game.add.audio('correct');
          correct.play();
          drLegbone.loadTexture('goodJobDr');
          messageGroup = game.add.group();
          var bubble = messageGroup.create(game.width/6, game.height/6, 'speechBubble');
          drLegbone.bringToTop();
          bubble.moveDown();
          spriteSelected.anchor.setTo(0.5,0.5);
          spriteSelected.position.x = 550;
          spriteSelected.position.y = 340;
          spriteSelected.bringToTop();
          messageGroup.scale.x = 0;
          messageGroup.scale.y = 0;

          var successTween = game.add.tween(messageGroup.scale).to( {x:1, y:1}, 500, Phaser.Easing.Elastic.In, true);
          var addToBtn = game.add.button(220, 160, 'addToCreature', addToCreateAnim, messageGroup);
          var successText = game.add.text(140,90, questionSelected.answer, textStyle, messageGroup);

          addToBtn.scale.x = 0;
          addToBtn.scale.y = 0;
          game.add.tween(addToBtn.scale).to({x:1, y:1}, 300, Phaser.Easing.Elastic.In, true);


                function addToCreateAnim(){
                  updateItemsNumber();
                  drLegbone.loadTexture('swish');
                  game.add.tween(drLegbone.position).to({x:1100}, 1000, Phaser.Easing.Elastic.Out, true);
                  var swishFX = game.add.sound('swish');
                  swishFX.play();
                  messageGroup.scale.x = 0;
                  messageGroup.scale.y = 0;
                  addToBtn.scale.x = 0;
                  console.log("success: " + questions);
                  game.world.remove(spriteSelected);
                  // game.world.remove(addToBtn);


                  var blood = game.add.sprite(400, 50, 'blood');
                  var addingTo = game.add.sound('powersaw');
                  addingTo.play();
                  var addingItemToCreature = blood.animations.add('addingItemToCreature');
                  blood.animations.play('addingItemToCreature', 15, false);
                  addingItemToCreature.onComplete.add(loadNext, this);



                }
          }

        function evalItem(sprite, queryKey) {
          var queryKey = questionSelected.keyName;
          var spriteKey = sprite.key;

              if (spriteKey === queryKey) {
                // game.world.remove(sprite);
                successAlert();
                }  else { //run the second hint
                returnToOrigin(spriteSelected, originX, originY);
                var wrongAlert = game.add.sound('wrong');
                wrongAlert.play();
                var msgGroup = game.add.group();
                let drMsg = msgGroup.create(game.width/6, game.height/6, 'speechBubble');
                  // start group scaled to 0, tween up
                msgGroup.scale.x = 0;
                msgGroup.scale.y = 0;

                // load second hint and continue button
                var loadRequest = game.add.tween(msgGroup.scale).to( {x:1, y:1}, 600, Phaser.Easing.Elastic.InOut, true);
                var contBtn = game.add.button(220, 160, 'continueButton', tryAgain, msgGroup);
                var hintText = game.add.text(140,90, questionSelected.hint2, textStyle, msgGroup);
                drLegbone.bringToTop();
                drLegbone.loadTexture('drWaiting');
                // let drLegbone = game.add.sprite(game.width-230, game.height-275, 'drClue');

                contBtn.scale.x = 0;
                contBtn.scale.y = 0;
                game.add.tween(contBtn.scale).to({x:1, y:1}, 600, Phaser.Easing.Elastic.In, true);

                function tryAgain(){


                    // var tweenOut =

                    game.add.tween(msgGroup.scale).to({x:300, y:300}, 600, Phaser.Easing.Elastic.Out, true);
                    game.add.tween(contBtn.position).to({x:900, y: 160}, 900, Phaser.Easing.Elastic.Out, true);



                    // game.add.image(game.width-230, game.height-275, 'dr');
                    // game.stage.remove(drLegbone);
                    // return item to shelf
                  } //move to top of outer expression?
                }
              }

        function updateItemsNumber(){
          // itemsCount.text.setText(itemsNeeded); Update text!

          if (itemsNeeded === 0) {

            game.state.start('Win');
            console.log(itemsNeeded);
          } else {
            itemsNeeded--;
            console.log(itemsNeeded);
            return itemsNeeded;
          }
        }

        var itemsNeeded = 6;
        function itemsCount() {text: game.add.text(566, 300, itemsNeeded)};
        itemsCount();
        var itText = this.add.text(536, 330, 'ITEMS NEEDED', textStyle);
        itText.bringToTop();

        }
        // end create



update() {






}
  // end update
}
