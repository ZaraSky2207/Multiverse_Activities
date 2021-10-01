class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = []
    }
    addBag(bag) {
        this.bag.push(Bag);
    }
}

class Crew extends Passenger {
    constructor(name, passportNumber, seatNumber)
        super(name, passportNumber, seatNumber, postition, staffNumber)
        this.postion = []
        this.stafNumber = []
}


module.exports = Passenger 