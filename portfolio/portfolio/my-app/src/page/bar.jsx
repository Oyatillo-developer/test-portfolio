import { Link as ScrollLink } from 'react-scroll';
import '../style/bar.scss';

function Bar() {
    return (
        <>
            <div className="bar">
                <div className="nav">
                    <div className="name">
                        <i className="fa-brands fa-connectdevelop"></i>
                        <h1>Tillo Web</h1>
                    </div>
                    <div className="link">
                        <div className="kil">
                            <p>#</p>
                            <ScrollLink to="home" smooth={true} duration={500}>
                                uy
                            </ScrollLink>
                        </div>
                        <div className="kil">
                            <p>#</p>
                            <ScrollLink to="qobilyat" smooth={true} duration={500}>
                                ko'nikmalar
                            </ScrollLink>
                        </div>
                        <div className="kil">
                            <p>#</p>
                            <ScrollLink to="haqimda" smooth={true} duration={500}>
                                men haqimda
                            </ScrollLink>
                        </div>
                        <div className="kil">
                            <p>#</p>
                            <ScrollLink to="kontakt" smooth={true} duration={500}>
                                kontaktlar
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Bar;
