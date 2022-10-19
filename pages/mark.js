import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [visibleArray, setVisibleArray] = React.useState([0]);
  const [selectedArray, setSelectedArray] = React.useState([0]);

  const steps = [
    {
      id: 0,
      text: "Be born",
      enable: [1],
    },
    {
      id: 1,
      text: "Be born",
      enable: [2],
    },
    {
      id: 2,
      text: "Go to school",
      enable: [3],
    },
    {
      id: 3,
      text: "Graduate from college",
      enable: [4, 5],
    },
    {
      id: 4,
      text: "Make friends",
      enable: [6],
    },
    {
      id: 5,
      text: "Discover hobbies",
      enable: [7],
    },
  ];

  const enabledItems = new Set();
  for (let id of selectedArray) {
    const step = steps.find((currentStep) => currentStep.id === id);
    for (let nextStep of step.enable) {
      enabledItems.add(nextStep);
    }
  }
  console.log(enabledItems);

  const onChildToggle = (id) => {
    if (selectedArray.includes(id)) {
      // remove it
      setSelectedArray(selectedArray.filter((currentId) => currentId !== id));
    } else {
      // add it
      setSelectedArray([...selectedArray, id]);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dials Simple Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {steps.map((i) => (
        <Superbox
          id={i.id}
          text={i.text}
          enable={enabledItems}
          onChildToggle={onChildToggle}
        />
      ))}
    </div>
  );
}

export function Superbox(props) {
  const onToggle = (e) => {
    props.onChildToggle(props.id);
  };
  return (
    <div onMouseDown={onToggle}>
      {props.enable.has(props.id) ? (
        <div>
          {props.id} {props.text}
        </div>
      ) : null}
    </div>
  );
}
