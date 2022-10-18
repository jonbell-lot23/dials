import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [stepOne, setStepOne] = React.useState("selected");
  const [stepTwo, setStepTwo] = React.useState(false);
  const [stepThree, setStepThree] = React.useState(false);
  const [stepFour, setStepFour] = React.useState(false);
  const [stepFive, setStepFive] = React.useState(false);

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
      </div>
      <br />
    </div>
  );
}

export function StepOne(props) {
  const onToggle = (e) => {
    props.setStepOne("selected");
    props.setStepTwo("visible");
  };
  return (
    <div className="p-2 rounded-md bg-gray-200 inline" onMouseDown={onToggle}>
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
      className="p-2 rounded-md bg-gray-200 inline ml-2"
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
      className="p-2 rounded-md bg-gray-200 inline ml-2"
      onMouseDown={onToggle}
    >
      Graduate from college?
    </div>
  );
}

export function StepFour(props) {
  const onToggle = (e) => {
    props.setStepFour("selected");
    props.setStepFive("visible");
  };
  return (
    <div
      className="p-2 rounded-md bg-gray-200 inline ml-2"
      onMouseDown={onToggle}
    >
      Get a job?
    </div>
  );
}
