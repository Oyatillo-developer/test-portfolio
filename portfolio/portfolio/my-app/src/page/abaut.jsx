import '../style/abaut.scss'
import devo from '../img/OIP.jpg'
import { Element } from 'react-scroll';

function Abaut() {
    return ( <>
    <Element name="haqimda"></Element>
    <div className="men">
        <div className="for">
            <div className="edit1">
                <div className="h111">
                    <p>#</p>
                    <h1>men haqimda</h1>
                </div>
                <div className="bor1"></div>
            </div>
            <div className="mina">
                <div className="matn">
                    <h1>Salom meni ismim Oyatillo</h1>
                    <p>Yoshim 20 mada junior dasturchiman men bajaradigan ishlar HTML va CSS yordamida veb-saytlarning dizaynini ishlab chiqish. JavaScript yordamida interaktiv elementlarni yaratish. Web sahifalarni optimallashtirish va foydalanuvchi tajribasini yaxshilash uchun turli vositalarni qo'llash.</p>
                </div>
                <div className="rasm1">
                    <img src={devo} alt="photo" />
                </div>
            </div>
        </div>
    </div>
    
    </> );
}

export default Abaut;