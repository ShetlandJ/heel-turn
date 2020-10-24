import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.output.css';
import Navbar from './components/Global/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const { name } = this.state;
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
      .then((response) => response.json())
      .then((state) => this.setState(state));
  }

  render() {
    const { greeting } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">Submit</button>
          </form>
          <p>{greeting}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
