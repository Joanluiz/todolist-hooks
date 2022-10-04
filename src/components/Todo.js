import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyles";
import TodoItem from "./TodoItem";
import * as S from "./TodoStyle";

export default function Todo() {
	const [taskName, setTaskName] = useState();
	const [tasklist, setTasklist] = useState([]);

	const add = () => {
		if (taskName !== "") {
			const task = {
				name: taskName,
				id: Date.now(),
			};
			setTasklist((prevState) => [...prevState, task]);
			setTaskName("");
		}
	};

	const remove = (id) => {
		const filteredList = tasklist.filter((i) => i.id !== id);
		setTasklist(filteredList);
	};

	const edit = (id, name) => {
		const filteredList = tasklist.filter((i) => i.id !== id);
		setTasklist(filteredList);
		setTaskName(name);
		document.querySelector("#entry").focus();
	};

	useEffect(() => {
		const btn = document.querySelector("#btnClear");
		if (tasklist.length > 0) {
			btn.style.display = "block";
		} else {
			btn.style.display = "none";
		}
	}, [tasklist]);

	return (
		<S.Container>
			<GlobalStyle />
			<S.Title>Organize your priorities</S.Title>
			<S.FormBox
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<S.Input
					id="entry"
					type="text"
					value={taskName}
					onChange={(e) => {
						setTaskName(e.target.value);
					}}
				/>
				<S.BtnAdd
					onClick={() => {
						add();
					}}
				>
					+
				</S.BtnAdd>
			</S.FormBox>
			<S.Items>
				{tasklist.map((i) => (
					<TodoItem
						key={i.id}
						name={i.name}
						id={i.id}
						toRemove={() => remove(i.id)}
						toEdit={() => edit(i.id, i.name)}
					/>
				))}
			</S.Items>
			<S.BtnClear
				id="btnClear"
				onClick={() => {
					setTasklist([]);
					setTaskName("");
				}}
			>
				Clear
			</S.BtnClear>
		</S.Container>
	);
}