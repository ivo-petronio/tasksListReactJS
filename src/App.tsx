import { useState } from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function App() {

  const [tasks, setTasks] = useState([
    "To study ReactJS in the morning",
    "To work in the afternoon",
    "To study API's at night"
  ]);

  const [input, setInput] = useState("");
  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ''
  })

  function handleDelete (item: string) {
    let removeList = tasks.filter( task => task !== item)
    setTasks(removeList);
  }

  function handleEdit (item: string) {
    setInput(item);
    setEditTask({
      enabled: true,
      task: item
    })
  }

    
  function handleRegister() {
    if (!input) {
      alert("Insira uma tarefa antes de pressionar o botão REGISTRAR.")
    }

    if (editTask.enabled) {
      handleSaveEdit();
      return;
    }

    setTasks(tarefas => [...tarefas, input]);
    setInput("");
  }

  function handleSaveEdit() {
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    const allTasks = [...tasks];
    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEditTask({
      enabled: false,
      task: ''
    })

    setInput("");
  }
  
  return (
    <div className="tasksContainer">
      <h1> Tasks List </h1>
      <div className="inputContainer">
        <input
        className="inputTask"
        placeholder="Digite sua tarefa aqui..."
        value={input}
        onChange={ e => setInput(e.target.value)}
        />
        <button onClick={handleRegister}> {editTask.enabled? "Atualizar" : "Registrar"} </button>
      </div>
      <section>
      {tasks.map( (item, index) => (
        <div className="taskItem">
          <span key={item}> {item} </span>
          <button className="edit-btn" onClick={() => { handleEdit(item) }}> Editar </button>
          <button className="delete-btn" onClick={() => { handleDelete(item) }}> Excluir </button>
        </div>
      ))}
      </section>
    </div>
  )
}

export default App
