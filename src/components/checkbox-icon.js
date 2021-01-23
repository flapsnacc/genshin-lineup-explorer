import React from "react"

const CheckboxIcon = ({iconClass, toggleHandler}) => {
  return (
    <div className={"gle-icon checkbox-icon " + iconClass} onClick={toggleHandler}>
      <span className="inner-icon"></span>
    </div>
  );
};

export default CheckboxIcon;
