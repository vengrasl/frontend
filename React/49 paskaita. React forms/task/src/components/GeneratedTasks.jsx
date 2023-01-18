import { useState } from "react";

const GeneratedTasks = ({tasks, setTasks, uncompletedTasks, setUncompletedTasks}) => {

  
  //delete
  const handleDelete = (id) => { //kuriama funkcija su parametru id (taip atskirs kuri task yra kuri). Kvietimo metu (paspaudus delete button)
     const updatedTasks = tasks.filter((task) => task.id !== id); //kuriamas naujas kintamasis, kuris filtruoja per per visus tasks ir sukuria nauja array, be istrintos reiksmes. (randa pagal id)
     setTasks(updatedTasks); //iskviecia setTasks funkcija ir paupdatina visu tasku array jau be istrinto kintamojo. setTasks formos komponente svarbu perduoti i Generated task komponenta
     setUncompletedTasks(uncompletedTasks - 1); //oi delete, uncomplete task reiksme -1, nes nebera tasko
  }

  //mark task as complete
  const [completed, setCompleted] = useState(false); //stete kuris stebes at atlikta uzduotis

  const handleComplete = (id) => { //atliktos uzduoties handleris. ji iskvietus, pazymes uzduoti kaip atlikta. kaip parametras duodamas uzduoties id, kad butu zinoma kuri uzduotis atlikta
    setCompleted(!completed)
  } 


  return ( 
    <>
      {tasks.map((item) => { //map per tasks masyva ir ir i <p> istato ivestos uzduoties reiksme
        return (
        <div className="singleTaskDiv" key={item.id}>
          <p className={completed? "taskCompleted" : ""}>{item.task}</p> 
          <input onChange={() => handleComplete(item.id)} type="checkBox"/>
          <button onClick={() => handleDelete(item.id)}>Delete task</button>
        </div>  
        )
      })}
    </>
   );
}
 
export default GeneratedTasks;