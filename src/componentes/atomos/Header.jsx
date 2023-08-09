import '../../assets/styles/HeaderStyle.css'
import Logo from "../../assets/images/icon.png"

function Header() {
    return (
        <div className="navbar">
            <div className='logo'>
                <img src={Logo} alt="logo" />
                <h1>Peko</h1>
            </div>

            <div>
                <button className='boton'>HOME</button>
                <button className='boton'>CONOCENOS</button>
                <button className='boton'>CONTACTO</button>
                <button className='boton'>REGISTRAR</button>
            </div>
        </div>
        

    );
}

export default Header;