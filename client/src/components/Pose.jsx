import React from 'react';
import axios from 'axios';

const Pose = ({ pose, fetchData }) => {
  const { id, selected, duration, picture } = pose;
  const changeSelection = (e) => {
    e.preventDefault();
    axios.put('/poses', {
      id: id,
      selected: selected ? false : true
    })
    .then(() => fetchData())
    .catch(err => console.error(err));
  }

  return (
    <div className="tile">
      <img src={picture} alt="yoga pose" />
      <button type="button" class="btn btn-secondary btn-sm" onClick={changeSelection} >{selected ? 'Remove' : 'Add'}</button>
    </div>
  );
};

export default Pose;