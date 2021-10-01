class Plane {
    constructor(type) {
        this.type = type;
        this.passengers = [];
        this.crew = [];
    }
    board(Passenger) {
        this.passengers.push(Passenger);
    }
 board(crew) {
     this.crew.push(crew);
 }
}

module.exports = Plane