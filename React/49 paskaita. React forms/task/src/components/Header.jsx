const Header = ({uncompletedTasks}) => {

  return ( 
    <header>
      <h1>To Do List</h1>
      <p>Tasks undone: <span>{uncompletedTasks}</span></p>
    </header>
    
   );
}
 
export default Header;