import React from "react"

const CharacterIcon = ({iconClass}) => {
  return (
    <div className="char-info">
      <div className={"gle-icon char-portrait " + iconClass}/>
    </div>
  );
};

export default CharacterIcon;
