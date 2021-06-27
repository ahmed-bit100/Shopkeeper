import './App.css';
import Navbar from './Components/nav/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './Components/footer/Footer';
import About from './Components/pages/About';
import HomePage from './Components/pages/HomePage';
import Test from './Components/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
