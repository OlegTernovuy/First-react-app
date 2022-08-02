import React, {useEffect} from "react";
import TodoList from "./Todo/TodoList";
import Context from "./contex.js";
import Loader from "./Loader";
import Modal from "./Modal/Modal";
import './index.css'

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'To cook'},
    {id: 2, completed: false, title: 'Go to the gym'},
    {id: 3, completed: false, title: 'Walk with friends'}
  ])
  const [loading, setLoading] = React.useState(true)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //   .then(response => response.json())
  //   .then(todos => {
  //     setTimeout(() => {
  //       setTodos(todos)
  //       setLoading(false)
  //     }, 2000)
  //   })
  // }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed 
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([{
        title,
        id: Date.now(),
        completed: false
      }])
    )
  }

  return ( 
    <Context.Provider value={{removeTodo}}>
    <div class='Wrapper'>
      <h1 class ='title'>First React</h1>
      {/* <Modal /> */}
      <React.Suspense fallback={<p>Loading...</p>}>
        <AddTodo onCreate={addTodo} />
      </React.Suspense>
      
      {/* {loading && <Loader />} */}
      {todos.length ? (
        <TodoList todos = {todos} onToggle = {toggleTodo} />
       ) : loading ? null : (
       <p>No todo</p>
       )}
      
    </div>
  </Context.Provider>
  )
}

export default App;
