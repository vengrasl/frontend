import moduleStyles from './button.module.css';

const Button = (props) => {
  return ( 
    <button className={moduleStyles.raudonasTekstas}>
      {props.text}
    </button>
   );
}
 
export default Button;