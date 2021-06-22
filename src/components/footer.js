import { Fragment } from "react";
import "../css/content.css";

const Footer = ({ clickCount }) => {
  return (
    <Fragment>
      <p className="count-p">You clicked {clickCount} times</p>
    </Fragment>
  );
};

export default Footer;
