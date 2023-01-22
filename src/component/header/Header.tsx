import { ButtonToggle, HeaderWrapper, Title } from "./styles";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Header = () => {
	const toggle = useContext(ThemeContext);
	return (
		<HeaderWrapper>
			<Title>T O D O</Title>
			<ButtonToggle onClick={toggle.toggleTheme}>
				{toggle.theme === "dark" ? (
					<MdOutlineLightMode size={28} />
				) : (
					<MdDarkMode size={28} />
				)}
			</ButtonToggle>
		</HeaderWrapper>
	);
};

export default Header;
