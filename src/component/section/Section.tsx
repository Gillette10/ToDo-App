import React, { useState } from "react";
import { FormContainer, Input, Button } from "./section.styles";
import TodoList from "./TodoList";
import { BsCircle } from "react-icons/bs";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { Todo } from "../../App";

interface Props {
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
	todos: Todo[];
	// editTodo: (id: string, todos: string) => void;
}

const Section = ({
	handleSubmit,
	toggleTodo,
	deleteTodo,
	inputValue,
	setInputValue,
	todos,
}: Props) => {
	return (
		<>
			<FormContainer onSubmit={handleSubmit}>
				<BsCircle color="grey" size={15} />
				<Input
					type="text"
					placeholder="Create a new todo..."
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
				/>
				<Button>
					<MdOutlineLibraryAddCheck size={25} />
				</Button>
			</FormContainer>
			{todos.map((task: Todo) => {
				return (
					<TodoList
						key={task.id}
						tasks={task}
						deleteTodo={() => deleteTodo(task.id)}
						toggleTodo={() => toggleTodo(task.id)}
					/>
				);
			})}
		</>
	);
};

export default Section;
