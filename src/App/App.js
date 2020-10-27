import React, { Component } from 'react';
import './App.scss';

import MemberGrids from './Members/MemberGrids';
import Member from './Members/Member';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <div>
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="DivisionButton">分组学员</button>
          <MemberGrids className="MemberGrids">
            <Member className="Member">member</Member>
          </MemberGrids>
        </div>
      </div>
    );
  }
}

export default App;
