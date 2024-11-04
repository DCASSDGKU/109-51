import "./styles/home.css";
import backImg from  "../img/Green.jpg"
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="home page">

            {/* opt 1, with image in public folder */}
            <div className="home-text">
                <h1>Don't Panic, It's Organic!</h1>

                <Link className='btn btn-success' to="/catalog">Check our amazing secrets</Link>   
            </div>



            
            
        
            {/* opt 2, with image in src and imported */}
            <img src={backImg} alt="/img/" />
        </div>
    )
}

export default Home;
