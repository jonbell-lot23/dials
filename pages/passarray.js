import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [stepOne, setStepOne] = React.useState("selected");
  const [stepTwo, setStepTwo] = React.useState(false);
  const [stepThree, setStepThree] = React.useState(false);
  const [stepFour, setStepFour] = React.useState(false);
  const [stepFive, setStepFive] = React.useState(false);

  const [visibleArray, setVisibleArray] = React.useState([0]);

  const bigarray = [
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Dials Simple Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mt-8">
        {stepOne && <StepOne setStepOne={setStepOne} setStepTwo={setStepTwo} />}
        {stepTwo && (
          <StepTwo
            setStepTwo={setStepTwo}
            setStepThree={setStepThree}
            setStepFour={setStepFour}
          />
        )}
        {stepThree && (
          <StepThree setStepThree={setStepThree} setStepFour={setStepFour} />
        )}
        {stepFour && (
          <StepFour setStepFour={setStepFour} setStepFive={setStepFive} />
        )}
        {stepFive && <StepFive setStepFour={setStepFour} />}
      </div>
      <br />

      {bigarray.map((i) => (
        <Superbox
          visibleArray={visibleArray}
          setVisibleArray={setVisibleArray}
          id={i.id}
          text={i.text}
        />
      ))}
    </div>
  );
}

export function Superbox(props) {
  const onToggle = (e) => {
    // props.setVisibleArray([props.visibleArray].concat(props.id));
    props.setVisibleArray([...props.visibleArray, props.id]);
  };
  return (
    <div onMouseDown={onToggle}>
      // ID #{props.id} (Visible array is {props.visibleArray}){props.text}
      {props.visibleArray.includes(props.id) ? (
        <span>yes this id is in the array</span>
      ) : null}
    </div>
  );
}

export function StepOne(props) {
  const onToggle = (e) => {
    props.setStepOne("selected");
    props.setStepTwo("visible");
  };
  return (
    <div
      className="p-2 rounded-md bg-gray-200 inline cursor-pointer"
      onMouseDown={onToggle}
    >
      Be born?
    </div>
  );
}

export function StepTwo(props) {
  const onToggle = (e) => {
    props.setStepTwo("selected");
    props.setStepThree("visible");
    props.setStepFour("visible");
  };
  return (
    <div
      className="p-2 rounded-md bg-gray-200 inline cursor-pointer ml-2"
      onMouseDown={onToggle}
    >
      Go to school?
    </div>
  );
}

export function StepThree(props) {
  const onToggle = (e) => {
    props.setStepThree("selected");
    props.setStepFour("visible");
  };
  return (
    <div
      className="p-2 rounded-md bg-gray-200 inline cursor-pointer ml-2"
      onMouseDown={onToggle}
    >
      Graduate from college?
    </div>
  );
}

export function StepFour(props) {
  const onToggle = (e) => {
    props.setStepFour("selected");
  };
  return (
    <div
      className="p-2 rounded-md bg-gray-200 inline cursor-pointer ml-2"
      onMouseDown={onToggle}
    >
      Get a job? boooo
    </div>
  );
}

export function StepFive(props) {
  const onToggle = (e) => {
    props.setStepFive("selected");
  };

  return props.setStepFour == "selected" ? (
    <div
      className="p-2 rounded-md bg-gray-200 inline cursor-pointer ml-2"
      onMouseDown={onToggle}
    >
      This is step five
    </div>
  ) : (
    <p>no</p>
  );
}

export function Boop() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-indigo-600" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">
          Annual billing
        </span>
        <span className="text-sm text-gray-500">(Save 10%)</span>
      </Switch.Label>
    </Switch.Group>
  );
}
