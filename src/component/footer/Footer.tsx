import { Todo } from "../../App";
import { FooterDiv, FooterFlex, Footerh3 } from "./footer.style";

interface Props {
	todos: Todo[];
	clearAll: () => void;
	// editTodo: (id: string, todos: string) => void;
}

const style = {
	background: "none",
	outline: "none",
	border: 0,
	cursor: "pointer",
};

const Footer = ({ todos, clearAll }: Props) => {
	return (
		<FooterDiv>
			<Footerh3>
				{todos.length} {todos.length === 1 ? "item" : "items"}
			</Footerh3>

			<button style={style} onClick={clearAll}>
				<Footerh3>Clear All</Footerh3>
			</button>
		</FooterDiv>
	);
};

export default Footer;
