let get = (id) => {
  fetch(`http://localhost:3000/posts/${id?id:''}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })
}

let post = (data) => {
  fetch('http://localhost:3000/posts', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  
}

let remove = (id) => {
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE"
  })
}

let update = (id, data) =>{
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

// Sukurti CRUD aplikaciją laisva tema naudojant JSON-server.

//   Susikurti JSON failą su pradiniais duomenimis apie pasirinktą temą (filmus, aktorius, knygas, autorius, žaidimus, sportus, .........) ir su juo pasileisti JSON serverį.
  
//   Į ekraną išvesti visus duomenis.
//   Galimybė pridėti naują duomenį.
//   Galimybė redaguoti pasi rinktą duomenį.
//   Galimybė trinti pasirinktą duomenį.

//   Viską stilizuoti.

//   Galima tobulinti taip, kad pradžioje ekrane rodoma tik maža informacija apie duomenį. Kai ant jo paspaudžiauma nukeliama į naują puslapį arba atidaromas modalas, kur rodoma platesnė informacija apie elementą.
//   Galima tobulinti taip, kad būtų galimybė filtruoti duomenis pagal tam tikrą kriterijų.
//   Galima tobulinti taip, kad būtų galimybė kažkaip pažymėti duomenis, kad jie būtų atvaizduojami kitaip (peržiūrėtas filmas / perskaityta knyga / mėgstamas autorius/aktorius...).
//   Galima tobulinti taip, kad ID generuojamas pagal jūsų nurodytą komandą.
//   ++) Galima tobulinti, kad JSON faile būtų keletas susietų laukų. (pvz.: Knygos ir Autoriai)


// all books

let buttonShowAll = document.querySelector('.showAllButton');

//filer form

let buttonFilter = document.querySelector('#filterForm');

let inputFiler = document.querySelector('.filterInput');

let formFilter = document.querySelector('#filterForm');

let filterButton = document.querySelector('.filterButton');

//Instert form

let formInsert = document.querySelector('#InsertForm');

let inputInsertTitle = document.querySelector('#titleInput');

let inputAuthor = document.querySelector('#authorInput');

let inputDescription  = document.querySelector("#descriptionInput");

let inputImage = document.querySelector('#imageInput');

let inputRating = document.querySelector('#ratingInput');

let buttonSubmitBook = document.querySelector('#buttonSubmitBook');


//output

let outputSection = document.querySelector('#outputSection');


//class
class Card{
  constructor(props){
    this.props = props;
    return this.render()
  }
  render() {

    //sukuriam card div
    this.card = document.createElement('div');
    this.card.setAttribute('class', 'cardDiv');

    //visi korteles elementai pagal vartotojo ivestus duomenis

    this.bookTitle = document.createElement('p');
    this.bookTitle.setAttribute('class', 'bookTitle');
    this.bookTitle.innerText = 'Book title: ' + this.props.title        //title

    this.authorName = document.createElement('p');
    this.authorName.setAttribute('class', 'authorName');
    this.authorName.innerText = 'Authors name: ' + this.props.author           //author

    this.description = document.createElement('p');
    this.description.setAttribute('class', 'description');
    this.description.innerText = 'Book description: ' + this.props.description;      //description

    this.image = document.createElement('img');               
    this.image.setAttribute('class', 'image');
    this.image.src = this.props.image;                        //image
    this.image.alt = 'photo of presented book';

    this.rating = document.createElement ('p');
    this.rating.setAttribute('class', 'rating');
    this.rating.innerText = 'Uploader gave this book a rating: ' + this.props.rating + ' out of 5';      //rating  

    this.infoDiv = document.createElement('div');             // div for all info
    this.infoDiv.setAttribute('class', 'infoDiv');

    this.infoDiv.append(this.bookTitle, this.authorName, this.description, this.image, this.rating); //visa info keliama i info div


    //modal
    this.openModalButton = document.createElement('button');                // open modal button
    this.openModalButton.setAttribute('class', 'openModalButton');
    this.openModalButton.innerText = 'See all the comments about this book';

    
    //show modal event
    this.openModalButton.addEventListener('click', (e)=>{ 
    e.preventDefault();
    console.log(e);
    this.modal = document.createElement('dialog');
    this.modal.setAttribute('class', 'modal');
    document.querySelector('main').append(this.modal);
    this.modal.showModal()

    this.closeModalButtun = document.createElement('button');
    this.closeModalButtun.setAttribute('class', 'closeModalButtun');
    this.closeModalButtun.innerHTML = 'close';

    //close modal event
    this.closeModalButtun.addEventListener('click', (e) =>{
      e.preventDefault();
      this.modal.close();
    })


    //korteles comment form skiltis
    this.commentsDiv = document.createElement('div');         
    this.commentsDiv.setAttribute('class', 'commentsDiv'); //comment div

    this.commentSection = document.createElement('h1');
    this.commentSection.setAttribute('class', 'commentSection');
    this.commentSection.innerText = 'Comments about this book';      //comment prierasas

    this.commentsDiv.append()      //comment prierasas ir pats komentaras i komentaru div

    //comment forma, kad butu galimybe rasyti komentarus
    this.commentForm = document.createElement('form');
    this.commentForm.setAttribute('class', 'commentForm');           //comment forma


    this.commentNameLabel = document.createElement('label');
    this.commentNameLabel.setAttribute('class', 'commentNameLabel');
    this.commentNameLabel.innerText = 'Enter your name';             //commenter name label

    this.commentNameInput = document.createElement('input');
    this.commentNameInput.setAttribute('type', 'text');
    this.commentNameInput.setAttribute('class', 'commentNameInput');


    this.commentLabel = document.createElement('label');              
    this.commentLabel.setAttribute('class', 'commentFormLabel');
    this.commentLabel.innerText = 'Leave a comment and submit'       //comment label

    this.commentInput = document.createElement('input');
    this.commentInput.setAttribute('type', 'text');
    this.commentInput.setAttribute('class', 'commentInput');          //comment input

    this.leaveCommentButton = document.createElement('button');
    this.leaveCommentButton.setAttribute('class', 'leaveCommentButton');
    this.leaveCommentButton.innerText = 'Click to comment';           // submit comment button

    this.leaveCommentButton.addEventListener('click', (e) =>{
      e.preventDefault();
      this.comment = document.createElement('p');                             
      this.comment.setAttribute('class', 'comment');
      this.commentsDiv.append(this.comment);
      this.comment.innerText += this.commentNameInput.value + `: ` + this.commentInput.value, this.span;              //paliktas komentaras

    })
    this.commentForm.append(this.commentNameLabel, this.commentNameInput, this.commentLabel, this.commentInput, this.leaveCommentButton);
    this.modal.append(this.closeModalButtun,this.commentSection, this.commentsDiv, this.commentForm);

  })

    //change card
    this.changeButton = document.createElement('button');
    this.changeButton.setAttribute('class', 'changeButton');
    this.changeButton.innerText = 'change book info';


    this.changeTitle = document.createElement('input');
    this.changeTitle.setAttribute('class', 'changeTitle');

    this.changeAuthor = document.createElement('input');
    this.changeAuthor.setAttribute('class', 'changeAuthor');

    this.changeDescription = document.createElement('input');
    this.changeDescription.setAttribute('class', 'changeDescription');

    this.changeImage = document.createElement('input');
    this.changeImage.setAttribute('class', 'changeImage');

    this.changeDescription = document.createElement('input');
    this.changeDescription.setAttribute('class', 'changeDescription');

    this.changeRating = document.createElement('input');
    this.changeRating.setAttribute('class', 'changeRating');



    //change mygtuko funckionalumas
    let editMode = false
    this.changeButton.addEventListener('click', (e)=>{
      e.preventDefault();
      console.log(e)
      if(editMode == true){
        this.changeButton.style.background = ''
        this.changeButton.innerText = 'Change book info'

        this.bookTitle.innerText = this.changeTitle.value;
        this.infoDiv.replaceChild(this.bookTitle, this.changeTitle);

        this.authorName.innerText = this.changeAuthor.value;
        this.infoDiv.replaceChild(this.authorName, this.changeAuthor);

        this.description.innerText = this.changeDescription.value;
        this.infoDiv.replaceChild(this.description, this.changeDescription);
        
        this.image.src = this.changeImage.value;
        this.infoDiv.replaceChild(this.image, this.changeImage);
          
        this.rating.innerText = this.changeRating.value
        this.infoDiv.replaceChild(this.rating, this.changeRating);

        editMode = false;

      } else{
        this.changeButton.style.background = 'green';
        this.changeButton.innerText = 'Save changes'

        this.changeTitle.value =  this.bookTitle.innerText;
        this.infoDiv.replaceChild(this.changeTitle, this.bookTitle);

        this.changeAuthor.value = this.authorName.innerText;
        this.infoDiv.replaceChild(this.changeAuthor, this.authorName);

        this.changeDescription.value =  this.description.innerText;
        this.infoDiv.replaceChild(this.changeDescription, this.description);

        this.changeImage.value = this.image.src
        this.infoDiv.replaceChild(this.changeImage, this.image);

        this.changeRating.value = this.rating.innerText
        this.infoDiv.replaceChild(this.changeRating, this.rating);

        editMode = true;
      }
      this.changeButton.addEventListener('click', (e)=>{
        console.log(e);
        e.preventDefault()
        console.log(this.changeAuthor.value);
        update(this.props.id, {title: this.changeTitle.value, author: `${this.changeAuthor.value}`, description: `${this.changeDescription.value}`, image: `${this.image.src}`, rating: `${this.changeRating.value}` })
      })
    });


    //delete card
    this.removeButton = document.createElement('button');
    this.removeButton.setAttribute('class', 'removeButton');
    this.removeButton.innerText = 'Remove card';

    this.removeButton.addEventListener('click', (e) =>{
      outputSection.removeChild(this.card);
      remove(this.props.id);
    });

    this.card.append(this.infoDiv, this.openModalButton, this.changeButton, this.removeButton);

    return this.card
  }
}

//add a book card
formInsert.addEventListener('submit', (e)=>{
  e.preventDefault();
  let props = {
    title: inputInsertTitle.value,
    author: inputAuthor.value,
    description: inputDescription.value,
    image: inputImage.value,
    rating: inputRating.value
  }
  let card = new Card(props);
  postBook({title: `${inputInsertTitle.value}`, author: `${inputAuthor.value}`, description: `${inputDescription.value}`, image: `${inputImage.value}`, rating: `${inputRating.value}`})
  outputSection.append(card);
})

let postBook = (data) => {
  fetch('http://localhost:3000/posts', {
    method: "POST",
    redirect: "manual",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => console.log(res));
}


//show all book cards

buttonShowAll.addEventListener('click', (e) =>{
  e.preventDefault();
  getAll();
})

let getAll = () => {
 fetch(`http://localhost:3000/posts/`)
   .then(res => res.json())
   .then(data =>{
     console.log(data)
     data.forEach(props => {
      let card = new Card(props)
      outputSection.append(card);
    });
  })
}
