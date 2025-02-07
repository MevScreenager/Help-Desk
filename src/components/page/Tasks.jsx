import React from "react";
import Task from "../Task";

const Tasks = () => {
      const pr = {
            name: 'принтер не печатает ',
            comment: 'нет соединения и/или файл не проходит нет соединения и/или файл не проходит нет соединения и/или файл не проходит нет соединения и/или файл не проходит',
            dataF: '05-02-2025',
            timeF: '15:45',
            dataT: '08-02-2025',
            timeT: '18:00',
            dataS: '06-02-2025',
            timeS: '15:45',
            author: 'Анна Мария Анна Мария Анна Мария Анна Мария Анна Мария ',
            performer: 'Ilya',
            status: 'в работе',
      }

      return (
            <div className="tasks">
                  <Task {...pr}/>
            </div>
      )
}

export default Tasks