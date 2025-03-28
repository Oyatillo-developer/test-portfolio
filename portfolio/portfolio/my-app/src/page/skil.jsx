import '../style/skil.scss'
import dev from '../img/-front-end-developer.png'
import { Element } from 'react-scroll';

function Skil() {
    return ( <>
    <Element name="qobilyat"></Element>
    <div className="go">
        <div className="run">
            <div className="edit">
                <div className="h11">
                    <p>#</p>
                    <h1>ko'nikmalar</h1>
                </div>
                <div className="bor"></div>
            </div>
            <div className="view">
                <div className="img2">
                    <img src={dev} alt="photo" />
                </div>
                <div className="help">
                    <div className="skill">
                        <div className="ok">
                            <div className="text1">
                                <h1>Tillar</h1>
                            </div>
                            <div className="p1">
                                <p>HTML, CSS, SCSS, JavaScript, React,</p>
                            </div>
                        </div>
                        <div className="ok">
                            <div className="text1">
                                <h1>Boshqalar</h1>
                            </div>
                            <div className="p1">
                                <p>Git, GitHub</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="ok">
                            <div className="text1">
                                <h1>Databasa</h1>
                            </div>
                            <div className="p1">
                                <p>MongoDB, JSON</p>
                            </div>
                        </div>
                        <div className="ok">
                            <div className="text1">
                                <h1>Asboblar</h1>
                            </div>
                            <div className="p1">
                                <p>Visual Studio Code, Figma, Font Awesome</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </> );
}

export default Skil;