import { useState } from "react";
import styledComponents from "styled-components";

const DropDownCareers = ({ name, item1, item2, item3 }) => {
  const MydropDownButton = styledComponents.div`
position:relative;
display:flex;
flex-direction:column;
border:thin solid grey:
height:30vh;
margin:1em

`



  const [activeMenu, setActiveMenu] = useState(false);
  const [opacityColor, setOpacityColor] = useState("btn-inactive");
  const [addStyle, setAddStyle] = useState("none");

  const downArrow = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" /></svg>;

  const upArrow = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" /></svg>;

  const handleClick = () => {
    if (!activeMenu) {
      setActiveMenu(true)
      setAddStyle("careers-list")
      setOpacityColor("btn-active")
    } else {
      setActiveMenu(false)
      setAddStyle("none")
      setOpacityColor("btn-inactive")

    }
  }

  return (
    <MydropDownButton>
      <section className="careers-btn" onClick={handleClick}>
        <input type="button" value={name} className={opacityColor} />

        {activeMenu ? downArrow : upArrow}
      </section>

      <ul className={addStyle}>
        <li className="item-careers">{item1}</li>
        <li className="item-careers">{item2}</li>
        <li className="item-careers" >{item3}</li>

      </ul>
    </MydropDownButton >
  );
}

export default DropDownCareers;