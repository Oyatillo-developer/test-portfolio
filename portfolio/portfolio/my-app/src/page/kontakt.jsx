import toast, {Toaster} from 'react-hot-toast';
import { Element } from 'react-scroll';
import '../style/kontakt.scss'

function Contact() {
    
    function Btn(){
        const name = document.querySelector('#inp').value;
        const isname = document.querySelector('#inp1').value;
        const email = document.querySelector('#inp2').value;
        const massage = document.querySelector('#inp3').value;
        if(!name || !isname || !email || !massage){
            toast.error("Kataklarni to'ldiring", {
                style: {
                    fontFamily: 'sans-serif',
                }
            })
        }else if(!email.includes('@') || !email.includes('.')){
            toast.error("email malumoti noto'g'ri",  {
                style: {
                    fontFamily: 'sans-serif',
                }
            })
        }else if(!massage){
            toast.error('menga xabar yuboring',  {
                style: {
                    fontFamily: 'sans-serif',
                }
            })
        }else{
            toast.success("xabar jo'natildi",  {
                style: {
                    fontFamily: 'sans-serif',
                }
            })
            const formData = []
            formData.push(name)
            formData.push(isname)
            formData.push(email)
            formData.push(massage)
            console.log(formData);

            const ap = document.querySelector('#inp').value
            localStorage.setItem('name', `${ap}`)

            const app = document.querySelector('#inp1').value
            localStorage.setItem('isname', `${app}`)

            const ap1 = document.querySelector('#inp2').value
            localStorage.setItem('email', `${ap1}`)

            const app1 = document.querySelector('#inp3').value
            localStorage.setItem('massage', `${app1}`)
        }
    }

    return ( <>
    <Element id='target' name="kontakt"></Element>
    <div className="its">
        <div className="me">
            <div className="app">
                <div className="how">
                    <p>#</p>
                    <h1>Kontaktlar</h1>
                </div>
                <div className="line"></div>
            </div>
            <div className="bbc">
                <div className="register">
                    <div className="one">
                        <input id='inp' type="text" placeholder='ism'/>
                        <input id='inp1' type="text" placeholder='familya' />
                    </div>
                    <div className="one2">
                        <input id='inp2' type="text" placeholder='email' />
                    </div>
                    <div className="one3">
                        <input id='inp3' type="text" placeholder='xabaringiz' />
                    </div>
                    <button onClick={()=> Btn()}>Jo'natish</button>
                </div>
                <div className="son">
                    <div className="massage">
                        <h1>Aloqa manzillarim</h1>
                        <div className="icon">
                            <i class="fa-brands fa-telegram"></i>
                            <h1>@W3b_developer</h1>
                        </div>
                        <div className="icon">
                            <i class="fa-solid fa-envelope"></i>
                            <h1>oyatilloortiqov2@gmail.com</h1>
                        </div>
                        <div className="icon">
                            <i class="fa-solid fa-phone"></i>
                            <h1>+998932509377</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Toaster/>
    
    </> );
}

export default Contact;