function Kaarten(props) {
  return (
    <div className='kaarten'>
      <h2>{props.naam}</h2>
      <img src={props.foto}></img>
      <p>{props.beschrijving}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Kaarten naam='Brad Traversy' foto='https://i0.wp.com/trydiscountcoupons.com/wp-content/uploads/2017/10/brad-traversy-instructor-udemy.jpg?fit=200%2C200&ssl=1' beschrijving='web development man'/>
      <Kaarten naam='David Goggins' foto='https://pbs.twimg.com/profile_images/1277635237317574657/1W7y6V4a.jpg' beschrijving='overwin jezelf'/>
    </div>
  );
}

export default App;