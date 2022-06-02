import styledComponents from "styled-components";
import image from "../images/image-hero-desktop.png"

const SideContainerStyles = styledComponents.div`
  display: flex;;
  height: 70vh;
  margin:3rem;
  width:25em;
  img{
  height: 100%;
  width:40rem;
  `


const SideContainer = () => {
  return (<SideContainerStyles>
    <img src={image} className="image-desktop" />

  </SideContainerStyles>);
}

export default SideContainer