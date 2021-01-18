import React from "react"

const Checkbox = ({option}) => {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" id={option.id} checked={option.value}></input>
      <span className="label-body">{option.key}</span>
    </label>
  );
};

const Checkboxes = ({options}) => {
  return (
    <div className="checkboxes">
      {options.map (option => {
        return <Checkbox option={option} key={option.id} />;
      })}
    </div>
  );
};

export default Checkboxes;
