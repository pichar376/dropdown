import ContainerLoggin from "./ContainerLoggin";
import Main from "./Main";
import SideContainer from "./SideContainer";

const MainContainer = () => {
  return (
    <div className="MyContainerMain">
      <Main />
      <SideContainer />
    </div>
  );
}

export default MainContainer;