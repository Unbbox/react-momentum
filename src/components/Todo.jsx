import { use, useEffect, useState } from "react";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState(() => {
    // 기존 localStorage에 저장된 todo 불러오기
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  // todo 추가
  const handleToDoSubmit = (e) => {
    e.preventDefault();

    const toDoInput = document.querySelector("#todo-form #todo");
    const todo = {
      id: Date.now(),
      text: toDoInput.value,
    };

    setTodos((prevState) => {
      return [...prevState, todo];
    });

    toDoInput.value = "";
  };

  // todo 추가 될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // todo 완료
  const handleToDoCheck = (e) => {
    const li = e.target.parentElement;
    li.classList.toggle("checked");
  };

  // todo 삭제
  const handleToDoDelete = (e) => {
    const li = e.target.parentElement;
    li.remove();
  };

  return (
    <div className="todo-container">
      <form id="todo-form" onSubmit={handleToDoSubmit}>
        <h2>What is your main focus for today?</h2>
        <input type="text" name="todo" id="todo" />
      </form>

      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <input type="checkbox" className="check" id="check-btn" onClick={handleToDoCheck} />
              <span>{todo.text}</span>
              <input type="button" className="delete" onClick={handleToDoDelete} value={"❌"} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
