import React from "react"

import CheckboxIcon from './checkbox-icon';

const Checkbox = ({option, category, checkboxHandler}) => {
  const status = option.value ? 'on' : 'off';
  const cName = `${option.key} ${status}`;
  return (
    <CheckboxIcon iconClass={cName} toggleHandler={e => checkboxHandler(category, option.id, !option.value)} />
  );
};

const Checkboxes = ({options, category, checkboxHandler}) => {
  return (
    <div className="checkboxes">
      {options.map (option => {
        return <Checkbox key={`${option.id}-${option.key}`} option={option} category={category} checkboxHandler={checkboxHandler}/>;
      })}
    </div>
  );
};

export default Checkboxes;
