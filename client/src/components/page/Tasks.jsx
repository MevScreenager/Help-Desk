import React from "react";
import Task from "../Task";
import { tasksList } from "../../units/tasksList";

const Tasks = () => {

      const addTask = () => {
            
      }

      return (
            <div className="tasks">
                  <div className="tasks__task">
                        {tasksList.map((task) => 
                              <Task {...task}/>
                        )}
                  </div>
                  <div className="tasks__menu">
                        <button className="tasks__menu-add-task"
                              onClick={() => addTask()}
                        >
                              Add Task
                        </button>

                  </div>
            </div>
      )
}

export default Tasks