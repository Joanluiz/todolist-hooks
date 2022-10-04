import React from "react";
import * as S from "./TodoItemStyle";
import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";

export default function TodoItem(p) {
	return (
		<S.Item>
			<S.Input type="checkbox" name="task" id={`task-${p.id}`} />
			<S.Label htmlFor={`task-${p.id}`}>
				<span></span>
				<p>{p.name}</p>
			</S.Label>
			<S.BtnBox>
				<S.BtnItem onClick={p.toRemove}>
					<img src={del} alt="" />
				</S.BtnItem>
				<S.BtnItem onClick={p.toEdit}>
					<img src={edit} alt="" />
				</S.BtnItem>
			</S.BtnBox>
		</S.Item>
	);
}