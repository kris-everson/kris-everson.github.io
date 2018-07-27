class Scene1 extends Phaser.scene {
      constructor() {
        super ({key:"Scene1"});
      }
      preload ()
      {
          //background
          this.load.image('lab', 'assets/lab.png');
          this.load.image('shelf', 'assets/shelf.png');

          //parts
          this.load.image('skull', 'assets/skull.png');
          this.load.image('kidneys', 'assets/kidneys.png');
          this.load.image('heart', 'assets/heart.png');
          this.load.image('brain', 'assets/brain.png');
          this.load.image('lungs', 'assets/lungs.png');

          //characters and sprites
          this.load.image('hint', 'assets/doctorHint.png');
          this.load.image('curtain', 'assets/monster.png');

          //ui buttons and whatnot
          this.load.image('help', 'assets/help-icon.png');
          this.load.image('volume', 'assets/volume.png');

      }

      function create () {

          this.add.image(0, 0, 'lab').setOrigin(0,0);

          var skull = this.add.sprite(325, 50, 'skull').setOrigin(0,0).setInteractive();
          var dr = this.add.sprite(410, 170, 'hint').setOrigin(0,0).setInteractive();

          dr.on('pointerover', function() {
              this.setTint(0x00ff00);

          });
          dr.on('pointerout', function() {
            this.clearTint();
          });

          skull.on('pointerover', function() {
            this.setTint(0x00ff00);
          });
          skull.on('pointerout', function(){this.clearTint();});

          this.input.setDraggable(skull);
          this.input.on('dragstart', function(pointer, gameObject){
            gameObject.setTint(0xff0000);
          });
          this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();

          });

        this.input.on('dragstart', function(pointer, gameObject){
          gameObject.setTint(0xff0000);
        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

          gameObject.x = dragX;
          gameObject.y = dragY;


      });
          this.add.image(0, 10, 'shelf').setOrigin(0,0);
          this.add.image(534, 48, 'curtain').setOrigin(0,0);
      } // end create

}
