import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import forestOne from "./images/forrestOne.jpg"
import forestTwo from "./images/forrestTwo.jpg"
import forestThree from "./images/forrestThree.jpg"
import forestFour from "./images/forrestFour.jpg"
import forestFive from "./images/forrestFive.jpg"
import forestGump from "./images/gump.jpg"

const App = () => {
  return (
  <>
    <Header />
    <section>
      <Card
      name = 'Forest One'
      image = {forestOne}
      imageAlt = 'Forest One image'
      text = 'A forest is an area of land dominated by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing, and ecological function.'
      />
      <Card 
      name = 'Forest Two'
      image = {forestTwo}
      imageAlt = 'Forest Two image'
      text = 'Forests are the predominant terrestrial ecosystem of Earth, and are found around the globe. More than half of the world forests are found in only five countries (Brazil, Canada, China, Russia, and the United States).'
      />
      <Card 
      name = 'Forest Three'
      image = {forestThree}
      imageAlt = 'Forest Three image'
      text = 'Forests account for 75% of the gross primary production of the Earths biosphere, and contain 80% of the Earths plant biomass. Net primary production is estimated at 21.9 gigatonnes of biomass per year for tropical forests, 8.1 for temperate forests, and 2.6 for boreal forests.'
      />
      <Card 
      name = 'Forest Four'
      image = {forestFour}
      imageAlt = 'Forest Four image'
      text = "Human society and forests influence each other in both positive and negative ways. Forests provide ecosystem services to humans and serve as tourist attractions. Forests can also affect people's health. Human activities, including unsustainable use of forest resources, can negatively affect forest ecosystems."
      />
      <Card 
      name = 'Forest Five'
      image = {forestFive}
      imageAlt = 'Forest v image'
      text = 'Forests at different latitudes and elevations, and with different precipitation and evapotranspiration form distinctly different biomes: boreal forests around the North Pole, tropical moist forests and tropical dry forests around the Equator, and temperate forests at the middle latitudes.'
      />
      <Card 
      name = 'Forest Six'
      image = {forestGump}
      imageAlt = 'Forest Six image'
      text = 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.'
      />
    </section>
  </>
  );
}

export default App;
