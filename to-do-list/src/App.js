import React from "react";
import { TodoList, TodoItem, TodoForm, TodoListFooter } from "./components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          text: "Купить хлеба",
          completed: true
        },
        {
          text: "Помыть окно",
          completed: false
        },
        {
          text: "Приготовить суп",
          completed: false
        },
        {
          text: "Позвонить доктору",
          completed: false
        },
        {
          text: "Отвезти автомобиль",
          completed: false
        }
      ],
      filter: "all"
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  addTodo(text) {
    this.setState({
      todos: [...this.state.todos, { text: text, completed: false }]
    });
  }

  toggleTodo(todo_idx) {
    this.setState({
      todos: this.state.todos.map((todo, idx) => {
        if (idx === todo_idx) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  removeTodo(todo_idx) {
    this.setState({
      todos: this.state.todos.filter((todo, idx) => idx !== todo_idx)
    });
  }
  
  removeAll(){
    this.setState({
      todos: []
    })
  }
  
  changeFilter(filter){
    if (this.state.filter === filter) return
    this.setState({
      filter
    })
  }

  render() {
    const {todos, filter} = this.state
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 className="text-center">todos</h1>
            <TodoList>
              {todos
                .map((todo, idx) => ({...todo, idx}))
                .filter(todo => {
                  if (filter === "all"){
                    return true
                  }
                  if (filter === "active"){
                    return todo.completed === false
                  }
                  if (filter === "completed"){
                    return todo.completed === true 
                  }
                })
                .map((todo, idx) => (
                <TodoItem
                  key={idx}
                  text={todo.text}
                  completed={todo.completed}
                  toggleTodo={() => this.toggleTodo(todo.idx)}
                  removeTodo={() => this.removeTodo(todo.idx)}
                />
              ))}
            </TodoList>
            <TodoListFooter filter={filter} changeFilter={this.changeFilter} removeAll={this.removeAll} />
            <hr/>
            <TodoForm addTodo={this.addTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App