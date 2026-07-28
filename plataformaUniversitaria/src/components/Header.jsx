import Perfil from '../images/Perfil.jpg';
import Sino from '../images/Sinonotificar.jpg';
import "./Header.css"
import
function Header(btn) {
    return (
        <header className="Header-body">
            <h1 className="Header-name">Unitroca</h1>
            <main className="Header-options">
                <span className="option1">Início</span>
                <span className="option2">Impacto</span>
                <span className="option3">Sobre</span>
            </main>
            <main className="notificar_perfil">
                <img src={Sino} alt="" className='sino'/>
                <img src={Perfil} alt="" className='perfil'/>
            </main>
        </header>
    )
    
}
export default Header