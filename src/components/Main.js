import MainLogo from "./MainLogo";
import NavBar from "./NavBar";


const Main = () => {
  return (<div className="myStyleMain">
    <article>
      <p className="main-text" >Make <br />remote work</p>
    </article>
    <article>

      <p>Get your team insync.no matter location.<br />Streamline processes create team virtuals.annd<br />watch productivity soar.</p>
    </article>
    <input type="button" value="Learn more" className="button-learn" />
    <MainLogo />
  </div>);
}

export default Main;