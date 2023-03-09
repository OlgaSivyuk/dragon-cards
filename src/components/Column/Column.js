import React from 'react'
import Task from '../Task/Task'
import './Column.scss'

function Column() {
  return (
    <>
        <div className="column">
          <header>Путь героя воглера</header>
          <h1>Название главы</h1>
          <ul className="task-list">
            <Task/>
            {/* <li className="task-item">second</li>
            <li className="task-item">third</li>
            <li className="task-item">third</li>
            <li className="task-item">second</li>
            <li className="task-item">third</li>
            <li className="task-item">third</li>
            <li className="task-item">second</li>
            <li className="task-item">third</li>
            <li className="task-item">third</li>
            <li className="task-item">second</li>
            <li className="task-item">third</li>
            <li className="task-item">third</li> */}
          </ul>
          <footer>Add another card</footer>
        </div>

    </>
  )
}

export default Column
