import React, { Component } from 'react';
import './App.scss';

import MemberGrids from './Members/MemberGrids';
import Member from './Members/Member';

import GroupGrids from './GroupDivision/GroupGrids';
import Group from './GroupDivision/Group';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <div>
          <button className="DivisionButton" type="button">
            分组学员
          </button>
          <GroupGrids className="GroupGrids">
            <Group />
          </GroupGrids>
          <MemberGrids className="MemberGrids">
            <Member className="Member" />
          </MemberGrids>
        </div>
      </div>
    );
  }
}

export default App;
