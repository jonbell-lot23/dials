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
      Decide to live?
    </div>
  );
}

export function SecondStep(props) {
  const onToggle = (e) => {
    props.onToggle(!props.nextActive);
  };

  return props.active ? (
    <div
      className="bg-blue-500 p-3 rounded-md text-white font-bold mt-4"
      onClick={onToggle}
    >
      Go to school?
    </div>
  ) : null;
}

export function Step(props) {
  if (props.id == props.enable) {
    // let color = "black";
  } else {
    // let color = "red";
    console.log(`${props.id} is not ${props.enable}`);
  }

  const highlightNext = (e) => {
    props.onHighlight(props.enable);
    console.log(props.enable);
  };

  return (
    <div
      className={`w-32 h-32 p-2 rounded-lg ${props.color}`}
      onMouseOver={highlightNext}
      // style={{ backgroundColor: color }}
    >
      {props.text} ({props.id} -- enable {props.enable})
    </div>
  );
}

Step.defaultProps = {
  color: "bg-blue-300",
};

export default Default;
// <h3>Hello from {props.value}</h3>
