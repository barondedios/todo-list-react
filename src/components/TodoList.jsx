import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo, theme }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          theme={theme}
        />
      ))}
    </ul>
  );
}