// About Page
export default function About() {
    return (
      <div className="mainpage">
        
        {/* The page talks about the straw hat crew members  */}
        <h2>About</h2>
        <p>The crew currently consists of ten members, being smaller than a typical pirate crew; when he first set sail, Luffy set a goal of gaining ten crewmates.
          Despite their small size, the Straw Hats are an extremely diverse group possessing a large variety of backgrounds. 
          The crew consists of eight humans, one fish-man, and one animal with Devil Fruit-powered human intellect; of the humans, Sanji possesses superhuman modifications given to him at birth, Franky is a cyborg, and Brook possesses a skeleton body after being resurrected by a Devil Fruit power. 
          They range in age from 17 (Chopper) to 90 (Brook); the median age of the crew is 21.
        </p>
        <h3>Straw Hat Pirates</h3>
        <ul className="charachters">
          <li>
            Monkey D luffy
          </li>
          <li>
            Roronoa Zoro
          </li>
          <li>
            Nami 
          </li>
          <li>
            Ussop
          </li>
          <li>
            Sanji
          </li>
          <li>
            Tony Tony Chopper
          </li>
          <li>
           Nico Robin
          </li>
          <li>
           Brook
          </li>
          <li>
            Cyborg Franky 
          </li>
          <li>
            Jinbe
          </li>
        </ul>

        <img className="strawhats" src="images/Charachters.jpg" alt="Straw Hat Pirates Crew Members" />

      </div>
    );
  }