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
        In the past, I worked on coding projects for fun. I'm no longer maintaining them,
        but their source codes are on <a href="https://github.com/amphinomid">Github</a>.{` `}
        I also did two software engineering internships at Apple.
        <br /><br />
        <b>Random stuff</b><br />
        There's a quote from Nuala O'Faolain that I love, that if "there were nothing else,
        reading would--obviously--be worth living for."
        <br /><br />
        <a href="https://goodreads.com/amphinomid">
          Reading
        </a>
        <br /><br />
        <a href="blog">
          Musings that I have nowhere else to put
        </a>
        <br /><br />
        An artifact from my foray into digital gardening:
        <link rel="preload" href={DoorwayOpen} as="image" />
        <div style={{ height: `10vh` }} />
        <a href="https://amphinomid-garden.netlify.app" target="_blank" rel="noreferrer">
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              padding: `30px 200px 20px 100px`
            }}
          >
            <span
              className="doors"
              aria-label="Closed double doors forming rounded top, framed by a leafy vine; upon hover, double doors open"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
