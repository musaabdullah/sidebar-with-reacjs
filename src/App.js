import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Settings from './pages/Settings';
import Users from './pages/Users';


function App() {
  const [toggle, setToggle] = useState(false);

    const handleToggle = () => 
    {
        setToggle(!toggle);
        console.log(toggle)
    }

  return (
    <div className="App">
        <Navbar handleToggle={handleToggle} toggle={toggle} />
        <Router>
        <Sidebar  handleToggle={handleToggle} toggle={toggle} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products} />
            <Route path="/Services" component={Services} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" component={Users} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
