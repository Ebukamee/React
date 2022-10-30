import "../Styles/Err.css"
import { Link } from "react-router-dom";

export default function Error() {
    return(
        <div className="error">
            <title>Error page</title>
        <h1>404</h1>
        <p>Oops! Looks like you strayed away </p>
        <Link to='/' className="navi">Back to Home</Link>
        </div>
    )
}