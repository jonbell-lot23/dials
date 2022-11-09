import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Home() {
	const [visibleArray, setVisibleArray] = React.useState([0]);
	const [selectedArray, setSelectedArray] = React.useState([0]);

	const steps = [
		{
			id: 0,
			text: 'Be born',
			image: 'https://source.unsplash.com/random/500×500/?baby',
			enable: [1],
		},
		{
			id: 1,
			text: 'Be born!',
			image: 'https://source.unsplash.com/random/500×500/?baby',
			enable: [2],
		},
		{
			id: 2,
			text: 'Go to school',
			image: 'https://source.unsplash.com/random/500×500/?school',
			enable: [3],
		},
		{
			id: 3,
			text: 'Graduate college',
			image: 'https://source.unsplash.com/random/500×500/?graduation',
			enable: [4, 5],
		},
		{
			id: 4,
			text: 'Make friends',
			image: 'https://source.unsplash.com/random/500×500/?friends',
			enable: [6, 7, 8, 9],
		},
		{
			id: 6,
			text: 'Dmitri',
			image: 'https://source.unsplash.com/random/500×500/?man&id=1',
			enable: [],
		},
		{
			id: 7,
			text: 'David',
			image: 'https://source.unsplash.com/random/500×500/?man',
			enable: [],
		},
		{
			id: 8,
			text: 'Jess',
			image: 'https://source.unsplash.com/random/500×500/?woman&id=1',
			enable: [],
		},
		{
			id: 9,
			text: 'Megan',
			image: 'https://source.unsplash.com/random/500×500/?woman',
			enable: [],
		},

		{
			id: 5,
			text: 'Discover hobbies',
			image: 'https://source.unsplash.com/random/500×500/?hobbies',
			enable: [],
		},
	];

	const enabledItems = new Set();
	for (let id of selectedArray) {
		const step = steps.find(currentStep => currentStep.id === id);
		for (let nextStep of step.enable) {
			enabledItems.add(nextStep);
		}
	}
	console.log(enabledItems);

	const onChildToggle = id => {
		if (selectedArray.includes(id)) {
			// remove it
			setSelectedArray(selectedArray.filter(currentId => currentId !== id));
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

			<div className="flex flex-wrap space-x-2 space-x-1 mt-8">
				{steps.map(i => (
					<Superbox id={i.id} text={i.text} image={i.image} enable={enabledItems} onChildToggle={onChildToggle} />
				))}
			</div>
		</div>
	);
}

export function Superbox(props) {
	const onToggle = e => {
		props.onChildToggle(props.id);
	};

	return (
		<div onMouseDown={onToggle}>
			{props.enable.has(props.id) ? (
				<div
					className="bg-gray-800 w-48 h-48 mb-2 flex inline rounded-md"
					style={{
						backgroundImage: 'url(' + props.image + ')',
						backgroundSize: 'cover',
						color: '#f5f5f5',
					}}
				>
					<div className="font-extrabold text-black p-2 bg-white inline h-10 rounded-lg m-2 opacity-90">{props.text}</div>
				</div>
			) : null}
		</div>
	);
}
