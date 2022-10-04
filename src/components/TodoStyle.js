import styled from "styled-components";
import { Btn } from "./GlobalStyles";

export const Container = styled.div`
	width: 85%;
	margin: 15% auto 0;
	background: #E0E2E8;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2.5rem 1rem 1rem;
	border-radius: 20px 20px;
	box-shadow: 6px 6px 5px 3px #0000003b;
	@media (min-width: 450px) {
		width: 70%;
		max-width: 500px;
		padding: 2.5rem 1.5rem 1rem;
	}
	@media (min-width: 600px) {
		padding: 2.5rem 2rem 1rem;
	}
`;

export const Title = styled.h1`
	width: 100%;
	padding: 1.2rem 0;
	font-family: var(--ff-title);
	@media (min-width: 600px) {
		text-align: center;
		width: 100%;
	}
`;

export const FormBox = styled.form`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (min-width: 600px) {
		justify-content: center;
		width: 100%;
	}
`;

export const Input = styled.input`
	height: 2rem;
	width: 80%;
	padding: 0 2%;
	border: 2px solid var(--nude50);
	background-color: white;
	box-shadow: 2px 2px 5px 1px var(--nude50);
	border-radius: 10px;
	font-size: var(--fs-ordinary);
	&:focus {
		outline: none !important;
		border-bottom: 3px solid var(--orange700);
	}
	@media (min-width: 600px) {
		width: 80%;
	}
`;

export const Items = styled.div`
	width: 100%;
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BtnAdd = styled(Btn)`
	padding: 0 0.8rem;
	font-size: 1.8rem;
`;

export const BtnClear = styled(Btn)`
	display: none;
	padding: 0.2rem;
	font-size: 1.2rem;
	font-weight: normal;
	color: var(--orange700);
`;