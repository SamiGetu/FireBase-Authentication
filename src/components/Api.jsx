import { useEffect, useState } from "react";

export const Api = () => {
  const [todos, settodos] = useState([]);
  console.log("todos", todos);
  useEffect(() => {
    const getTodos = async () => {
      try {
        //   fetch("https://jsonplaceholder.typicode.com/todos")
        //     .then((response) => response.json())
        //     .then((json) => settodos(json));
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const json = await response.json();
        settodos(json);
      } catch (ex) {
        console.log(ex);
      }
    };
    getTodos();
  }, []);
  return (
    <>
      <div>
        {todos.map((todo, key) => (
          <div key={key}>
            <p>{todo.title}</p>
            <img src={todo.thumbnailUrl} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};
