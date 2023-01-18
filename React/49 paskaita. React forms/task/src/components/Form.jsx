import GeneratedTasks from "./GeneratedTasks";
import { nanoid } from 'nanoid'

const Form = ({singleTask, setSingleTask, tasks, setTasks, uncompletedTasks, setUncompletedTasks}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {   //kuriam kintamaji, kaip objekta, kuris is esmes zymi, kad i jo reiksme bus istatoma singleTask reiksme is vartotojo ivesties ir unikalu id, kuris leis reactui atskirti naujai sugeneruotas uzduotis
      task: singleTask,
      id: nanoid()
    }
    setTasks([...tasks, newTask]); //formos submito metu i tasks masyva ikeliama nauja reiksme, kuria iveda vartotojas
    setSingleTask(''); //po formos submit, isvalo input fields
    setUncompletedTasks(uncompletedTasks + 1); // po formos submit, prie uncompletedTasks pridedama 1 (nes siuo metu ji uncomplete)
  }

  return (
    <>
    <div className="formDiv">
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input
        placeholder="Enter a task.." 
        type="text" 
        value={singleTask} required
        onChange={(e) => setSingleTask(e.target.value)} />
      </label>
      <input type="submit" value="Add a task" />
    </form>
    </div>

    <div className="taskList">
      <GeneratedTasks
      tasks={tasks}
      setTasks={setTasks}
      uncompletedTasks={uncompletedTasks}
      setUncompletedTasks={setUncompletedTasks}
      />
    </div>
    </>
  )
}

export default Form;