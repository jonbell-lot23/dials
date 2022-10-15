import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from "./Box.js";
import Dial from "./Dials.js";
import * as Dials from "./Dials.js";

export default function Home() {
  const songs = [
    {
      id: 0,
      text: "Grab a Seat",
      songURL: "http://sc.com",
      listOfMedia: ["one.png", "two.png", "three"],
    },
    {
      id: 1,
      text: "Pool Glare",
      songURL: "http://sc.com",
    },
    {
      id: 2,
      text: "Something's Up",
      songURL: "http://sc.com",
    },
    {
      id: 3,
      text: "Keys to the Armory",
      songURL: "http://sc.com",
    },
    {
      id: 4,
      text: "A Ritual Between Light and Dark",
      songURL: "http://sc.com",
    },
  ];

  const [selected, setSelected] = React.useState();
  const [highlighted, setHighlighted] = React.useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>Dials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="w-full flex flex-wrap mt-8 space-x-4">
          {songs.map((i) => (
            <Dials.Song
              id={i.id}
              text={i.text}
              color={i.color}
              enable={i.enable}
              listOfMedia={i.listOfMedia}
              onHighlight={setHighlighted}
            />
          ))}
        </div>
      </>

      <div></div>
    </div>
  );
}
