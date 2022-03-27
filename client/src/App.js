import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
  state = {
    number: '',
    oldNumber: '',
    response: '',
    error: {}
  };

  getResult = async() => {
    let res = await this.callApi()
    if(res.status == 200)
    this.setState({ response: res.medianData.join(), oldNumber: this.state.number,number: '' })
    else
      this.setState({ error: res.error,response: '' });
  }

  setNumber = (event) => {
    this.setState({...this.state,
      error: {},
      number: event.target.value})
  }

  callApi = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ number: this.state.number })
  };
    const response = await fetch('/api',requestOptions);
    const body = await response.json();
    return body;
  };

  render() {
    let error = this.state.error
    console.log(error)
      
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <div>
          <input type="number" onChange={this.setNumber} value={this.state.number}></input>
          {
            error.details && error.details.map((val) => {
              return <p className='error'>{val.message}</p>
            })
          }
          <button onClick={this.getResult}>Enter</button>
          {
            this.state.response && 
            <p className='result'>Hi, median(s) of prime numbers of 0-{this.state.oldNumber} = {this.state.response}</p>
          }
        </div>
        {/* <p className="App-intro" >{this.state.response}</p> */}
      </div>
    );
  }
}

export default App;
