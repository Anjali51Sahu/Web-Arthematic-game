import { Route, Link, BrowserRouter,Routes } from 'react-router-dom'
import Game from './Game';
import Result from './Result';
import Home from './Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
       <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/result" render={(props) => <Result {...props} score={7} />} />
          </Routes>
          </div>
          </BrowserRouter>
  );
}

export default App;
