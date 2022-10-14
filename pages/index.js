import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "./Box.js";
import Dial from "./Dials.js";
import * as Dials from "./Dials.js";

export default function Home() {
  const bigarray = [];
  for (let step = 1; step < 80; step++) {
    bigarray.push({ step });
  }

  const steps = [
    {
      id: 0,
      text: "Be born",
      color: "bg-red-300",
      enable: 1,
    },
    {
      id: 1,
      text: "Go to school",
      color: "bg-blue-400",
      enable: 2,
    },
    {
      id: 2,
      text: "Graduate from college",
      color: "bg-blue-400",
      enable: 3,
    },
    {
      id: 3,
      text: "Make friends",
      color: "bg-green-300",
      enable: 4,
    },
    {
      id: 4,
      text: "Discover hobbies",
      color: "bg-blue-400",
      enable: 5,
    },
  ];

  const [selected, setSelected] = React.useState();
  const [highlighted, setHighlighted] = React.useState();
  const [firstStep, setFirstStep] = React.useState();
  const [secondStep, setSecondStep] = React.useState();
  const [thirdStep, setThirdStep] = React.useState();

  function boop(e) {
    console.log(e);
  }

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
              color={i.color}
              enable={i.enable}
              onHighlight={setHighlighted}
            />
          ))}
        </div>
      </>
      <div className="w-full flex flex-wrap mt-8">
        {bigarray.map((i) => (
          <Box id={i.step} onPeerSearch={setSelected} selected={selected} />
        ))}
      </div>
      <div></div>
    </div>
  );
}
