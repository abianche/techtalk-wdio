import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./App.css";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          variant="outline-success"
          onClick={() => markTodo(index)}
          disabled={todo.isDone}
          data-testid="project-set-done"
        >
          ✓
        </Button>{" "}
        <Button
          variant="outline-danger"
          onClick={() => removeTodo(index)}
          data-testid="project-remove"
        >
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit} className="text-center">
      <Form.Group>
        <Form.Label>
          <b>Add Project</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new project"
          data-testid="project-input-text"
        />
      </Form.Group>
      <Button variant="danger mb-3 mt-3 w-25" type="submit" disabled={!value}>
        START
      </Button>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Image processing",
      isDone: false,
      id: "1",
    },
    {
      text: "Database development",
      isDone: false,
      id: "2",
    },
    {
      text: "Mobile app development",
      isDone: false,
      id: "3",
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, id: todos.length + 1 }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Projects List</h1>
        <FormTodo addTodo={addTodo} />
        <div id="projects-list">
          {todos.map((todo, index) => (
            <Card key={`card-${todo.id}`}>
              <Card.Body>
                <Todo
                  key={`todo-${todo.id}`}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
