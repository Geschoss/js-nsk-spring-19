import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      timeText: '',
      time: '',
      speed: '00',
      inputText: ''
    };

  }
  componentDidMount() {
    this.getText();
    let time = setInterval(this.timer.bind(this), 1000);
    setInterval(this.speed.bind(this), 3000);
    this.setState({
      time: time
    });
  }
  getText() {
    const newText = new XMLHttpRequest();
    newText.open('GET', 'https://fish-text.ru/get?format=html&number=1', false);
    newText.send();
    this.setState({ text: `${newText.responseText.replace('<p>', '').replace('</p>', '')}`, timeText: Math.floor((300 * `${newText.responseText.replace('<p>', '').replace('</p>', '')}`.length) / 1000) });
  }
  textCheck(e) {
    const test = this.state.text;
    if (test.startsWith(e.target.value)) {
      document.getElementById('inputText').style.background = '';
    } else {
      document.getElementById('inputText').style.background = 'red';
    }
  }
  timer() {
    this.setState({ timeText: this.state.timeText - 1 });
    if (this.state.timeText < 1) {
      clearInterval(this.state.time);
      clearInterval(this.state.speed);
      window.confirm('Время вышло!');
    }
  }
  speed() {
    let speed;
    if ((document.getElementById('inputText').value.length - this.state.inputText.length) * 20 > 0) {
      speed = (document.getElementById('inputText').value.length - this.state.inputText.length) * 20;
    }
    this.setState({
      speed: speed,
      inputText: document.getElementById('inputText').value
    })
  }
  render() {
    return (
      <div className="container">
        <div id="conteinerText" class="container">
          <div id="text">{this.state.text}</div>
        </div>
        <input type="text" id="inputText" onInput={this.textCheck.bind(this)} />
        <div>Таймер:{this.state.timeText} </div>
        <div>Скорость:{this.state.speed} </div>
      </div >
    );
  }
}

export default App;