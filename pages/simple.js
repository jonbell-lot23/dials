import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [stepOne, setStepOne] = React.useState(true);
  const [stepTwo, setStepTwo] = React.useState(false);
  const [stepThree, setStepThree] = React.useState(false);

  const onToggle = (e) => {
    console.log("add #2");
    setStepTwo(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dials Simple Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mt-8">
        {stepOne && <StepOne setStepTwo={setStepTwo} />}
        {stepTwo && <StepTwo />}
        <StepThree StepTwo={stepTwo} StepOne={stepOne} />
      </div>
      <br />
      <div className="bg-blue-50 mt-4 inline p-3" onMouseDown={onToggle}>
        Add #2
      </div>
    </div>
  );
}

export function StepOne(props) {
  const onToggle = (e) => {
    props.setStepTwo(true);
  };
  return (
    <div className="p-2 rounded-md bg-gray-200 inline" onMouseDown={onToggle}>
      StepOne
    </div>
  );
}

export function StepTwo(props) {
  return <div className="p-2 rounded-md bg-gray-200 inline ml-2">StepTwo</div>;
}
export function StepThree(props) {
  return props.StepTwo && props.StepOne ? (
    <div className="p-2 rounded-md bg-gray-200 inline ml-2">StepThree</div>
  ) : null;
}
