import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./HOC/conditionalRendering/BaseTodoList";
import UserListWrapper from "./HOC/reusability/UserList";
import UserList from "./HOC/reusability/UserList";
import TimeTakenScreenWidth from "./HocScreenWidth";
import HocScreenWidth from "./HocScreenWidth";

import ShwetaWorkComponent from "./ShwetaWorkComponent";
const TODOS = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];
function App() {
  return (
    //<HocScreenWidth />
    <>
      {/* <ShwetaWorkComponent /> */}
      {/* <TodoList data={TODOS} loading={true} /> */}
      <UserListWrapper dataSource="https://jsonplaceholder.typicode.com/users" />
    </>
    // <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
  );
}
export default App;
