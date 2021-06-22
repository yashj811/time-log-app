import { Fragment } from "react";
import Footer from "./footer";
import "../css/content.css";


const Content = ({ time, clickCount }) => {
  return (
    <Fragment>
      <div className="content">
      <div className="time-div">
        <h5>Logs</h5>

        {time.map((el, idx) => {
            return <p key={idx}>You clicked at {el}</p>
        })}
          </div>;

        <div className="count-div">
          <Footer clickCount={clickCount} />
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
