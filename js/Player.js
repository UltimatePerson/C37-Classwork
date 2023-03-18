class Player {
  constructor(){
    this.name = null;
    this.positionX = 0;
    this.positionY = 0;
    this.index = null; //= playerCount
  }

  getCount(){
    var getCountRef = database.ref("playerCount");
    getCountRef.on("value", (data)=>{
        playerCount = data.val();
    });
  }

  updateCount(count){
    database.ref("/").update({
        playerCount: count
    });
  }

  addPlayer(){
    var playerIndex = "players/player"+this.index

    if(this.index === 1){
        this.positionX = width/2-100
    }
    else if(this.index === 2){
        this.positionX = width/2+100
    }

    database.ref(playerIndex).set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY
    });

  }

  static getPlayersInfo(){
    var playersInfoRef = database.ref("players/player"+this.index);
    playersInfoRef.on("value", (data)=>{
        allPlayers = data.val();
    });
  }
}
