import { useState } from "react";
import styledComponents from "styled-components";
import MainContainer from "./MainContainer";
import Modal from "./Modal";
import NavBar from "./NavBar";
const MyContainerPage = styledComponents.div`
  `

const ContainerPage = () => {
  const [active, setActive] = useState(false);
  return (
    <MyContainerPage>
      <Modal active={active} />
      <NavBar active={active} setActive={setActive} />
      <MainContainer active={active} />

    </MyContainerPage >
  );
}

export default ContainerPage;