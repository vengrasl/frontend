import { useState } from "react";
import { useEffect } from "react";

const SmallText = (props) => {
  const [newCount, setNewCount] = useState(100); 

  useEffect(() => {
    console.log('mount small'); //ne return dalyje
    return () => {
      console.log('umount small') //return dalyje. Paspaudimo metu rodys kada bus ikeliamas i ekrana, ir kada iskeliamas
    }
  }, [])


  return (
    <>
    <small>{props.text}</small>
    <br />
    <br />
    <button 
    onClick={() => {props.setClickCount(props.clickCount + 1)}}>
    Paspaudei {props.clickCount} kartu
    </button>
    <button
      onClick={()=>{setNewCount(newCount+1)}}
    >
      Šio komponento counteris: {newCount}
    </button>
    
    </>
   );
}
 
export default SmallText;