/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { listTasks } from "../Requests/resquests";

export function ListTasksView() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categoriesData = await listTasks();
				setTasks(categoriesData);
				console.log(categoriesData);
			} catch (error) {
				console.error("Error fetching tasks:", error);
			}
		};

		fetchCategories();
	}, []);

	return (
		<>
			{tasks.map((task) => (
				<div key={task.id}>
					{task.title}
					{task.dueDate}
				</div>
			))}
		</>
	);
}

export default ListTasksView;
