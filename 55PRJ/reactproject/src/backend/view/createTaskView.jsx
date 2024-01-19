import React, { useState } from "react";
import { createTask } from "../Requests/resquests";

function CreateTaskView() {
	const [taskData, setTaskData] = useState({
		title: "",
		dueDate: "",
		description: "",
		category: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setTaskData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Chame a função createTask e passe os dados da tarefa
			await createTask(taskData);

			// Limpe os dados do formulário ou faça qualquer ação adicional necessária
			setTaskData({
				title: "",
				dueDate: "",
				description: "",
				category: "",
			});

			console.log("Task created:", taskData);
		} catch (error) {
			console.error("Error creating task:", error.message);
			// Lide com erros, se necessário
		}
	};

	return (
		<div>
			<h2>Create Task</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type="text"
						name="title"
						value={taskData.title}
						onChange={handleInputChange}
					/>
				</label>
				<br />

				<label>
					Due Date:
					<input
						type="date"
						name="dueDate"
						value={taskData.dueDate}
						onChange={handleInputChange}
					/>
				</label>
				<br />

				<label>
					Description:
					<textarea
						name="description"
						value={taskData.description}
						onChange={handleInputChange}
					/>
				</label>
				<br />

				<label>
					Category:
					<input
						type="text"
						name="category"
						value={taskData.category}
						onChange={handleInputChange}
					/>
				</label>
				<br />

				<button type="submit">Create Task</button>
			</form>
		</div>
	);
}

export default CreateTaskView;
