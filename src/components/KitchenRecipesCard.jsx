export const KitchenRecipesCard = ({ data: { id, title, img, introduction, portions, preparation_time, difficulty, url } }) => {
    return (
        <div className="kr-bg-card card shadow p-3">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="kr-badge d-flex align-items-center justify-content-center rounded-circle">
                    <span className="text-white fs-5">{id}</span>
                </div>
                <div className="ms-3">
                    <h5 className="text-white">{title}</h5>
                </div>
            </div>
            <div className="text-center mb-4">
                <img src={img} className="kr-img rounded-circle" alt="Loading..." />
            </div>
            <div className="card-body text-white">
                <div className="mb-3">
                    <p className="card-text">{introduction}</p>
                </div>
                <div className="mb-4">
                    <small className="d-block"><i className="kr-icon fa-solid fa-users me-2"></i>Porciones: {portions}</small>
                    <small className="d-block"><i className="kr-icon fa-solid fa-clock me-2"></i>Tiempo de preparación: {preparation_time > 1 ? preparation_time + " hrs" : preparation_time + " hr"}</small>
                    <small className="d-block"><i className="kr-icon fa-solid fa-hands me-2"></i>Dificultad: {difficulty}</small>
                </div>
                <div className="text-end">
                    <a href={url} className="kr-btn-outline btn"><i className="fa-solid fa-eye me-2"></i>Ver receta</a>
                </div>
            </div>
        </div>
    )
}
