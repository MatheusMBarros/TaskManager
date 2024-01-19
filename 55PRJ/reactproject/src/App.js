import ListCategoriesView from "./backend/view/listCategoriesView";
import ListTasksView from "./backend/view/listTasks";
import CreateTaskView from "./backend/view/createTaskView";
import "./app.css"
function App() {

  return (
<>
<CreateTaskView></CreateTaskView>
<ListCategoriesView></ListCategoriesView>
<ListTasksView></ListTasksView>
</>
  );
}

export default App;
