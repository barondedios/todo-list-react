import { useState } from "react";

export default function TodoInput({ addTodo, theme }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return alert("You must write something!");

    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`${theme}-input`}
        type="text"
        placeholder="Add a task."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={`todo-btn ${theme}-button`} type="submit">
        I Got This!
      </button>
    </form>
  );
}