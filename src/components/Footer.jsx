export const Footer = () => {
    return (
        <footer className="bg-footer p-5">
            <div className="custom-map row">
                <div className="col">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe className="rounded" width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=tezompa&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 justify-content-center my-3">
                <div className="col-md-4">
                    <div className="card shadow bg-dark text-white" style={{ height: 200 }}>
                        <div className="card-body d-flex align-items-center">
                            <div className="w-100 text-center">
                                <div>
                                    <i className="fa-solid fa-location-dot d-block"></i>
                                    <span className="custom-border d-inline-block my-3 px-2">Dirección</span>
                                </div>
                                <small>Reforma 209, San Juan Tezompa, Estado de México.</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow bg-dark text-white" style={{ height: 200 }}>
                        <div className="card-body d-flex align-items-center">
                            <div className="w-100 text-center">
                                <div>
                                    <i className="fa-solid fa-envelope d-block"></i>
                                    <span className="custom-border d-inline-block my-3 px-2">Correo electrónico</span>
                                </div>
                                <small>moles_colonial@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow bg-dark text-white" style={{ height: 200 }}>
                        <div className="card-body d-flex align-items-center">
                            <div className="w-100 text-center">
                                <div>
                                    <i className="fa-solid fa-phone d-block"></i>
                                    <span className="custom-border d-inline-block my-3 px-2">Teléfono</span>
                                </div>
                                <small>55 32 98 20 57</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-3">
                <div className="col-md-3">
                    <div className="d-flex justify-content-center">
                    <a className="social-network btn btn-dark rounded-circle d-flex align-items-center justify-content-center me-2" href="https://es-la.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    <a className="social-network btn btn-dark rounded-circle d-flex align-items-center justify-content-center me-2" href="https://www.tiktok.com/es/"><i className="fa-brands fa-tiktok"></i></a>
                    <a className="social-network btn btn-dark rounded-circle d-flex align-items-center justify-content-center me-2" href="https://api.whatsapp.com/send?phone=525532982057&text=Mole%20Colonial"><i className="fa-brands fa-whatsapp"></i></a>
                    <a className="social-network btn btn-dark rounded-circle d-flex align-items-center justify-content-center me-2" href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <span className="text-white">Derechos reservados &copy; Mole Colonial 2022 </span>
                </div>
            </div>
        </footer>
    )
}
