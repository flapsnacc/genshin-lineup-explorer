import React from "react"

const Checkbox = ({option, checkboxHandler}) => {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" id={option.id} checked={option.value} onChange={e => checkboxHandler(option.id, !option.value)}></input>
      <span className="label-body">{option.key}</span>
    </label>
  );
};

const Checkboxes = ({options, checkboxHandler}) => {
  return (
    <div className="checkboxes">
      {options.map (option => {
        return <Checkbox option={option} key={option.id} checkboxHandler={checkboxHandler}/>;
      })}
    </div>
  );
};

export default Checkboxes;
