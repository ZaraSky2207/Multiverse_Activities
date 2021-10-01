class Airport {
    constructor(name) {
        this.name = name;
        this.planes = [];
    }

    addPlane(Plane) {
        this.planes.push(Plane);
    }
}

module.exports = Airport