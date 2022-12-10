import { KitchenRecipesCard } from '../components/KitchenRecipesCard'
import data from '../data/kitchen_recipes_data'

export const KichenRecipes = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <h1 className="text-warning fw-light"><i className="fa-solid fa-utensils me-2"></i>Recetas</h1>
                </div>
            </div>
            <div className="kr-bg row row-cols-1 row-cols-lg-4 g-2 g-lg-3 vh-100 overflow-auto pt-2 pb-3">
                {
                    data.map((item, index) => (
                        <div className="col" key={index}>
                            <KitchenRecipesCard  data={item} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
