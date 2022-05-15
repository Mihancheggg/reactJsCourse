import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>

  );
}

const Technologies = () => {
  return(
      <div className="App">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>

  )
}

const Header = () => {
  return(
    <div>
      <a href=''>Home</a>
      <a href=''>News Feed</a>
      <a href=''>Messages</a>
    </div>
  );
}

export default App;
