import '../Styles/About.css'
import Email from '../Images/icon-email.svg'
import Phone from '../Images/icon-phone.svg'
import Location from '../Images/icon-location.svg'


function Support() {
    return (
        <div id="info">
          <h2>Contact Us</h2>
          <span>
            <img src={Location} alt="location" />
            <p>55 Owerri Road Ogui, Enugu</p>
          </span>
          <span>
            <img src={Phone} alt="location" />
            <p>+234 802 0419 306</p>
          </span>
          <span>
            <img src={Email} alt="location" />
            <p>example@huddle.com</p>
          </span>
        </div>
    )
}



export default Support;