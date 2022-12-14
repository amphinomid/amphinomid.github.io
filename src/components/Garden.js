import './App.css';
import Doorway from './images/door.svg';
import DoorwayOpen from './images/door_open.svg';

function Garden() {
  return (
    <div className="Content-outer">
      <div className="Content-inner">
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

export default Garden;
