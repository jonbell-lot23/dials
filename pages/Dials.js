import React from "react";

function Default(props) {
  const onToggle = (e) => {
    props.onToggle(!props.nextActive);
  };

  return (
    <div
      className="bg-gray-200 p-3 rounded-md text-gray-500 font-bold mt-4"
      onClick={onToggle}
    >
      Decide to live
    </div>
  );
}

export function Song(props) {
  return (
    <div className={`w-32 h-32 p-2 rounded-lg ${props.color}`}>
      {props.text} {props.listOfMedia}
    </div>
  );
}

export function Step(props) {
  let color = props.display;
  if (props.highlighted?.includes(props.id)) {
    // props.display = "block";
  } else {
    // console.log(`${props.id} is not ${props.enable}`);
  }

  console.log(props.id, props.display);

  const highlightNext = (e) => {
    props.onHighlight(props.enable);
  };

  return (
    <div
      className={`w-32 h-32 p-2 rounded-lg ${props.color}`}
      onMouseDown={highlightNext}
      style={{ display: color }}
    >
      {props.text}
    </div>
  );
}

Step.defaultProps = {
  color: "bg-blue-300",
};

export default Default;
// <h3>Hello from {props.value}</h3>
