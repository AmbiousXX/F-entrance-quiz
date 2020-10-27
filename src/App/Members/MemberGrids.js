import React from 'react';
import './MemberGrids.css';

class MemberGrids extends React.PureComponent {
  render() {
    return (
      <div>
        <p className="MembersInfoTitle">学员列表</p>
        <button className="AddNewMemberButton" type="button">
          +添加学员
        </button>
      </div>
    );
  }
}

export default MemberGrids;
