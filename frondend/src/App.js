import './App.css';
import { Allroutes } from './Componet/Allroutes';

function App() {
  return (
    <div className="App">

     <Allroutes/>
     <h1>Intial commit</h1>
     <h2>Create New Repository</h2>
     <input palceholder="name of repository" type="text"></input>
     <select>
      <option></option>
     </select>
     <button>create</button>
     <input palceholder="add description" type="text"></input>
    </div>
  );
}

export default App;
