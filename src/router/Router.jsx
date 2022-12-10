import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { General } from '../pages/General'
import { KichenRecipes } from '../pages/KichenRecipes'
import { AboutUs } from '../pages/AboutUs'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MainLayout /> }>
                    <Route index element={ <General /> } />
                    <Route path="recetas" element={ <KichenRecipes /> } />
                    <Route path="acerca" element={ <AboutUs /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
