import React from "react"

const FeatureIcon = ({iconClass}) => {
  return (
    <div className={"gle-icon feature-icon " + iconClass}>
      <span className="inner-icon"></span>
    </div>
  );
};

export default FeatureIcon;
