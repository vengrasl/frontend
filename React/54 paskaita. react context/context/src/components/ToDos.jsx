import ToDo from "./ToDo";

const ToDos = ({data, changeTaskState, deleteTask}) => {
  return (
    <>
      {data.map((todo, index) => 
        <ToDo
          key={todo.id}
          data={todo}
          index={index}
          changeTaskState={changeTaskState}
          deleteTask={deleteTask}
        /> 
      )}
    </>
  );
}
 
export default ToDos;