import React from 'react';
import './App.css';
import './tailwind.output.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Global/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/about" name="about" component={About} />
      <Route exact name="home" path="/" component={Home} />
    </div>
  );
}

export default App;
