import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
