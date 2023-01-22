import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
	border-radius: 1rem;
	padding: 0 2rem;
	margin-top: -2rem;
	margin-bottom: 1rem;
	width: 60%;
	justify-content: space-between;
	transition: all 0.2s ease;

	@media (max-width: 425px) {
		width: 80%;
	}
`;

export const Input = styled.input`
	margin: 10px 10px 10px 0;
	padding: 12px 15px;
	font-size: 15px;
	background: none;
	border: none;
	color: ${(props) => props.theme.color};
	flex-grow: 2;
	transition: all 0.2s ease;
`;

export const Styledul = styled.ul`
	width: 60%;
	background-color: ${(props) => props.theme.backgroundColor};
	border-radius: 0.5rem;
	padding: 1rem 2rem;
	margin-top: 0.05rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: space-between;
	font-size: 18px;
	transition: all 0.2s ease;
	box-shadow: 0px 7px 16px -10px rgba(0, 0, 0, 0.51);

	@media (max-width: 425px) {
		width: 80%;
		font-size: 14px;
	}
`;

export const Styledli = styled.li`
	list-style: none;
	color: ${(props) => props.theme.color};
	flex-grow: 2;
	transition: all 0.2s ease;
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.backgroundColor};
	border: none;
	color: ${(props) => props.theme.color};
	cursor: "pointer";
	transition: all 0.2s ease;
	cursor: pointer;
`;
