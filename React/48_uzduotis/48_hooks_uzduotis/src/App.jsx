import Card from "./components/Card";
import './App.css';
import NavBar from "./components/NavBar";
import { useState } from "react";
import SignIn from "./components/SignIn";
import CreateCard from "./components/CreateCard";
import {nanoid} from 'nanoid'

const App = () => {
  
  const [cards, setCards] = useState([
    {
      cardImage: "https://cdn.firstcry.com/education/2022/07/21191615/essay-on-banyan-tree-10-lines-short-and-long-essay-for-kids.jpg",
      cardImageAlt: "banyan-tree-image",
      cardName: "Banyan tree",
      cardDescription: "A banyan, also spelled banian, is a fig that develops accessory trunks from adventitious prop roots, allowing the tree to spread outwards indefinitely. This distinguishes banyans from other trees with a strangler habit that begin life as an epiphyte, i.e. a plant that grows on another plant, when its seed germinates in a crack or crevice of a host tree or edifice.",
      treeAddedToList: false,
      id: nanoid()

    },{
      cardImage: "https://images.freeimages.com/images/large-previews/6b8/neem-tree-1639620.jpg",
      cardImageAlt: "neem-tree-image",
      cardName: "Neem Tree",
      cardDescription: "Neem is a tree in the mahogany family Meliaceae. It is one of two species in the genus Azadirachta, and is native to the Indian subcontinent. It is typically grown in tropical and semi-tropical regions. Neem trees also grow on islands in southern Iran. Its fruits and seeds are the source of neem oil.",
      treeAddedToList: false,
      id: nanoid()
    },{
      cardImage: "https://cdn.britannica.com/92/142292-004-459092B7.jpg",
      cardImageAlt: "oak-tree-image",
      cardName: "Oak tree",
      cardDescription: "An oak is a tree or shrub in the genus Quercus. Latin oak tree) of the beech family, Fagaceae. There are approximately 500 extant species of oaks. The common name also appears in the names of species in related genera, notably Lithocarpus (stone oaks).",
      treeAddedToList: false,
      id: nanoid()
    },{
      cardImage: "https://us.123rf.com/450wm/buddysou/buddysou1807/buddysou180700004/buddysou180700004.jpg?ver=6",
      cardImageAlt: "peepal-tree-image",
      cardName: "Peepal Tree",
      cardDescription: "he sacred fig is considered to have a religious significance in three major religions that originated on the Indian subcontinent, Hinduism, Buddhism and Jainism. Hindu and Jain ascetics consider the species to be sacred and often meditate under it. This is the tree species under which Gautama Buddha is believed to have attained enlightenment.",
      treeAddedToList: false,
      id: nanoid()
    },{
      cardImage: "https://images.unsplash.com/photo-1628945975014-63bf1017ae01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBpbmUlMjBmb3Jlc3R8ZW58MHx8MHx8&w=1000&q=80",
      cardImageAlt: "eglute-skarota-eglute-zalia-image",
      cardName: "Pine tree",
      cardDescription: "A pine is any conifer tree or shrub in the genus Pinus  of the family Pinaceae. Pinus is the sole genus in the subfamily Pinoideae. The World Flora Online created by the Royal Botanic Gardens, Kew and Missouri Botanical Garden accepts 187 species names of pines as current, together with more synonyms.",
      treeAddedToList: false,
      id: nanoid()
    },{
      cardImage: "https://media.istockphoto.com/id/1053171170/photo/rosewood-or-tipuana-tipu.jpg?s=612x612&w=0&k=20&c=BU3LO54LNVdfiCti8_7NAwVskORLnOJom5fVPnwtFvk=",
      cardImageAlt: "resewood-tree-image",
      cardName: "Rosewood tree",
      cardDescription: "Genuine rosewoods belong to the genus Dalbergia. The pre-eminent rosewood appreciated in the Western world is the wood of Dalbergia nigra. It is best known as Brazilian rosewood, but also as Bahia rosewood. This wood has a strong, sweet smell, which persists for many years, explaining the name rosewood.",
      treeAddedToList: false,
      id: nanoid()
    },{
      cardImage: "https://thumbs.dreamstime.com/b/old-sandalwood-tree-upward-view-upward-view-old-sandalwood-tree-summer-ancient-tree-song-dynasty-donglin-temple-china-223559440.jpg",
      cardImageAlt: "sandal-tree-image",
      cardName: "Sandal Tree",
      cardDescription: "Sandalwood is a class of woods from trees in the genus Santalum. The woods are heavy, yellow, and fine-grained, and, unlike many other aromatic woods, they retain their fragrance for decades. Sandalwood oil is extracted from the woods for use. Sandalwood is often cited as one of the most expensive woods in the world.",
      treeAddedToList: false,
      id: nanoid()
    }
  ]) 


  const [markedCount, setMarkedCount] = useState(0)

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const addACard = (newCard) => {
    setCards([...cards, newCard])
    // let naujiDuomenys = cards;
    // naujiDuomenys.push(newCard);
    // setCards(naujiDuomenys);
  }

  function updateMarkedTreesCount(checked){
    if (checked) {
      setMarkedCount(markedCount - 1);
    } else {
      setMarkedCount(markedCount + 1);
    }
  }

  return (
  <>
    <header>
      <img className="headerLogo" src="https://t4.ftcdn.net/jpg/01/02/70/95/360_F_102709542_qfZW0DMaRITMLVEgQJTuGbLpoUdQLBg1.jpg" alt="logo" />
      {
        isUserLoggedIn?
        <NavBar markedCount={markedCount} atsijungti={setIsUserLoggedIn}/> : <SignIn prisijungti={setIsUserLoggedIn}/>
      }
    </header>
    
      <CreateCard addACard={addACard} />

      {
      cards.map((item) => 
        <Card
          data={item}
          key={item.id}
          image={item.cardImage}
          imageAlt={item.cardImageAlt}
          title={item.cardName}
          cardDescription={item.cardDescription}
          updateMarkedTreesCount={updateMarkedTreesCount}
        />
        )
      }

  </>
  );
}

export default App;
