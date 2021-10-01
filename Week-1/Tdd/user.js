class User {
    constructor(username, password, email, age) {
        this.username = username
        this.password = password
        this.email = email
        this.age = age 
        this.favoriteTech = []
    }

    checkAge() {
        let age = this.age;

        if(age >= 18 && age < 75) {
            return true;
        } else {
            return false; 
        }
    }

    addTech(technology) {
        this.favoriteTech.push(technology)
    }


   // ValidateEmail(email)
}



module.exports = User
