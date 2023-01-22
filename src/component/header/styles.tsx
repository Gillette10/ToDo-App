import styled from "styled-components";

export const HeaderWrapper = styled.div`
	background: linear-gradient(
		90deg,
		rgba(255, 255, 0, 1) 0%,
		rgba(85, 60, 190, 0.79) 0%,
		rgba(84, 31, 145, 0.86) 50%,
		rgba(106, 39, 145, 0.84) 100%
	);
	padding-top: 5rem;
	padding-bottom: 5rem;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	height: 100%;
`;

export const Title = styled.h2`
	color: #fff;
`;

export const ButtonToggle = styled.button`
	background: linear-gradient(
		90deg,
		rgba(255, 255, 0, 1) 0%,
		rgba(85, 60, 190, 0.79) 0%,
		rgba(84, 31, 145, 0.86) 50%,
		rgba(106, 39, 145, 0.84) 100%
	);
	border: none;
	color: white;
	cursor: "pointer";
	border-radius: 10px;
	padding: 0.3rem;
`;
