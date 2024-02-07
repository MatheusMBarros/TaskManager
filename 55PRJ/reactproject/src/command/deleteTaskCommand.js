import React from "react";
import CommandButton from "./commandButton";

// Command Pattern: DeleteTaskCommand
class DeleteTaskCommand {
  constructor(taskId, onDelete) {
    this.taskId = taskId;
    this.onDelete = onDelete;
  }

  execute() {
    this.onDelete(this.taskId);
  }
}

const DeleteTaskButton = ({ taskId, onDelete }) => {
  const handleDelete = () => {
    const deleteTaskCommand = new DeleteTaskCommand(taskId, onDelete);
    deleteTaskCommand.execute();
  };

  return <CommandButton onClick={handleDelete}>Delete Task</CommandButton>;
};

export default DeleteTaskButton;
