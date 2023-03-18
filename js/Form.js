class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name")
    this.playButton = createButton("Play");
    this.titleImg = createImg("assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementPosition() {
    this.titleImg.position(160, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(
      //anynomous function / arrow function
      () => {
        this.input.hide();
        this.playButton.hide();
        var name = this.input.value();
        var message = `Hello ${name}</br>wait for another player to join......`;
        this.greeting.html(message);

        playerCount += 1;
        player.name = name;
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
      }
    );
  }

  display() {
    this.setElementPosition();
    //call the setElementStyle, handleMousePressed functions
    this.setElementStyle();
    this.handleMousePressed();
  }
}