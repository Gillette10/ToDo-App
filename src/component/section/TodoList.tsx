import { BsCircle } from "react-icons/bs";
import { Button, Styledli, Styledul } from "./section.styles";
import { Todo } from "../../App";
import { MdDeleteSweep } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";

interface Props {
	tasks: Todo;
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	// editTodo: (id: string, todos: string) => void;
}
const TodoList = ({ tasks, deleteTodo, toggleTodo }: Props) => {
	return (
		<Styledul onClick={() => toggleTodo(tasks.id)}>
			{tasks.completed ? (
				<BsFillCircleFill color="grey" size={15} />
			) : (
				<BsCircle color="grey" size={15} />
			)}

			<Styledli
				style={{
					textDecoration: tasks.completed ? "line-through" : "none",
					// color: tasks.completed ? "grey" : "white",
				}}
			>
				{tasks.todo}
			</Styledli>
			<Button onClick={() => deleteTodo(tasks.id)}>
				<MdDeleteSweep size={24} />
			</Button>
		</Styledul>
	);
};

export default TodoList;

// <button
// 	style={{
// 		backgroundColor: "#25273c",
// 		border: "none",
// 		color: "#fff",
// 		cursor: "pointer",
// 	}}
// >
// 	<MdEditNote size={24} />
// </button>;
