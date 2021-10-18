const ChargingStation = require('./ChargingStation');
const Scooter = require('./Scooter')
const User = require('./UserPerson')





class City {
	constructor(name) {
		this.name = name
		this.stations = { 'Atl': [], 'Dallas': [] };
	}
	addChargingStation(city,station) {
		this.stations[city].push(station)
        console.log(this.stations);
	}
}

let user1 = new User("ScooterRider123",18,"zelle",20)
let scooter1 = new Scooter(1, 10, 'Atl', 'no');
let scooter2 = new Scooter(2,20,'Atl','no')
let newCity = new City('Atl');
let station3 =new ChargingStation('BlazingWheelz', 20)



newCity.addChargingStation('Atl',station3)
station3.addScooter('Scooters Available',scooter1);
station3.addScooter('Scooters Available',scooter2);
station3.removeScooter
console.log(newCity.stations);
module.exports = City;









