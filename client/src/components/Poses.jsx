import React from 'react';
import Pose from './Pose.jsx';

const Poses = ({ poses, fetchData }) => {
  return(
    <div className="container">
      {poses.map(pose => (
      <Pose key={pose.id} pose={pose} fetchData={fetchData} />
      ))}
    </div>
  );
};

export default Poses;