import { Fragment } from "react";
import logo from "../logo.png";

const Logo = () => {
  return (
    <Fragment>
      <div style={{ verticalAlign: "middle",
            display: "table-cell"}}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "60px",
            height: "60px",
           
          }}
        />
      </div>
    </Fragment>
  );
};

export default Logo;
