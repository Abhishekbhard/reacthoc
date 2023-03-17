import React from "react";
import withTodoList from "./withTodoList";

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
const TodoList = withTodoList(BaseTodoList);
export default TodoList;
const TodoItem = ({ item }) => {
  return (
    <li>
      {item.task}
      {item.completed}
    </li>
  );
};
