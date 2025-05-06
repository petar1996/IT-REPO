(function () {

    // Constructor for Country with its name, winning odds, and the continent it belongs to
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    // Enum-like object to store constant values for continents
    const Continent = Object.freeze({
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    });

    // Constructor for Person, with full name and birthdate
    function Person(name, surname, dateofbirth) {
        this.name = name;
        this.surname = surname;
        this.dateofbirth = dateofbirth;

        // Formats date into DD.MM.YY format
        this.formatDate = function () {
            let day = this.dateofbirth.getDate();
            let month = this.dateofbirth.getMonth() + 1; // Months are zero-based in JS
            let year = this.dateofbirth.getFullYear().toString().slice(-2); // Last two digits

            if (day < 10) {
                day = "0" + day;
            }

            if (month < 10) {
                month = "0" + month;
            }

            return day + '.' + month + '.' + year;
        };

        // Returns formatted string of person details
        this.personDisplay = function () {
            return "Name: " + this.name + " Surname: " + this.surname + " Date of birth: " + this.formatDate();
        };
    }

    // Constructor for Address including country, city, postal code, street, and number
    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;

        // Returns full address as a string
        this.getAddressString = function () {
            return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country;
        };
    }

    // Constructor for Player, associating a person, their bet amount, and the country they bet on
    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

        // Returns player info including continent, potential win amount, and person details
        this.getInfo = function () {
            var winAmount = this.betAmount * this.country.odds;
            return this.country.continent + ", " + winAmount + ", " + this.person.personDisplay();
        };
    }

    // Constructor for a Betting Place, which holds an address and list of players
    function BettingPlace(address) {
        this.address = address;
        this.players = [];

        // Adds a player to the betting place
        this.addPlayer = function(player) {
            this.players.push(player);
        };

        // Returns string with basic info about the betting place and total bets made
        this.getData = function () {
            let streetNoNumber = this.address.street;
            let postalAndCity = this.address.postalCode + " " + this.address.city;
            let totalBet = 0;

            // Sum all bet amounts from players
            for (let i = 0; i < this.players.length; i++) {
                totalBet += this.players[i].betAmount;
            }

            return streetNoNumber + ", " + postalAndCity + " Total Bets: " + totalBet + "$";
        };
    }

    // Constructor for Betting House, representing the overall betting environment (competition-wide)
    function BettingHouse(competition) {
        this.competition = competition;
        this.bettingPlaces = [];

        // Adds a betting place to the house
        this.addBettingPlace = function (bettingPlace) {
            this.bettingPlaces.push(bettingPlace);
        };

        // Collects and returns formatted data about all betting places and their players
        this.getData = function () {
            let result = this.competition + ", " + this.bettingPlaces.length + " betting places\n";

            for (let i = 0; i < this.bettingPlaces.length; i++) {
                let place = this.bettingPlaces[i];
                result += "\t" + place.getData() + "\n";

                for (let j = 0; j < place.players.length; j++) {
                    let player = place.players[j];
                    result += "\t\t" + player.getInfo() + "\n";
                }
            }

            return result;
        };
    }

    // Create Country instances
    const serbia = new Country("Serbia", 2, Continent.EUROPE);
    const brazil = new Country("Brazil", 3, Continent.SOUTH_AMERICA);

    // Create Person instances
    const person1 = new Person("John", "Doe", new Date(1990, 0, 1)); // January 1, 1990
    const person2 = new Person("Jane", "Smith", new Date(1985, 1, 2)); // February 2, 1985

    // Create Address instances
    const address1 = new Address("Serbia", "Belgrade", 11000, "Nemanjina", 4);
    const address2 = new Address("Serbia", "Belgrade", 11000, "Knez Mihailova", 10);

    // Create Player instances
    const player1 = new Player(person1, 100, serbia);
    const player2 = new Player(person2, 200, brazil);

    // Create Betting Place instances
    const bettingPlace1 = new BettingPlace(address1);
    const bettingPlace2 = new BettingPlace(address2);

    // Add players to corresponding betting places
    bettingPlace1.addPlayer(player1);
    bettingPlace2.addPlayer(player2);

    // Create Betting House instance
    const bettingHouse = new BettingHouse("World Cup 2026");

    // Add betting places to the betting house
    bettingHouse.addBettingPlace(bettingPlace1);
    bettingHouse.addBettingPlace(bettingPlace2);

    // Log the entire betting house data to the console
    console.log(bettingHouse.getData());

})();