import styledComponents from "styled-components";
import Main from "./Main";
import SideContainer from "./SideContainer";
const MyContainerMain = styledComponents.div`
  display: flex;
  justify-content: space-evenly;
  align-content:center;
  height:80%;
`
const MainContainer = () => {
  return (
    <MyContainerMain>
      <Main />
      <SideContainer />
    </MyContainerMain>
  );
}

export default MainContainer;