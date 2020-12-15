function Schoonmaker(oogKleur, huidskleur, gewicht) {
    this.oogKleur = oogKleur;
    this.huidskleur = huidskleur;
    this.gewicht = gewicht;
    this.clean = function() {
        alert("ik ben aan het schoonmaken..");
    }
}

var maartje = new Schoonmaker("blauw", "blond", 65);

maartje.clean();