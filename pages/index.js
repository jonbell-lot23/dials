import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "./Box.js";
import Dial from "./Dials.js";
import * as Dials from "./Dials.js";

export default function Home() {
  const steps = [
    {
      id: 0,
      display: "block",
      text: "Be born",
      color: "bg-gray-200",
      enable: [1],
    },
    {
      id: 1,
      display: "none",
      text: "Go to school",
      color: "bg-gray-200",
      enable: [2, 3],
    },
    {
      id: 2,
      display: "none",
      text: "Graduate from college",
      color: "bg-gray-200",
      enable: [3],
    },
    {
      id: 3,
      display: "none",
      text: "Make friends",
      color: "bg-gray-200",
      enable: [4],
    },
    {
      id: 4,
      display: "none",
      text: "Discover hobbies",
      color: "bg-gray-200",
      enable: [5],
    },
  ];

  const [highlighted, setHighlighted] = React.useState(undefined);
  const clearHighlight = () => setHighlighted(undefined);

  const onChildHighlightedChangedOrSomethingLikeThat = (newEnabled) => {
    // here is where we'd do some logic based on stuff
    setHighlighted(newEnabled);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="w-full flex flex-wrap mt-8 space-x-4">
          {steps.map((i) => (
            <Dials.Step
              id={i.id}
              text={i.text}
              display={i.display}
              color={i.color}
              enable={i.enable}
              onHighlight={onChildHighlightedChangedOrSomethingLikeThat}
              highlighted={highlighted}
              clearHighlight={clearHighlight}
            />
          ))}
        </div>
      </>

      <div></div>
    </div>
  );
}
