class Start extends Phaser.Scene {
  constructor() {
      super({key:"Start"});
  }
preload() {
    // game.forceSingleUpdate = true;
    this.load.image('startScreen', "assets/start.jpg");
    this.load.image('button', "assets/startScreen/startButton.png");
    this.load.image('logo', "assets/startScreen/logo.png");
    this.load.image('theDoctor', "assets/startScreen/theDoctor.png");
  }

create() {
    this.add.image(0, 0, 'startScreen').setOrigin(0,0);


    }

 update() {
  }
}
