import Nav from "./Nav"
import "./Styles/Home.css"
import Mockup from './Images/mockups.svg'
import Logo from'./Images/logo.svg'


function Home() {
    return (
        <>
        <div id="flex">
        <div id="hero">
          <h1 className="h1">Build the Community your fans will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice
            and so does your audience. Create Connection with your users as you
            engage in genuine discussion.
          </p>
        </div>
        <img src={Mockup} alt="mockups" id="mi" />
      </div>
        </>
    )
}

export default Home;

function Backup () {
    return (
        <>
        <div className="hero">
                <h1>
                    <span className="powered">Powered </span>
                    By Intellect Driven By values
                </h1>
            </div>
            <div className="herop"></div></>
    )
}