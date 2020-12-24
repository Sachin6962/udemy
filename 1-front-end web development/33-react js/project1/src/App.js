import './App.css';

var tijd = new Date().getHours();
var uitspraken = {
  ochtend   : "Goeiemorgen",
  middag    : "Goedemiddag",
  avond     : "Goedeavond"
}
var kleur = {
  color     : ""
}

function bereken() {
  if (tijd >= 0 && tijd < 12) {
    kleur.color = "red";
    return uitspraken.ochtend;
  }
  else if (tijd >= 12 && tijd < 18) {
    kleur.color = "green";
    return uitspraken.middag;
  }
  else {
    kleur.color = "blue";
    return uitspraken.avond;
  }
}


function App() {
  return (
    <div className="App">
      <h1 className="heading" style={kleur}>{bereken()}</h1>
    </div>
  );
}

export default App;