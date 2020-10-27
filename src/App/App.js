import React, { Component } from 'react';
import './App.scss';

import MemberGrids from './Members/MemberGrids';
import Member from './Members/Member';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <div className="MemberList">
          学员列表
          <div>
            <MemberGrids className="Members">
              <Member className="Member">member</Member>
            </MemberGrids>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
