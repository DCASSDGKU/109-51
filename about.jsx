import { useState } from "react";
import "./styles/about.css";

function About(){
    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }

    return(
        <div className="about page">
            <h3>About us</h3>
            
            <div className="box">
                <h2>Dennis Casiguran</h2>
                { visibleEmail ? <h5>dbc_bun@yahoo.com</h5> : <label>Click the button to see my email</label> }
                <br />
                { 
                    !visibleEmail 
                        ? <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
                        : null
                }
            </div>
        </div>
    );
}

export default About;