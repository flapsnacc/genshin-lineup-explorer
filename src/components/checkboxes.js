import React from "react"

const Checkbox = ({option, category, checkboxHandler}) => {
  return (
    <label className="filter-checkbox">
      <input type="checkbox" id={option.id} checked={option.value} onChange={e => checkboxHandler(category, option.id, !option.value)}></input>
      <span className="label-body">{option.key}</span>
    </label>
  );
};

const Checkboxes = ({options, category, checkboxHandler}) => {
  return (
    <div className="checkboxes">
      {options.map (option => {
        return <Checkbox key={option.id} option={option} category={category} checkboxHandler={checkboxHandler}/>;
      })}
    </div>
  );
};

export default Checkboxes;
