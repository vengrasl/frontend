import "./input.css";
import Button from "../button/Button";
const Input = (props) => {

  return ( 
    <>
     <label>
        {props.text}
     < input type={props.type} placeholder="enter text..." />
    </label>
    <Button />
    </>
   );
}
 
export default Input;