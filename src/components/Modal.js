import styledComponents from "styled-components";

const MyModal = styledComponents.article`

  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  opacity:0;
  visibility:hidden;
  display:flex;
justify - content: center;
align - items: center;
 transition:all .8s ease-in-out;


&.is-open {
  opacity:1;
  visibility:visible;
}
@media(min-width:770px){
opacity:0;
  visibility:hidden;
  display:none;
}
`

const Modal = ({ active }) => {
  console.log(active, "modal")
  return (

    <MyModal className={`modal ${active ? "is-open" : ""}`}>
    </MyModal>
  );
};

export default Modal;
