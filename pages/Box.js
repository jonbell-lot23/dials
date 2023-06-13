import React from "react";
import randomColor from "randomcolor";

function Box(props) {
  let blueColor = randomColor({
    luminosity: "dark",
    hue: "blue",
    format: "hsla", // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
  });

  let redColor = randomColor({
    luminosity: "dark",
    hue: "red",
    format: "hsla", // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517522798)'
  });

  let [color] = React.useState(blueColor);

  if (props.id % props.selected == 0) {
    color = redColor;
  } else {
    color = "brown";
  }

  const findPeer = (e) => {
    props.onPeerSearch(props.id);
  };

  const clear = (e) => {
    props.onPeerSearch();
  };

  return (
    <div
      class="p-2 text-white rounded-xl mb-1 w-4 h-4 mr-1 inline cursor-pointer"
      style={{ backgroundColor: color }}
      onMouseOver={findPeer}
      onMouseOut={clear}
    ></div>
  );
}

export default Box;

// <h3>Hello from {props.value}</h3>
