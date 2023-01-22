import { GlobalStyle } from "./component/GlobalStyles";
import React, { useEffect } from "react";
import { Container } from "./component/Container";
import Header from "./component/header/Header";
import Section from "./component/section/Section";
import Footer from "./component/footer/Footer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DefaultTheme, ThemeProvider } from "styled-components";

export interface Todo {
	id: string;
	todo: string;
	completed: boolean;
}

const lightTheme: DefaultTheme = {
	color: "#3d3d3d",
	backgroundColor: "#F7F7F8",
	mainBackground: "hsl(0, 0%, 98%)",
};

const darkTheme: DefaultTheme = {
	backgroundColor: "#25273c",
	color: "white",
	mainBackground: "#181824",
};

export const ThemeContext = React.createContext({
	theme: "light",
	toggleTheme: () => {},
});

const deleteAllTodos = (
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
) => {
	setTodos([]);
};

function App() {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		const newId = uuidv4();
		if (inputValue.trim() === "") {
			return;
		}
		const newTodo = {
			id: newId,
			todo: inputValue,
			completed: false,
		};
		setTodos([...todos, newTodo]);
		setInputValue("");
		localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
		event.preventDefault();
	};

	const deleteTodo = (id: string) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	};

	const toggleTodo = (id: string) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			}),
		);
	};

	const clearAll = () => {
		deleteAllTodos(setTodos);
		localStorage.removeItem("todos");
	};

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<GlobalStyle />
				<Container>
					<Header />
					<Section
						handleSubmit={(event) => handleSubmit(event)}
						deleteTodo={deleteTodo}
						toggleTodo={toggleTodo}
						inputValue={inputValue}
						setInputValue={setInputValue}
						todos={todos}
					/>
					<Footer todos={todos} clearAll={clearAll} />
				</Container>
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}

export default App;
