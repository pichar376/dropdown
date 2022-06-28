import styledComponents from "styled-components";
import image from "../images/image-hero-desktop.png"

const SideImageStyles = styledComponents.div`
  display: flex;
  justify-content:center;
  height: 70vh;
  margin:3rem;
  width:100%;
   margin:2rem 0;
  .image-desktop{
    width:30rem;
    heigth:auto;
  }
  @media(max-width:960px){
     min-width:450px;
     margin:0;
     padding:0;
   .image-desktop{
   max-height:calc(100vh - 80px);
    heigth:auto;
    margin:0;
  }
  }
  `


const SideImage = () => {
  return (<SideImageStyles>
    <img src={image} className="image-desktop" />

  </SideImageStyles>);
}

export default SideImage;