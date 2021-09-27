import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import WorkPage from './pages/WorkPage/WorkPage';

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/work" component={WorkPage} />
      </div>
    </Router>
  );
}

export default App;
