const ToDo = ({data, index, changeTaskState, deleteTask}) => {
  return (
    <>
      <div>
        <h1>Task {index+1}: {data.task}</h1>
        <p>Task {data.completed ? 'is completed' : 'needs to be done'}.</p>
        <button onClick={() => changeTaskState(data.id)}>
          {data.completed ? 'Incomplete' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(data.id)}>
          Delete this task
        </button>
      </div>
    </>
  );
}
 
export default ToDo;