// padaryti, kad ivedus duomenis sugeneruotu nauja task is klases + prideti sugeneruota info i local storage

// padaryti, kad ivedus papildomus duomenis, susgeneruotu nauja task is klases + prideti sugeneruota info i local storage

// padaryti, kad butu galimybe istrinti taska + istrinti informacija is local storage

// padaryti, kad butu galimybe pazymeti/atzymeti task, kaip atlikta

// padaryti, kad butu galimybe redaguoti task



class Task{                                          //kuriame klase
  constructor(taskText, isTheTaskCompleted){         //2 parametrai, kurie saugojami localStorage: 1 - vartotojo kurtas tekstas, 2 - ar ivykdytas task.      
    this.taskText = taskText;
    this.isTheTaskCompleted = isTheTaskCompleted;
    return this.render()
  }
  render() { //kuriam metoda, kuris sugeneruos elementus i (output)
  
    this.output = document.createElement('div') //sukursim div, kur bus laikomas visas ouput
    this.output.setAttribute("class", "output"); //sukuriame outputui klase "output"

    this.checkbox = document.createElement('input'); //sukursim checkbox(ar padaryta uzduotis)
    this.checkbox.type = 'checkbox' //inputo type bus checkbox
    this.checkbox.setAttribute("class", "check") //suteikiame checboxui class


    
    //task complete mygtuko funckionalumas
    this.checkbox.addEventListener('change', (e) =>{ //kai keiciasi checkbox, pridedame ivyki change
      if(this.checkbox.checked){ //checked zymi, kad pazymetas
        this.outputText.style.textDecoration = 'line-through'
      } else {
        this.outputText.style.textDecoration = ''
      }
    });



    this.outputText = document.createElement('p') //sukuriam output paragrafa
    this.outputText.setAttribute("class", "outputText") //output tekstui suteikiama class
    this.outputText.innerText = this.taskText //output paragrafas bus vartotojo ivestas task (1 class parametras)
    
    


    this.buttonDiv = document.createElement ('div'); //sukuriame div, kur bus laikomi mygtukai: 1 - koreguoti task, 2 - istrinti task
    this.buttonDiv.setAttribute("class", "buttonDiv");

    this.buttonChangeTask = document.createElement ('button'); //sukuriamas mygtukas, kuris suteiks galimybe keisti task teksta
    this.buttonChangeTask.innerText = "change";
    this.buttonChangeTask.setAttribute("class", "buttonChange");

    this.newTextArea = document.createElement('input'); // sukurtas input
    this.newTextArea.setAttribute('class', 'inputChange');  //jam suteikiama klase


    //change mygtuko funkcionalumas

    let editMode = false //susikuriam bool, kuris pasako, kad change yra isjungtas (false)

    this.buttonChangeTask.addEventListener('click', (e) =>{          //change mygtukui ivykis:
      if(editMode == true){                                          //jei change yra paspaustas
        this.buttonChangeTask.style.background = ''
        //this.outputText.innerText = this.newTextArea.value;          //tegul buves tekstas pasikeicia i nauja input
        this.output.replaceChild(this.outputText, this.newTextArea); //i input vieta ikeliamas updated textas
        editMode = false                                             //editmode isjungtas (false).
      } else{
        this.buttonChangeTask.style.background = 'green'
        this.newTextArea.value = this.outputText.innerText;     //naujo (uzd. keitimo input reiksme = outputText elemento inner teksto )
        this.output.replaceChild(this.newTextArea, this.outputText);    //i seno teksto vieta ikeliamas input !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild
        editMode = true
      }
    });
 
    this.buttonDeleteTask = document.createElement ('button'); //sukuriamas mygtukas, kuris suteiks galimybe istrinti task
    this.buttonDeleteTask.setAttribute("class", "buttonDelete");
    this.buttonDeleteTask.innerText = "delete";

    //delete mygtuko funkcionalumas
    this.buttonDeleteTask.addEventListener('click', (e) =>{  //paspaudimo metu fiksuojamas ivykis
        taskLists.removeChild(this.output); //remove visus panaikins, removeChild - visus
    })

    this.buttonDiv.append(this.buttonChangeTask, this.buttonDeleteTask); //i mygtuku div sukeliam abu mygtukus;

    this.output.append(this.checkbox,this.outputText, this.buttonDiv); //viska sudedam i output

    return this.output
  }
}


let sectionOne = document.getElementById("sectionOne");

let form = sectionOne.querySelector('form'); //selectinam forma, kurioje bus fiksuojamas submit eventas

let input = document.getElementById('input'); // selectinam input, kur vartotojas ives duomenis

let taskLists = document.getElementById('taskLists'); //outputui 






form.addEventListener('submit', (e) =>{
  console.log(e);
  e.preventDefault();
  let task = new Task(input.value); // sukurtas objektas. input.value yra vartotojo ivestas tekstas/uzduotis (1 clases parametras)
  input.value = ''
  taskLists.append(task); // visa sukurta task idedam i naujai sukurta sekcija
})




    // Save Data to Local Storage.          localStorage.setItem(key, value);
    // Read Data from Local Storage.        let lastname = localStorage.getItem(key);
    // Remove Data from Local Storage.      localStorage.removeItem(key);
    // Remove All (Clear Local Storage)     localStorage.clear();
  