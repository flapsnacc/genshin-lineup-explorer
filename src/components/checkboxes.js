import React from "react"

const Checkbox = ({option, category, checkboxHandler}) => {
  console.debug(option, category);
  let cName = `filter-toggle ${option.key}`;
  if (option.value) {
    cName += ' on';
  } else {
    cName += ' off';
  }

  return (
    <div className={cName} onClick={e => checkboxHandler(category, option.id, !option.value)}>
      <div className="toggle-inner"></div>
    </div>
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
