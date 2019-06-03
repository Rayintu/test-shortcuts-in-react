import React, { Component } from 'react';
import './App.css';

import { HotKeys } from 'react-hotkeys';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shortcut: ''
    }

    this.keyMap = {
      insert: 'ins', //ins is notation for the insert key
      help: '?', //This is basically shift+/ but handled automagically
      doAThing: ['d', 'shift+i', 'ctrl+q', 'command+q'] //multiple options
    }

    this.handlers = {
      'insert': (event) => { this.handleInsert() },
      'help': (event) => { this.handleHelp(event) },
      'doAThing': (event) => {this.handleAThing()}
    }
  }

  handleInsert = () => {
    this.setState({shortcut: 'insert'})
    console.log('Insert hotkey called');
  }
  
  handleHelp = (event) => {
    this.setState({shortcut: 'help'})
    console.log('help');
    console.log(event);
  }

  handleAThing = () => {
    this.setState({shortcut: 'A thing'})
    console.log('a thing');
  }

  render() {
    return (
      <div className="no-shortcuts-here">
        <HotKeys keyMap={this.keyMap} handlers={this.handlers}>
          <div autoFocus className="shortcuts-here">
            click on this to use shortcuts
          </div>
        </HotKeys>
        <div className="center-text">
          Can't use shortcuts here
        </div>
        <div className="recent-shortcut">
          <div className="recent-shortcut-box">
            <h3> Most recent shortcut: {this.state.shortcut} </h3>
          </div>
        </div>
        <div className="shortcut-list">
          <ul>
            <span className="list-title">Shortcuts:</span>
            <li>insert: 'insert'</li>
            <li>help: '?' (shift+/)</li>
            <li>a thing: d OR shift+i OR ctrl+q OR ⌘+q</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
