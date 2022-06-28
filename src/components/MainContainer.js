
import styledComponents from "styled-components";
import MainContent from "./MainContent";
import SideImage from "./SideImage";

const MyContainerMain = styledComponents.div`
  display: flex;
  justify-content: space-evenly;
  align-content:center;
  height:80%;
  @media(max-width:960px){
   flex-direction:column-reverse;
  }

`
const MainContainer = ({ active }) => {
  return (
    <MyContainerMain>

      <MainContent active={active} />
      <SideImage />
    </MyContainerMain>
  );
}

export default MainContainer;