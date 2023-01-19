const Home = () => {
  //inline stilizavimas
  const niceTextStyle = {
    color: "red",
    fontSize: 56
  }

  return ( 
    <>
      <h1 style={niceTextStyle}>Home</h1>
      <p style={{textTransform: "uppercase", color: "green"}}>Welcome to my page!</p>
    </>
   );
}
 
export default Home;