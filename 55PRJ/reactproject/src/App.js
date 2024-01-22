import {ListTasksView} from "./backend/view/listTasks";
import CreateTaskView from "./backend/view/createTaskView";
import "./app.css"
import CreateTaskCopyView from "./backend/view/createTaskprototype";
function App() {

  return (
<>
<CreateTaskView></CreateTaskView>
<ListTasksView></ListTasksView>
<CreateTaskCopyView></CreateTaskCopyView>
</>
  );
}

export default App;
