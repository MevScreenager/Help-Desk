import React from "react";
import Task from "../Task";
import { tasksList } from "../../units/tasksList";

const Tasks = () => {

      return (
            <div className="tasks">
                  {tasksList.map((task) => 
                        <Task {...task}/>
                  )}
            </div>
      )
}

export default Tasks