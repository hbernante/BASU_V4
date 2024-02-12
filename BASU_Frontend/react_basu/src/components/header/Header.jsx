import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faVanShuttle} />
            <span>Hello</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faVanShuttle} />
            <span>This</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faVanShuttle} />
            <span>Is</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faVanShuttle} />
            <span>The</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faVanShuttle} />
            <span>Menu</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faVanShuttle} />
            <span>Bar</span>
          </div>
        </div>
        <h1 className="headerTitle">This is the Title</h1>
        <p className="headerDescription">This is the Description of the Title</p>
        <button className="headerButton">Sign In/Register</button>
      </div>
    </div>
  );
};
