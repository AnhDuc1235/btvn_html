import React from "react";
import { TodoContext } from "../../TodoReducer";
import { use } from "react";

export default function TodoList() {
    const {
        state: {todoList},
        dispatch,
    } = use(TodoContext);
    const handleDelete = (id) => {
        dispatch({
            type: "todo/delete",
            payload: id
        })
    }
    const handleCompleted = (id) => {
        dispatch({
            type: "todo/completed",
            payload: id
        })
    }

  return (
    <div>
        <style>
            {
                `@scope {
                    .completed {
                        text-decoration: line-through;
                    }
                }`
            }
        </style>
      <ul>
        {todoList.map(({id, title, isCompleted}) => (
        <li key={id}>
          <input type="checkbox" onChange={() => handleCompleted(id)} />
          <span className={isCompleted ? "completed": ""}>{title}</span> <button onClick={() => handleDelete(id)}>&times;</button>
        </li>

        ))}

      </ul>
    </div>
  );
}
