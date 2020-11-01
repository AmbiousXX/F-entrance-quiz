import React from 'react';
import './MemberGrids.css';

// TODO GTB-工程实践: - 应该没有Grid这个维度，应该是List这个维度，所以就叫TraineeList更合适一些
class MemberGrids extends React.PureComponent {
  render() {
    return (
      <div>
          {/* // TODO GTB-工程实践: - css class的格式规范应该是a-b这种格式 */}
        <p className="MembersInfoTitle">学员列表</p>
        <button className="AddNewMemberButton" type="button">
          +添加学员
        </button>
      </div>
    );
  }
}

export default MemberGrids;
