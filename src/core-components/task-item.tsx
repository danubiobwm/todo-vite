import React from "react";

import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating,
  );

  const [taskTitle, setTaskTitle] = React.useState(task?.title || "");
  const{updateTask, updateTaskStatus, deleteTask} = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if(task?.state === TaskState.Creating) {
      deleteTask(task.id);
    }
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleUpdateTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    updateTaskStatus(task.id, checked);
  }

  function handleClickDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <Card size="md" >
      {!isEditing ? (
        <div className="flex items-center gap-2">
          <InputCheckbox
            checked={task.concluded}
            onChange={handleUpdateTaskStatus}
          />
          <Text className={cx("flex-1", { "line-through": task?.concluded })}>
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" type="button" onClick={handleClickDeleteTask}/>
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              type="button"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <>
          <form className="flex items-center gap-4" onSubmit={handleSaveTask}>
            <InputText
              className="flex-1"
              value={taskTitle}
              onChange={handleChangeTaskTitle}
              required
              autoFocus
            />
            <div className="flex gap-1">
              <ButtonIcon
                type="button"
                icon={XIcon}
                variant="secondary"
                onClick={handleExitEditTask}
              />
              <ButtonIcon icon={CheckIcon} variant="primary" type="submit" />
            </div>
          </form>
        </>
      )}
    </Card>
  );
}
