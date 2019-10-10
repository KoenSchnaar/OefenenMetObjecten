function testen(){
    console.log("Vandaag heb ik, " +sporter3.naam+ ", gesport onder leiding van " +begeleider1.naam+ " en we hebben vooral getraind op " +apparaat1.naamApparaat+ " in de sportschool " +basicFit.naam+ " in " +basicFit.plaats+ ".");
}

class Sportschool{
    constructor(naam, plaats, ledenaantal, kostenPerMaand){
        this.naam = naam;
        this.plaats = plaats;
        this.ledenaantal = ledenaantal;
        this.kostenPerMaand = kostenPerMaand;
    }
}

class Sporter{
    constructor(naam, leeftijd, geslacht){
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
    }
}

class Begeleider{
    constructor(naam, leeftijd){
        this.naam = naam;
        this.leeftijd = leeftijd;
    }
}


class Apparaat{
constructor(merk, spiergroep, naamApparaat){
    this.merk = merk;
    this.spiergroep = spiergroep;
    this.naamApparaat = naamApparaat;
}
}


var basicFit = new Sportschool("BasicFit", "Utrecht", 5000)
var apparaat1 = new Apparaat("lifeFitness", "cardio", "loopband");
var sporter1 = new Sporter("Henk", 53, "man");
var sporter2 = new Sporter("Sanne", 26, "vrouw");
var sporter3 = new Sporter("Joris", 34, "man");
var begeleider1 = new Begeleider("Frank", 29);