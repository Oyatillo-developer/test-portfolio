import '../style/home.scss'
import rasm from '../img/men3.jpg'
import { Element } from 'react-scroll';

function Home() {

    const but = () =>{
        const section = document.querySelector('#target');
        if(section){
            section.scrollIntoView({behavior: 'smooth'});
        }
    }

    return ( <>
    <Element name="home"></Element>
    <div className="home">
        <div className="boss">
            <div className="text">
                <div className="hi">
                    <h1>Salom men Oyatillo</h1>
                    <p>front-end dasturchiman</p>
                </div>
                <div className="info">
                    <p>HTML va CSS yordamida veb-saytlarning dizaynini ishlab chiqish. JavaScript yordamida interaktiv elementlarni yaratish.</p>
                </div>
                <button onClick={but} >contact me</button>
            </div>
            <div className="img">
                <img src={rasm} alt="photo" />
            </div>
        </div>
    </div>
    
    </> );
}

export default Home;