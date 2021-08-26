import React from 'react';
import axios from 'axios';

const Pose = ({ pose, fetchData }) => {
  const { id, selection, duration, picture } = pose;
  return (
    <div className="tile">
      <img src={picture} alt="yoga pose" />
    </div>
  );
};

export default Pose;