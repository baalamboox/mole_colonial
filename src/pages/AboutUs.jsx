export const AboutUs = () => {
    return (
        <>
            <div className="row">
                <div className="au-bg card vh-100 rounded-0 border-0 overflow-auto">
                    <div className="card-img-overlay d-flex align-items-center rounded-0">
                        <div className="au-overlay-card col rounded shadow-lg">
                            <div className="row">
                                <div className="col">
                                    <h1 className="au-title text-center text-warning">¿Quienes somos?</h1>
                                </div>
                            </div>
                            <div className="au-paragraph row justify-content-center">
                                <div className="col-8">
                                    <p className="text-white text-center">
                                        Esta sección sintetiza la esencia de tu empresa, y la mejor forma de hacerlo es resumiendo la marca como un todo. La personalidad del negocio estará plasmada en este apartado, por lo que es importante que sepas muy bien qué es lo que quieres reflejar y divulgar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                    <div className="au-card card shadow border-warning text-secondary">
                        <i className="au-icon-card fa-solid fa-rocket"></i>
                        <div className="card-body">
                            <h5 className="fs-3 card-title my-4">Misión</h5>
                            <p className="card-text text-center">La misión de una empresa es la descripción de lo que una compañía trata de hacer por sus clientes en la actualidad. Ese propósito debe responder a ciertas preguntas: «¿Quiénes somos?, ¿qué hacemos? y ¿por qué estamos aquí?</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="au-card card shadow border-warning text-secondary">
                        <i className="au-icon-card fa-solid fa-seedling"></i>
                        <div className="card-body">
                            <h5 className="fs-3 card-title">Visión</h5>
                            <p className="card-text text-center">La visión permite definir el camino que se debe seguir para alcanzar las metas propuestas. Para ello, debe representar de una forma clara y realista los principios que dan una identidad a esta empresa y responder a cuestiones como: ¿qué se desea lograr?, ¿hacia dónde nos dirigimos?, ¿dónde queremos estar en un futuro?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="fs-1 text-secondary">Valores</h2>
                </div>
                
            </div>
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
                <div className="col">
                    <div className="au-border-bottom-card card border-warning text-secondary">
                        <i className="au-icon-card fa-solid fa-medal"></i>
                        <div className="card-body">
                            <h5 className="fs-3 card-title">Honestidad</h5>
                            <p className="card-text text-center">“Es la conducta recta, honrada, que lleva a observar normas y compromisos, así como actuar con la verdad, lo que denota sinceridad y coherencia entre lo que una persona hace, lo que piensa, lo que dice o ha dicho”</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="au-border-bottom-card card border-warning text-secondary">
                        <i className="au-icon-card fa-solid fa-hand-holding-heart"></i>
                        <div className="card-body">
                            <h5 className="fs-3 card-title">Pasión</h5>
                            <p className="card-text text-center">apasionado por el trabajo, por la atención al cliente, y por todo lo que dice al respecto de tu compañía.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="au-border-bottom-card card border-warning text-secondary">
                        <i className="au-icon-card fa-solid fa-handshake"></i>
                        <div className="card-body">
                            <h5 className="fs-3 card-title">Responsabilidad</h5>
                            <p className="card-text text-center">La Responsabilidad Social Corporativa (RSC) es una nueva forma de dirigir las empresas en la que se tiene en cuenta el impacto que genera sus actividades, tanto en sus trabajadores o grupos de interés como en el ámbito social, económico o medioambiental.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="au-border-bottom-card card border-warning text-secondary">
                        <i className="au-icon-card fa-solid fa-thumbs-up"></i>
                        <div className="card-body">
                            <h5 className="fs-3 card-title">Confiabilidad</h5>
                            <p className="card-text text-center">Un "estado confiable" es el punto en el que la seguridad, confiabilidad y productividad de una empresa son óptimas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
