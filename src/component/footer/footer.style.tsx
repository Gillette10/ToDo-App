import styled from "styled-components";

export const FooterDiv = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	width: 60%;
	border-radius: 1rem;
	height: 3.4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	margin-top: 1rem;
	transition: all 0.2s ease;

	@media (max-width: 425px) {
		width: 80%;
		font-size: 14px;
	}
`;

export const Footerh3 = styled.h3`
	color: ${(props) => props.theme.color};
	transition: all 0.2s ease;

	@media (max-width: 425px) {
		font-size: 14px;
	}
`;

export const FooterFlex = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: 425px) {
		font-size: 14px;
	}
`;
