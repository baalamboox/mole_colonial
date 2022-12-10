import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header"
import { Carousel } from "../components/Carousel"
import { Footer } from "../components/Footer"

export const MainLayout = () => {
    return (
        <>
            <Header />
            <Carousel />
            <div className="container-fluid bg-dark">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
