import "./App.css";
import logo from "./images/logo.png"
import headerImage from './images/header-image.png'

const App = () => {
  return (
  <>
    <header>
      <img src={logo} alt="logo-img" className="logo"/>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <img src={headerImage} alt="header-img" className="headerImg"/>
    <section id="firstSection">
      <div className="about">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis qui cumque cupiditate? Delectus quaerat sequi tempore incidunt corporis ducimus eveniet perspiciatis error. Aspernatur non explicabo porro? Iusto, aperiam asperiores.</p>
      </div>
      <div className="company">
        <h1>Company</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis qui cumque cupiditate? Delectus quaerat sequi tempore incidunt corporis ducimus eveniet perspiciatis error. Aspernatur non explicabo porro? Iusto, aperiam asperiores.</p>
      </div>
      <div className="services">
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis qui cumque cupiditate? Delectus quaerat sequi tempore incidunt corporis ducimus eveniet perspiciatis error. Aspernatur non explicabo porro? Iusto, aperiam asperiores.</p>
      </div>
    </section>
    <section id="secondSection">
      <div className="content">
        <h1>Content</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo cumque laboriosam, qui nostrum ex iure doloribus amet quod nam officiis porro earum non obcaecati debitis consequatur enim necessitatibus iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae quibusdam at earum ipsa aut quis natus, facere error doloribus sed iure quisquam nesciunt temporibus tempore iste, maxime doloremque alias.</p>
        <h2>Sub Header</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore temporibus expedita error, alias cupiditate suscipit. Corporis iure facilis eligendi soluta voluptatum nemo. Error debitis laboriosam voluptate beatae quaerat, atque corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis ipsam omnis quis quaerat optio fugiat repudiandae repellendus laudantium. Eaque enim atque repellendus provident eum sint, et laborum exercitationem magni!</p>
      </div>
      <div className="navigation">
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  </>
  );
}

export default App;