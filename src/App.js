import './App.css';
import Doorway from './images/door.svg';
import DoorwayOpen from './images/door_open.svg';

function App() {
  return (
    <div className="Content-outer">
      <div className="Content-inner">
        I'm a third-year Stanford undergrad studying CS and communication.
        I help out with research in the <a href="https://hci.stanford.edu">HCI Group</a>{` `}
        and write news for <a href="https://stanforddaily.com/author/anne24">The Daily</a>.
        <br /><br />
        Sometimes I make coding projects for fun. Their source codes are on{` `}
        <a href="https://github.com/amphinomid">Github</a>.{` `}
        I also previously worked on Safari at Apple during two software engineering internships.
        <br /><br />
        <b>Random stuff</b><br />
        There's a quote from Nuala O'Faolain that I love, that if "there were nothing else,
        reading would--obviously--be worth living for."
        <br /><br />
        <a href="https://goodreads.com/amphinomid">
          Reading
        </a>
        <br /><br />
        <a href="https://amphinomid.github.io/luxe">
          An interactive, 3d depiction of a surveillance tech-fueled world that I've been working on lately
        </a>
        <br /><br />
        <a href="/#/blog">
          Musings that I have nowhere else to put
        </a>
        <br /><br />
        <a href="/#/garden">
          An artifact from my foray into digital gardening
        </a>
      </div>
    </div>
  );
}

export default App;
