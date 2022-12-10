import banner_01 from '/img/carousel/banner_01.jpg'
import banner_02 from '/img/carousel/banner_02.jpeg'
import banner_03 from '/img/carousel/banner_03.jpg'

export const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide shadow" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ banner_01 } className="d-block w-100" alt="Loading..." />
                </div>
                <div className="carousel-item">
                    <img src={ banner_02 } className="d-block w-100" alt="Loading..." />
                </div>
                <div className="carousel-item">
                    <img src={ banner_03 } className="d-block w-100" alt="Loading..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
