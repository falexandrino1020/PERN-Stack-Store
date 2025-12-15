import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {

  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  const getTodos = async () => {
     try {
        const res = await axios.get("http://localhost:3000/todos");
        setTodos(res.data);
        console.log(res.data);
     } catch (err) {
        console.error(err.message);
     }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/todos", {
        description, completed: false
      });
      setDescription("");
    } catch (err) {
      console.error(err.message);
    }
  }

  return( 
    <div className="min-h-screen bg-gray-800 flex justify-center items-center p-4">
      <div className="bg-gray-50 rounded-2xl shadow-xl w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">PERN Todo App</h1>
        <form 
        onSubmit={onSubmitForm}
        className="flex items-center gap-2 shadow-sm border p-2 rounded-lg mb-6">
          <input
            className="w-full outline-none px-3 py-2 text-gray-700 placeholder-gray-400 flex-1"
            type="text" placeholder="What needs to be done?" value={description} 
            onChange={(e) => setDescription(e.target.value)} required/>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer">
            Add Task</button>  
        </form>
        <div>
          /* add use case to map through todos, add use case if no todos */
        </div>
      </div>
    </div>
  );
}

export default App
