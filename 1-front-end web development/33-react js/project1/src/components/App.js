import Card from './Card';
import contacts from '../contacts';
import '../../src/App.css';

function App() {
  return (
    <Card 
      titel={contacts[0].name}
      naam='Beyonce'
      img='https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg'
      telefoon='06 999999999'
      email='b@gmail.com'
    />
  );
}

export default App;