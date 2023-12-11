import '../styles/navbar/navBar.css'

const Navbar = () => {
    return (
        <header className="baseNabvar">
            <nav className="">
                <ul className="navBar-list">
                    <li className="list-Nav">
                        
                        <a>Home</a>
                    </li>
                    <li className="list-Nav">
                        <a>Portafolio </a>
                    </li>
                    <li className="list-Nav">
                        <a>Habilidades</a>
                    </li>
                    <li className="list-Nav">
                        <a>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
