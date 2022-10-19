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
      enable: [2, 3, 4],
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
      enable: [2, 3, 4],
    },
    {
      id: 4,
      display: "none",
      text: "Discover hobbies",
      color: "bg-gray-200",
      enable: [5],
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Dials Simple Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {steps.map((i) => (
        <Superbox
          visibleArray={visibleArray}
          setVisibleArray={setVisibleArray}
          id={i.id}
          text={i.text}
          enable={i.enable}
        />
      ))}
    </div>
  );
}

export function Superbox(props) {
  const onToggle = (e) => {
    if (props.visibleArray?.includes(props.id)) {
      // remove it
      props.setVisibleArray(
        props.visibleArray.filter((v) => props.enable.includes(v))
      );
    } else {
      // add it
      props.setVisibleArray([...props.visibleArray, ...props.enable]);
    }
  };
  return (
    <div onMouseDown={onToggle}>
      {props.id} {props.text} {props.enable}
      {props.visibleArray.includes(props.id) ? <span>*</span> : null}
    </div>
  );
}
