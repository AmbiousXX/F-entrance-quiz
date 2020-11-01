import React from 'react';
import './GroupGrids.css';

// TODO GTB-工程实践: - 应该没有Grid这个维度，应该是List这个维度，所以就叫GroupList更合适一些
class GroupGrids extends React.PureComponent {
  render() {
    return (
      <div>
        {/* // TODO GTB-工程实践: - css class的格式规范应该是a-b这种格式 */}
        <p className="GroupsInfoTitle">分组列表</p>
      </div>
    );
  }
}

export default GroupGrids;
