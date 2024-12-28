import {Task} from "../data/init-data";
import React from "react";

interface Props {
    task: Task;

    onClick: (task: Task) => void;
}

const TaskCard = ({task, onClick} : Props) => {
    const checkboxChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        onClick(task);
    };
    return <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.creationDate.toISOString()}</p>
        <p>{task.updateDate?.toISOString()}</p>
        <label>Splneno: </label>
        <input type="checkbox" name="myCheckbox" value="myCheckbox" checked={task.done} onChange={checkboxChangeHandle} />
    </div>;
} 
export default TaskCard;