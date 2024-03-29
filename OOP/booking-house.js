/*
Bookmaker’s

In your IDE of choice, create a new JavaScript file named booking-house.js and make it so that all code written in the file follows JS strict mode.

Create an anonymous immediately-invoking function that will hold main execution of all program calls. Make sure that functions that you write in this function are pure functions.

Create constructor functions with properties representing the following:
Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
Person - name, surname, date of birth
Player - person, bet amount, country (instance of Country)
Address - country, city, postal code, street and number
BettingPlace - address and list of players (initially empty)
BettingHouse - competition, list of betting places (initially empty) and number of players

Create continents as constants (objects that can not change). So, when passing a continent as a parameter, you should pass Continent.ASIA.

Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).

Add a method to Address that returns a formatted string like the following one:
	Nemanjina 4, 11000 Beograd, SR

Add a method to Player that returns a formatted string containing a country, expected win amount (odds * bet amount) and person data.
SR, 1050.00 eur, Pera Peric, 29 years

Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

Add a method to BettingPlace that adds a player to the players list of a betting place. 

Inside your immediately-invoking function, add a function that returns a created Player.

Inside your immediately-invoking function, add a function that creates a BettingPlace.

Create an instance of the BettingHouse that receives the name of competition.

Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.

Display all betting house data in the following manner:




Football World Cup Winner, 2 betting places, 4 bets
	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
		SR, 1050.00 eur, Pera Peric, 29 years
		SR, 1050.00 eur, Pera Peric, 29 years
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
		GR, 1050.00 eur, Pera Peric, 29 years
		SR, 1050.00 eur, Pera Peric, 29 years
There are 3 bets on Serbia


*/