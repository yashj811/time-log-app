import {Fragment, useState} from 'react';
import '../css/sidebar.css'
import Content from './content';

const SideBar = () =>{

  const [time, setTime] = useState([]);
  const [clickCount, setClickCount] = useState(0);
 
  
  const handleClick = (e) => {
    e.preventDefault();
    let timeNow = new Date().toLocaleTimeString();
    let hour = new Date().getHours();
    timeNow = Number(hour) < 22 ? `0${timeNow}` : timeNow;
    setTime([...time, timeNow]);
    setClickCount(clickCount + 1);
  }

  return (

    <Fragment>

        <div className='sidebar'>
          <div className='side-div'>
            <div className='btn-div'>

            <button onClick={handleClick} className='clickme' >Click to Log!</button>
            </div>
          </div>
            <Content time={time} clickCount={clickCount} />
        </div>

    </Fragment>

  )
  
}



export default SideBar;
