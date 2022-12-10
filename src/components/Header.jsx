import { NavLink } from 'react-router-dom'
import moles_colonial from '/img/logo/moles_colonial.jpeg'

export const Header = () => {
    return (
        <header>
            <div className="bg-header align-items-center justify-content-between px-2 py-2 d-none d-sm-flex">
                <div>
                    <span><a className="nav-link d-inline me-2" href="mailto:mole_colonial@gmail.com"><i className="fa-solid fa-envelope me-2"></i>moles_colonia@gmail.com</a>|<a className="nav-link d-inline ms-2" href="tel:+525532982057"><i className="fa-solid fa-phone me-2"></i>55-32-98-20-57</a></span> 
                </div>
                <div className="d-flex">
                    <a className="social-network btn btn-dark rounded-circle d-flex align-items-center justify-content-center me-2" href="https://es-la.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    <a className="social-network btn btn-dark rounded-circle d-flex align-items-center justify-content-center me-2" href="https://www.tiktok.com/es/"><i className="fa-brands fa-tiktok"></i></a>
                    <a className="social-network btn btn-dark rounded-circle d-flex align-items-center justify-content-center me-2" href="https://api.whatsapp.com/send?phone=525548371531&text=Hi%20there!"><i className="fa-brands fa-whatsapp"></i></a>
                    <a className="social-network btn btn-dark rounded-circle d-flex align-items-center justify-content-center me-2" href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src={ moles_colonial } alt="" width="60" className="rounded-circle me-2"/>
                        Mole Colonial
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page"><i className="fa-solid fa-house me-2"></i>General</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="recetas" className="nav-link"><i className="fa-solid fa-utensils me-2"></i>Recetas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="acerca" className="nav-link"><i className="fa-solid fa-bookmark me-2"></i>Sobre nosotros</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
