import { Fragment, useEffect, useState } from "react";

const Header = () => {
  const [currTime, setCurrTime] = useState("");

  useEffect(() => {
      setInterval(() => {
          let timeNow = new Date().toLocaleTimeString();
          let hour = new Date().getHours();
          Number(hour) < 22 ? setCurrTime(`0${timeNow}`) : setCurrTime(timeNow);
        }, 1000);
    },[]);

  return (
    <Fragment>
      <div>
        <p style={{fontSize: 'larger'}}>Current Time is : {currTime}</p>
      </div>
    </Fragment>
  );
};

export default Header;
